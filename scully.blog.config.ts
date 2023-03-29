import {
  HandledRoute,
  registerPlugin,
  RouteTypes,
  ScullyConfig,
  setPluginConfig,
} from '@scullyio/scully';

import 'prismjs/components/prism-java.js';
import 'prismjs/components/prism-bash';

import '@scullyio/scully-plugin-puppeteer';
setPluginConfig('md', { enableSyntaxHighlighting: true });

import { getHttp404Plugin } from '@gammastream/scully-plugin-http404';
const Http404Plugin = getHttp404Plugin();

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'blog',
  distFolder: './dist/blog', // output directory of your Angular build artifacts
  outDir: './dist/static', // directory for scully build artifacts
  defaultPostRenderers: [Http404Plugin],
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './blog',
      },
    },
    '/tips/:tweetId': {
      type: 'contentFolder',
      tweetId: {
        folder: './tips',
      },
    },
  },
};
