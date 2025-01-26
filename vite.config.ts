import mdx from '@mdx-js/rollup';
import { transformerNotationDiff } from '@shikijs/transformers';
import react from '@vitejs/plugin-react';
import type { Options as RemarkRehypeOptions } from 'mdast-util-to-hast';
import { rehypePrettyCode } from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import vike from 'vike/plugin';
import { UserConfig } from 'vite';

// Inspired by https://github.com/brillout/docpress/blob/main/src/vite.config.ts
const prettyCode = [
  rehypePrettyCode,
  { theme: 'github-light', transformers: [transformerNotationDiff({ matchAlgorithm: 'v3' })] },
];
const rehypePlugins: any = [prettyCode]; // eslint-disable-line @typescript-eslint/no-explicit-any
const remarkPlugins = [
  [
    remarkRehype,
    {
      footnoteLabelTagName: 'span',
      footnoteLabel: ' ',
      footnoteBackLabel: i => `${i + 1}`,
      clobberPrefix: '',
    } satisfies RemarkRehypeOptions,
  ] as any, // eslint-disable-line @typescript-eslint/no-explicit-any
  remarkGfm,
];

const config: UserConfig = {
  plugins: [
    mdx({
      providerImportSource: '@mdx-js/react',
      rehypePlugins,
      remarkPlugins,
    }),
    react(),
    vike({
      prerender: true,
      // Doesn't seem to work anymore with `vike-react`; instead we re-implement it with a meta refresh tag (also `redirect` doesn't support SSG anyways)
      //redirects: INVISIBLE_REDIRECTIONS,
    }),
  ],
};

// eslint-disable-next-line import/no-default-export
export default config;
