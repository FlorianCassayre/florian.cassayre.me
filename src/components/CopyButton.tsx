import React, { useState } from 'react';
import { IconButton, Tooltip } from '@mui/joy';
import { Check, ContentCopy } from '@mui/icons-material';

interface CopyButtonProps {
  content: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({ content }) => {
  const [copied, setCopied] = useState(false);
  const handleMouseLeave = () => setCopied(false);
  const handleClick = () => {
    setCopied(true);
    return window.navigator.clipboard.writeText(content);
  };
  return (
    <Tooltip title={!copied ? 'Copy?' : 'Copied!'} onMouseLeave={handleMouseLeave}>
      <IconButton onClick={handleClick}>{!copied ? <ContentCopy color="action" /> : <Check />}</IconButton>
    </Tooltip>
  );
};
