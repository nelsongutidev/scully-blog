export type Tweet = {
  title: string;
  description: string;
  src: string;
  srcLarge: string;
  alt: string;
  tweetId: string;
  tags: Array<'Angular' | 'Javascript'>;
};

export const TWEETS: Tweet[] = [
  {
    title: 'enableTracing and withDebugTracing()',
    description:
      'For debugging purposes around router events, Angular provides an easy way to log all internal navigation events to the console',
    tweetId: '1622984875358752771',
    src: 'https://pbs.twimg.com/media/FoX_01haEAUtP9k?format=jpg&name=small',
    srcLarge:
      'https://pbs.twimg.com/media/FoX_01haEAUtP9k?format=jpg&name=large',
    alt: 'enableTracing code snippet',
    tags: ['Angular'],
  },
  {
    title: 'bootstrapApplication API',
    description:
      'As of Angular v15, you can Bootstrap an Angular application using a standalone component',
    src: 'https://pbs.twimg.com/media/FnxUYEVaYAA6QwL?format=jpg&name=small',
    srcLarge:
      'https://pbs.twimg.com/media/FnxUYEVaYAA6QwL?format=jpg&name=large',
    alt: 'bootstrapApplication code snippet',
    tweetId: '1620451972808687616',
    tags: ['Angular'],
  },
  {
    title: 'Wildcard Routes',
    description:
      'To display a 404 page, Angular provides the possibility of adding a wildcard route',
    src: 'https://pbs.twimg.com/media/FnQ5z_eaMAAD-kj?format=jpg&name=small',
    srcLarge:
      'https://pbs.twimg.com/media/FnQ5z_eaMAAD-kj?format=jpg&name=large',
    alt: 'Wildcard Routes code snippet',
    tweetId: '1617982361727283201',
    tags: ['Angular'],
  },
  {
    title: 'KeyValuePipe',
    description:
      'Angular provides the keyvalue pipe, which transforms an Object or Map into an array of key value pairs. With it, an Object or a Map can be iterated by *ngFor',
    src: 'https://pbs.twimg.com/media/FmsmP43akAAi765?format=jpg&name=small',
    srcLarge:
      'https://pbs.twimg.com/media/FmsmP43akAAi765?format=jpg&name=large',
    alt: 'keyvalue pipe code snippet',
    tweetId: '1615427403152560156',
    tags: ['Angular'],
  },
  {
    title: 'ngNativeValidate',
    description:
      'If you want to explicitly enable native DOM validation UI with Angular forms, you can add the ngNativeValidate attribute to the <form> element',
    src: 'https://pbs.twimg.com/media/Fj3YreaVUAAhv-f?format=jpg&name=medium',
    srcLarge:
      'https://pbs.twimg.com/media/Fj3YreaVUAAhv-f?format=jpg&name=large',
    alt: 'ngNativeValidate code snippet',
    tweetId: '1602677014137282560',
    tags: ['Angular'],
  },
  {
    title: 'ngPlural',
    description:
      'In order to make pluralization easier, Angular provides the ngPlural Directive which allows to display a particular template on a given value.',
    src: 'https://pbs.twimg.com/media/FhDUPjuVIAAvs63?format=jpg&name=small',
    srcLarge:
      'https://pbs.twimg.com/media/FhDUPjuVIAAvs63?format=jpg&name=large',
    alt: 'ngPlural code snippet',
    tweetId: '1590004996858601472',
    tags: ['Angular'],
  },
  {
    title: 'ngForOf',
    description:
      'The ngForOf directive (*ngFor) not only provides the index exported value, but it also provides other exported values that can be aliased to local variables.',
    src: 'https://pbs.twimg.com/media/FhoKMZ6VsAEZ9KT?format=jpg&name=small',
    srcLarge:
      'https://pbs.twimg.com/media/FhoKMZ6VsAEZ9KT?format=jpg&name=large',
    alt: 'ngForOf code snippet',
    tweetId: '1592597209480323072',
    tags: ['Angular'],
  },

  {
    title: 'ariaCurrentWhenActive',
    description:
      'The RouterLinkActive directive provides the ariaCurrentWhenActive input which sets the aria-current to a specified value when the link becomes active.',
    src: 'https://pbs.twimg.com/media/FgfS-I6VIAA-YzC?format=jpg&name=small',
    srcLarge:
      'https://pbs.twimg.com/media/FgfS-I6VIAA-YzC?format=jpg&name=large',
    alt: 'ariaCurrentWhenActive code snippet',
    tweetId: '1587470353831542784',
    tags: ['Angular'],
  },

  //   {
  //     title: 'Destructuring',
  //     description: 'Destructuring is a useful feature in JavaScript',
  //     src: 'https://pbs.twimg.com/media/EIJeINDXUAg7suG?format=jpg&name=small',
  //     srcLarge:
  //       'https://pbs.twimg.com/media/EIJeINDXUAg7suG?format=jpg&name=large',
  //     alt: 'Destructuring code snippet',
  //     tweetId: '1189616755162992641',
  //     tags: ['Javascript'],
  //   },
];
