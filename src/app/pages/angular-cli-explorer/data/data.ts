export type Command = {
  value: string;
  label: string;
  description?: string;
  command?: string;
};

type SubCommand = {
  [key: string]: Array<{
    value: string;
    label: string;
    command: string;
    description?: string;
  }>;
};

type Option = {
  [key: string]: Array<{
    value: string;
    description?: string;
    type?: any;
    default?: any;
    aliases?: any;
    command?: string;
    options?: string[];
  }>;
};

export const COMMAND: Command[] = [
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
    label: 'compile my Angular app or library into an output directory',
    command: 'ng build',
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

export const SUB_COMMAND: SubCommand = {
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

export const OPTIONS: Option = {
  add: [
    {
      value: '--defaults',
      description:
        'disabling interactive input prompts for options with a default',
      type: 'boolean',
      default: false,
      command: 'add',
    },
    {
      value: '--dry-run',
      description:
        'running through and reporting activity without writing out results',
      type: 'boolean',
      default: false,
      command: 'add',
    },
    {
      value: '--force',
      description: 'forcing overwriting of existing files',
      type: 'boolean',
      default: false,
      command: 'add',
    },
    {
      value: '--help',
      description: 'showing a help message for this command in the console',
      type: 'boolean',
      command: 'add',
    },
    {
      value: '--interactive',
      description: 'enabling interactive input prompts',
      type: 'boolean',
      default: true,
      command: 'add',
    },
    {
      value: '--registry <npm-registry>',
      description: 'with an specific NPM registry ',
      type: 'string',
      command: 'add',
    },
    {
      value: '--skip-confirmation',
      description:
        'skipping asking a confirmation prompt before installing and executing the package',
      type: 'boolean',
      default: false,
      command: 'add',
    },
    {
      value: '--verbose',
      description:
        'displaying additional details about internal operations during execution',
      type: 'boolean',
      default: false,
      command: 'add',
    },
  ],

  doc: [
    {
      value: '--help',
      description: 'showing a help message for this command in the console',
      type: 'boolean',
    },
    {
      value: '--search',
      description:
        'searching all of angular.io (otherwise, searches only API reference documentation)',
      type: 'boolean',
      aliases: '-s',
      command: 'doc',
    },
    {
      value: '--version <version>',
      description:
        'with an specific version of Angular to use for the documentation',
      type: 'string',
      command: 'doc',
    },
  ],
  new: [
    {
      value: '--collection <schematics-collection>',
      aliases: ['-c'],
      type: 'string',
      description:
        'collection of schematics to use in generating the initial application',
      command: 'new',
    },
    {
      value: '--commit',
      aliases: [],
      type: 'boolean',
      description: 'with initial git repository commit information',
      default: true,
      command: 'new',
    },
    // {
    //   value: '--create-application',
    //   aliases: [],
    //   type: 'boolean',
    //   description:
    //     "create a new initial application project in the 'src' folder of the new workspace. When false, creates an empty workspace with no initial application. You can then use the generate application command so that all applications are created in the projects folder.",
    //   default: true,
    //   command: 'new',
    // },
    {
      value: '--defaults',
      aliases: [],
      type: 'boolean',
      description:
        'disabling interactive input prompts for options with a default',
      default: false,
      command: 'new',
    },
    {
      value: '--directory <directory-name>',
      aliases: [],
      type: 'string',
      description: 'directory name to create the workspace in',
      command: 'new',
    },
    {
      value: '--dry-run',
      aliases: [],
      type: 'boolean',
      description:
        'running through and reporting activity without writing out results',
      default: false,
      command: 'new',
    },
    {
      value: '--force',
      aliases: [],
      type: 'boolean',
      description: 'forcing overwriting of existing files',
      default: false,
      command: 'new',
    },
    {
      value: '--help',
      aliases: [],
      type: 'boolean',
      description: 'showing a help message for this command in the console',
      command: 'new',
    },
    {
      value: '--inline-style',
      aliases: ['-s'],
      type: 'boolean',
      description: 'including styles inline in the component TS file',
      command: 'new',
    },
    {
      value: '--inline-template',
      aliases: ['-t'],
      type: 'boolean',
      description: 'including template inline in the component TS file',
      command: 'new',
    },
    {
      value: '--interactive',
      aliases: [],
      type: 'boolean',
      description: 'enabling interactive input prompts.',
      default: true,
      command: 'new',
    },
    {
      value: '--minimal',
      aliases: [],
      type: 'boolean',
      description: 'creating a workspace without any testing frameworks',
      default: false,
      command: 'new',
    },
    {
      value: '--new-project-root <path>',
      aliases: [],
      type: 'string',
      description:
        'with a path where new projects will be created, relative to the new workspace',
      command: 'new',
    },

    {
      value: 'package-manager <npm | yarn | pnpm | cnpm>',
      description:
        'with a specific package manager used to install dependencies',
      options: ['npm', 'yarn', 'pnpm', 'cnpm'],
      type: 'string',
      command: 'new',
    },
    {
      value: 'prefix <prefix>',
      description:
        'with a prefix to apply to generated selectors for the initial project',
      aliases: ['-p'],
      type: 'string',
      default: 'app',
      command: 'new',
    },
    {
      value: 'routing',
      description: 'generating a routing module for the initial project.',
      type: 'boolean',
      command: 'new',
    },
    {
      value: 'skip-git',
      description: 'without initializing a git repository.',
      aliases: ['-g'],
      type: 'boolean',
      default: false,
      command: 'new',
    },
    {
      value: 'skip-install',
      description: 'without installing dependency packages',
      type: 'boolean',
      default: false,
      command: 'new',
    },
    {
      value: 'skip-tests',
      description:
        "without generating 'spec.ts' test files for the new project",
      aliases: ['-S'],
      type: 'boolean',
      default: false,
      command: 'new',
    },
    {
      value: 'strict',
      description:
        'creating a workspace with stricter type checking and stricter bundle budgets settings',
      default: true,
      command: 'new',
    },
    {
      value: 'style <css | scss | sass | less>',
      description: 'file extension or preprocessor to use for style files.',
      options: ['css', 'scss', 'sass', 'less'],
      type: 'string',
      command: 'new',
    },
    {
      value: 'view-encapsulation <Emulated | None | ShadowDom>',
      description:
        'with a specific view encapsulation strategy to use in the initial project.',
      options: ['Emulated', 'None', 'ShadowDom'],
      type: 'string',
      command: 'new',
    },
  ],
};
