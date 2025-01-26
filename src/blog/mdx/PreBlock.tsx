import React, { CSSProperties, FC } from 'react';

export interface PreBlockProps {
  children?: string;
  styles?: CSSProperties;
}

export const PreBlock: FC<PreBlockProps> = props => {
  // Props
  const { children = '', styles } = props;

  return (
    <pre
      style={{
        borderRadius: '0.5rem',
        overflow: 'auto',
        ...styles,
      }}
    >
      {children}
    </pre>
  );
};
