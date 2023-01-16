import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
/** this line goes into your scully.<app>.config.ts */
import 'prismjs/components/prism-java.js';

import '@scullyio/scully-plugin-puppeteer';
setPluginConfig('md', { enableSyntaxHighlighting: true });

import { getHttp404Plugin } from '@gammastream/scully-plugin-http404';
const Http404Plugin = getHttp404Plugin();
console.log('Http404Plugin: ', Http404Plugin);

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
  },
};
