import {
  HandledRoute,
  registerPlugin,
  RouteTypes,
  ScullyConfig,
  setPluginConfig,
} from '@scullyio/scully';
/** this line goes into your scully.<app>.config.ts */
import 'prismjs/components/prism-java.js';

import '@scullyio/scully-plugin-puppeteer';
setPluginConfig('md', { enableSyntaxHighlighting: true });

import { getHttp404Plugin } from '@gammastream/scully-plugin-http404';
const Http404Plugin = getHttp404Plugin();

// Adds tips routes to Scully
const TWEET_IDs = [
  '1615427403152560156',
  '1602677014137282560',
  '1590004996858601472',
  '1592597209480323072',
  '1587470353831542784',
  '1617982361727283201',
  '1620451972808687616',
  '1622984875358752771',
  '1625586017334878238',
];

function tipsPlugin(): Promise<HandledRoute[]> {
  const routes: any[] | PromiseLike<any[]> = [];

  TWEET_IDs.forEach((tweetId) => {
    routes.push({ route: `/tips/${tweetId}`, type: RouteTypes.json });
  });

  return Promise.resolve(routes);
}

registerPlugin('router', 'codeTips', tipsPlugin);
// end of tipsPlugin~

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
      type: 'codeTips',
    },
  },
};
