import React from 'react';

import { MDXProvider } from '@mdx-js/react';
import { defaultOverrides } from 'jui-markdown';
import type { MDXComponents } from 'mdx/types';

import { InlineCode } from './InlineCode';
import { PreBlock } from './PreBlock';
import { SoftLink } from '../../components/SoftLink';

const mdxComponents: MDXComponents = {
  ...(defaultOverrides as any), // eslint-disable-line @typescript-eslint/no-explicit-any
  span: props => <span {...props} />,
  a: props => <SoftLink {...(props as any)} />, // eslint-disable-line @typescript-eslint/no-explicit-any
  code: InlineCode,
  pre: PreBlock as any, // eslint-disable-line @typescript-eslint/no-explicit-any
  // Missing the following: ol, ul, thead, tbody, tr, th, td
};

interface JoyMDXProviderProps {
  children: React.ReactNode;
}

export const JoyMDXProvider: React.FC<JoyMDXProviderProps> = ({ children }) => {
  return <MDXProvider components={mdxComponents}>{children}</MDXProvider>;
};
