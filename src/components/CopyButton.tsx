import React, { useState } from 'react';

import { Check, ContentCopy } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/joy';
import { useIntl } from 'react-intl';

const Key = 'common.copy';

interface CopyButtonProps {
  content: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({ content }) => {
  const { $t } = useIntl();
  const [copied, setCopied] = useState(false);
  const handleMouseLeave = () => setCopied(false);
  const handleClick = () => {
    setCopied(true);
    return window.navigator.clipboard.writeText(content);
  };
  return (
    <Tooltip title={!copied ? $t({ id: `${Key}.copy` }) : $t({ id: `${Key}.copied` })} onMouseLeave={handleMouseLeave}>
      <IconButton onClick={handleClick}>{!copied ? <ContentCopy color="action" /> : <Check />}</IconButton>
    </Tooltip>
  );
};
