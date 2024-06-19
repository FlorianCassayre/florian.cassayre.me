import React, { useMemo } from 'react';
import { Box, Card } from '@mui/joy';

// See https://oatcookies.neocities.org/ubuntu-terminal-colors

const DEFAULT_BACKGROUND_COLOR = '#300924';
const DEFAULT_TEXT_COLOR = '#ffffff';

const COLORS: string[] = [
  '#2e3436',
  '#cc0000',
  '#4e9a06',
  '#c4a000',
  '#3465a4',
  '#75507b',
  '#06989a',
  '#d3d7cf',
  '#555753',
  '#ef2929',
  '#8ae234',
  '#fce94f',
  '#729fcf',
  '#ad7fa8',
  '#34e2e2',
  '#eeeeec',
];

const enum ParseError {
  Underflow,
  UnsupportedControlCode,
  InvalidNumber,
  UnsupportedModeOrParameter,
}

const enum AnsiEscapeType {
  Reset,
  Bold,
  ColorForeground,
  ColorBackground,
  MoveRow,
  MoveColumn,
}

type ParsedAnsi = { type: AnsiEscapeType } & ({
  type: AnsiEscapeType.Reset | AnsiEscapeType.Bold;
} | {
  type: AnsiEscapeType.ColorForeground | AnsiEscapeType.ColorBackground;
  color: string;
} | {
  type: AnsiEscapeType.MoveRow;
} | {
  type: AnsiEscapeType.MoveColumn;
  offset: number;
});

type CharOrParsedAnsi = string | ParsedAnsi;

const parseAnsi = (s: string): CharOrParsedAnsi[] => {
  const result: CharOrParsedAnsi[] = [];
  let i = 0;
  const error = (error: ParseError): never => {
    throw new Error(`${i}: ${error}`);
  }
  const checkUnderflow = () => {
    if (i >= s.length) {
      error(ParseError.Underflow);
    }
  };
  const parseNumber = () => {
    const startIndex = i;
    while (i < s.length && '0' <= s[i] && s[i] <= '9') {
      i++;
    }
    if (startIndex === i) {
      error(ParseError.InvalidNumber);
    }
    return parseInt(s.slice(startIndex, i));
  };
  const parseLargeColor = (): number => {
    const n1 = parseNumber();
    if (n1 !== 5) {
      error(ParseError.UnsupportedModeOrParameter);
    }
    checkUnderflow();
    if (s[i] !== ';') {
      error(ParseError.UnsupportedModeOrParameter);
    }
    i++;
    const n2 = parseNumber();
    if (!(0 <= n2 && n2 < 16)) {
      error(ParseError.UnsupportedModeOrParameter);
    }
    checkUnderflow();
    if (s[i] !== 'm') {
      error(ParseError.UnsupportedModeOrParameter);
    }
    i++;
    return n2;
  };
  while (i < s.length) {
    if (s[i] === '') {
      i++;
      checkUnderflow();
      if (s[i] === '[') {
        i++;
        checkUnderflow();
        if (s[i] === 'm') {
          i++;
          result.push({ type: AnsiEscapeType.Reset });
        } else {
          const isPrivate = s[i] === '?';
          if (isPrivate) {
            i++;
            checkUnderflow(); // For the next instruction
          }
          const n = parseNumber();
          checkUnderflow();
          const c = s[i];
          i++;
          const isM = c === 'm';
          if (isPrivate) {
            if ((n !== 7 && n !== 25) || !'lh'.includes(c)) {
              error(ParseError.UnsupportedModeOrParameter);
            }
            // Disable/enable wrapping/cursor
            // (ignored)
          } else if (c === 'C') { // Move cursor by columns
            result.push({ type: AnsiEscapeType.MoveColumn, offset: n });
          } else if (c === 'D') { // Reset row (?)
            result.push({ type: AnsiEscapeType.MoveRow });
          } else if (n === 0 && isM) { // Reset
            result.push({ type: AnsiEscapeType.Reset });
          } else if (n === 1 && isM) { // Bold
            result.push({ type: AnsiEscapeType.Bold });
          } else if (n === 20 && c === 'A') { // "Fraktur" font
            // (ignored)
          } else if (30 <= n && n < 38 && isM) { // Color foreground
            result.push({ type: AnsiEscapeType.ColorForeground, color: COLORS[n - 30] });
          } else if (n === 38 && c === ';') { // Color foreground (8-bit)
            const color = parseLargeColor();
            result.push({ type: AnsiEscapeType.ColorForeground, color: COLORS[color] });
          } else if (40 <= n && n < 48 && isM) { // Color background
            result.push({ type: AnsiEscapeType.ColorBackground, color: COLORS[n - 40] });
          } else if (n === 48 && c === ';') { // Color background (8-bit)
            const color = parseLargeColor();
            result.push({ type: AnsiEscapeType.ColorBackground, color: COLORS[color] });
          } else {
            error(ParseError.UnsupportedModeOrParameter);
          }
        }
      } else {
        error(ParseError.UnsupportedControlCode);
      }
    } else {
      result.push(s[i]);
      i++;
    }
  }
  return result;
}

