import React, { FC } from 'react';

type PreBlockProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>;

export const PreBlock: FC<PreBlockProps> = props => {
  // Props
  const { children = '', style } = props;

  return (
    <pre
      style={{
        borderRadius: '0.5rem',
        overflow: 'auto',
        ...style,
      }}
    >
      {children}
    </pre>
  );
};
