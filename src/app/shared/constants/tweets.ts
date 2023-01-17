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
  {
    title: 'keyvalue',
    description:
      'The keyvalue pipe allows to iterate over an object and get the key and value of each property.',
    src: 'https://pbs.twimg.com/media/FmsmP43akAAi765?format=jpg&name=small',
    srcLarge:
      'https://pbs.twimg.com/media/FmsmP43akAAi765?format=jpg&name=large',
    alt: 'keyvalue pipe code snippet',
    tweetId: '1615427403152560156',
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