interface TextFormat {
  bold: boolean;
  colorForeground: string;
  colorBackground: string;
}

const DEFAULT_TEXT_FORMAT = {
  bold: false,
  colorForeground: DEFAULT_TEXT_COLOR,
  colorBackground: DEFAULT_BACKGROUND_COLOR,
};

interface TextCommand {
  format: TextFormat;
  text: string;
}

interface MoveCommand {
  offset: number | null;
}

type Command = TextCommand | MoveCommand;

const splitTags = (tokens: CharOrParsedAnsi[]): Command[] => {
  const commands: Command[] = [];
  let stringBuffer: string[] = [];
  let format = DEFAULT_TEXT_FORMAT;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (typeof token === 'string') { // Character
      stringBuffer.push(token);
    } else { // Control
      if (stringBuffer.length > 0) {
        commands.push({ format, text: stringBuffer.join('') });
        stringBuffer = [];
      } // Otherwise nothing to push
      switch (token.type) {
        case AnsiEscapeType.Reset:
          format = DEFAULT_TEXT_FORMAT;
          break;
        case AnsiEscapeType.Bold:
          format = { ...format, bold: true };
          break;
        case AnsiEscapeType.ColorForeground:
          format = { ...format, colorForeground: token.color };
          break;
        case AnsiEscapeType.ColorBackground:
          format = { ...format, colorBackground: token.color };
          break;
        case AnsiEscapeType.MoveRow:
          commands.push({ offset: null });
          break;
        case AnsiEscapeType.MoveColumn:
          commands.push({ offset: token.offset });
          break;
      }
    }
  }
  if (stringBuffer.length > 0) { // Last case
    commands.push({ format, text: stringBuffer.join('') });
  }
  return commands;
};

const reassembleCommands = (commands: Command[]): TextCommand[] => {
  // This is not exactly how that mode works, but it's simple enough and just works in this case
  const lines: TextCommand[][] = [];
  const clean = new Set<number>();
  let offsetRow = 0, offsetColumn = 0;
  commands.forEach(command => {
    if (!('offset' in command)) { // Normal
      const subLines = command.text.split('\n');
      for (let i = 0; i < subLines.length; i++) {
        const line = subLines[i];
        const value = { format: command.format, text: line };
        if (i > 0) {
          offsetRow++;
        }
        if (lines.length <= offsetRow) {
          lines.push([]);
        }
        const currentRow = lines[offsetRow];
        currentRow.push(
          clean.has(offsetRow)
            ? value
            : { ...command, text: ' '.repeat(Math.max(offsetColumn - currentRow.map(({ text }) => text.length).reduce((a, b) => a + b, 0), 0)) + line }
        );
        clean.add(offsetRow);
      }
    } else { // Move
      const offset = command.offset;
      if (offset !== null) {
        offsetColumn = offset;
      } else {
        offsetRow = 0;
      }
      clean.clear();
    }
  });
  const result = lines.flatMap(line => {
    if (line.length > 0) {
      const last = line[line.length - 1];
      return [...line.slice(0, line.length - 1), { format: last.format, text: last.text.trimEnd() + '\n' }];
    } else {
      return line;
    }
  }).filter(({ text }) => !!text.length);
  return result.slice(0, result.length - 2); // Remove the last 4 tags which are empty
}

interface NeofetchCardProps {
  neofetchRaw: string;
}

export const NeofetchCard: React.FC<NeofetchCardProps> = ({ neofetchRaw }) => {
  const parsed = useMemo(() => reassembleCommands(splitTags(parseAnsi(neofetchRaw))), [neofetchRaw]);
  return (
    <Card sx={{ color: DEFAULT_TEXT_COLOR, backgroundColor: DEFAULT_BACKGROUND_COLOR }}>
      <Box sx={{ textAlign: 'center' , fontFamily: 'monospace', lineHeight: 1.175 }}>
        <Box component="pre" sx={{ display: 'inline-block', textAlign: 'left' }}>
          {parsed.map(({ format: { bold, colorForeground, colorBackground }, text }, i) => (
            <span key={i} style={{ fontWeight: bold ? 'bold' : undefined, color: colorForeground !== DEFAULT_TEXT_COLOR ? colorForeground : undefined, backgroundColor: colorBackground !== DEFAULT_BACKGROUND_COLOR ? colorBackground : undefined }}>{text}</span>
          ))}
        </Box>
      </Box>
    </Card>
  );
}
