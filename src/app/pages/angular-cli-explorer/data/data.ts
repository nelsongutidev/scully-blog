export interface PrimaryOption {
  value: string;
  label: string;
  description?: string;
  command?: string;
}

interface Command {
  [key: string]: Array<{
    value: string;
    label: string;
    command: string;
    description?: string;
  }>;
}

export const PRIMARY_OPTIONS: PrimaryOption[] = [
  {
    value: 'new',
    label: 'create a new Angular workspace (brand new project)',
    command: 'ng new <app-name>',
    description: 'Creates a new Angular workspace.',
  },
  {
    value: 'add',
    label: 'add support for an external library',
    command: 'ng add <library-name>',
    description: 'Adds support for an external library to your project.',
  },
  // {
  //   value: 'analytics',
  //   label: 'analyze',
  //   command: 'ng analytics',
  //   description: 'Configures the gathering of Angular CLI usage metrics.',
  // },
  {
    value: 'build',
    label: 'build my project',
    command: 'ng build or ng b',
    description:
      'Compiles an Angular application or library into an output directory named dist/ at the given output path.',
  },
  // {
  //   value: 'cache',
  //   label: 'configure cache',
  //   command: 'ng cache',
  //   description:
  //     'Configure persistent disk cache and retrieve cache statistics.',
  // },
  // {
  //   value: 'completion',
  //   label: 'set up autocompletion',
  //   command: 'ng completion',
  //   description: 'Set up Angular CLI autocompletion for your terminal.',
  // },
  // {
  //   value: 'config',
  //   label: 'configure angular.json',
  //   command: 'ng config',
  //   description:
  //     'Retrieves or sets Angular configuration values in the angular.json file for the workspace.',
  // },
  // {
  //   value: 'deploy',
  //   label: 'deploy',
  //   command: 'ng deploy',
  //   description:
  //     'Invokes the deploy builder for a specified project or for the default project in the workspace.',
  // },
  {
    value: 'doc',
    label: 'open angular docs searching for given keyword',
    command: 'ng doc <keyword>',
    description:
      'Opens the official Angular documentation (angular.io) in a browser, and searches for a given keyword.',
  },
  {
    value: 'e2e',
    label: 'run end to end tests on my project',
    command: 'ng e2e or ng e',
    description:
      'Builds and serves an Angular application, then runs end-to-end tests.',
  },
  // {
  //   value: 'extract-i18n',
  //   label: 'extract i18n messages',
  //   command: 'ng extract-i18n',
  //   description: 'Extracts i18n messages from source code.',
  // },
  {
    value: 'generate',
    label: 'generate',
    // command: 'ng generate or ng g',
    description: 'Generates and/or modifies files based on a schematic.',
  },
  {
    value: 'lint',
    label: 'runs linting tools on my Angular app',
    command: 'ng lint',
    description:
      'Runs linting tools on Angular application code in a given project folder.',
  },

  {
    value: 'run',
    label: 'run',
    command: 'ng run',
    description:
      'Runs an Architect target with an optional custom builder configuration defined in your project.',
  },
  {
    value: 'serve',
    label: 'serve my application',
    command: 'ng serve',
    description:
      'Builds and serves your application, rebuilding on file changes.',
  },

  {
    value: 'test',
    label: 'run unit tests',
    command: 'ng test or ng t',
    description: 'Runs unit tests in a project.',
  },
  {
    value: 'update',
    label: 'update',
    command: 'ng update',
    description:
      'Updates your workspace and its dependencies. See https://update.angular.io/.',
  },
  {
    value: 'version',
    label: 'know my angular version',
    command: 'ng version or ng v',
    description: 'Outputs Angular CLI version.',
  },
];

export const SECONDARY_OPTIONS: Command = {
  generate: [
    {
      value: 'app-shell',
      label: 'an app shell',
      command: 'ng generate app-shell',
    },
    {
      value: 'application',
      label: 'an application',
      command: 'ng generate application <app-name>',
    },
    {
      value: 'class',
      label: 'a class',
      command: 'ng generate class <class-name>',
    },
    {
      value: 'component',
      label: 'a new component',
      command: 'ng generate component <component-name>',
    },
    {
      value: 'config',
      label: 'a new configuration file of type karma | browserslist',
      command: 'ng generate config <type>',
    },
    {
      value: 'directive',
      label: 'a new directive',
      command: 'ng generate directive <directive-name>',
    },
    {
      value: 'environments',
      label: 'environment files for a project',
      command: 'ng generate environments',
    },
    {
      value: 'guard',
      label: 'a new guard',
      command: 'ng generate guard <guard-name>',
    },
    {
      value: 'enum',
      label: 'a new enum',
      command: 'ng generate enum <enum-name>',
    },
    {
      value: 'interceptor',
      label: 'a new interceptor',
      command: 'ng generate interceptor <interceptor-name>',
    },
    {
      value: 'interface',
      label: 'a new interface',
      command: 'ng generate interface <interface-name>',
    },
    {
      value: 'library',
      label: 'a new library',
      command: 'ng generate library <library-name>',
    },
    {
      value: 'module',
      label: 'a new module',
      command: 'ng generate module <module-name>',
    },

    {
      value: 'pipe',
      label: 'a new pipe',
      command: 'ng generate pipe <pipe-name>',
    },
    {
      value: 'resolver',
      label: 'a new resolver',
      command: 'ng generate resolver <resolver-name>',
    },
    {
      value: 'service',
      label: 'a new service',
      command: 'ng generate service <service-name>',
    },
    {
      value: 'service-worker',
      label: 'a new service worker',
      command: 'ng generate service-worker',
    },
    {
      value: 'web-worker',
      label: 'a new web worker',
      command: 'ng generate web-worker <worker-name>',
    },
  ],
  serve: [
    {
      value: 'serve',
      label: 'serve my app',
      command: 'ng serve',
    },
  ],
};
