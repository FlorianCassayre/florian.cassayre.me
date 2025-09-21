import React from 'react';

import { MDXProvider } from '@mdx-js/react';
import { Typography } from '@mui/joy';
import { defaultOverrides } from 'jui-markdown';
import type { MDXComponents } from 'mdx/types';

import { Image as ImageElement } from './Image';
import { InlineCode } from './InlineCode';
import { Link as LinkElement } from './Link';
import { PreBlock } from './PreBlock';

import 'katex/dist/katex.min.css';

const mdxComponents: MDXComponents = {
  ...(defaultOverrides as any), // eslint-disable-line @typescript-eslint/no-explicit-any
  p: props => <Typography {...(props as any)} sx={{ textAlign: 'justify', my: 1 }} />, // eslint-disable-line @typescript-eslint/no-explicit-any
  span: props => <span {...props} />,
  a: LinkElement,
  code: InlineCode,
  pre: PreBlock,
  ul: props => <ul {...props} style={{ marginTop: 4, marginBottom: 4, ...props.style }} />,
  ol: props => <ol {...props} style={{ textAlign: 'justify', ...props.style }} />,
  img: ImageElement,
  // Missing the following: thead, tbody, tr, th, td
};

interface JoyMDXProviderProps {
  children: React.ReactNode;
}

export const JoyMDXProvider: React.FC<JoyMDXProviderProps> = ({ children }) => {
  return <MDXProvider components={mdxComponents}>{children}</MDXProvider>;
};
