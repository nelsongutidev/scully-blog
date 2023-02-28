export type Command1 = {
  name: string;
  command: string;
  shortDescription: string;
  longDescriptionRelativePath: string;
  longDescription: string;
  aliases: string[];
  deprecated: boolean;
  options: Option1[];
};

export type Option1 = {
  name: string;
  type: string;
  description: string;
  positional?: number;
  default?: boolean;
};

export const RAW_NG_COMMANDS = [
  {
    name: 'add',
    command: 'ng add <collection>',
    shortDescription: 'Adds support for an external library to your project.',
    longDescriptionRelativePath:
      '@angular/cli/src/commands/add/long-description.md',
    longDescription:
      "Adds the npm package for a published library to your workspace, and configures\nthe project in the current working directory to use that library, as specified by the library's schematic.\nFor example, adding `@angular/pwa` configures your project for PWA support:\n\n```bash\nng add @angular/pwa\n```\n",
    aliases: [],
    deprecated: false,
    options: [
      {
        name: 'collection',
        type: 'string',
        description: 'The package to be added.',
        positional: 0,
      },
      {
        name: 'defaults',
        type: 'boolean',
        default: false,
        description:
          'Disable interactive input prompts for options with a default.',
      },
      {
        name: 'dry-run',
        type: 'boolean',
        default: false,
        description:
          'Run through and reports activity without writing out results.',
      },
      {
        name: 'force',
        type: 'boolean',
        default: false,
        description: 'Force overwriting of existing files.',
      },
      {
        name: 'help',
        type: 'boolean',
        description: 'Shows a help message for this command in the console.',
      },
      {
        name: 'interactive',
        type: 'boolean',
        default: true,
        description: 'Enable interactive input prompts.',
      },
      {
        name: 'registry',
        type: 'string',
        description: 'The NPM registry to use.',
      },
      {
        name: 'skip-confirmation',
        type: 'boolean',
        default: false,
        description:
          'Skip asking a confirmation prompt before installing and executing the package. Ensure package name is correct prior to using this option.',
      },
      {
        name: 'verbose',
        type: 'boolean',
        default: false,
        description:
          'Display additional details about internal operations during execution.',
      },
    ],
  },
  {
    name: 'build',
    command: 'ng build [project]',
    shortDescription:
      'Compiles an Angular application or library into an output directory named dist/ at the given output path.',
    longDescriptionRelativePath:
      '@angular/cli/src/commands/build/long-description.md',
    longDescription:
      'The command can be used to build a project of type "application" or "library".\nWhen used to build a library, a different builder is invoked, and only the `ts-config`, `configuration`, and `watch` options are applied.\nAll other options apply only to building applications.\n\nThe application builder uses the [webpack](https://webpack.js.org/) build tool, with default configuration options specified in the workspace configuration file (`angular.json`) or with a named alternative configuration.\nA "development" configuration is created by default when you use the CLI to create the project, and you can use that configuration by specifying the `--configuration development`.\n\nThe configuration options generally correspond to the command options.\nYou can override individual configuration defaults by specifying the corresponding options on the command line.\nThe command can accept option names given in either dash-case or camelCase.\nNote that in the configuration file, you must specify names in camelCase.\n\nSome additional options can only be set through the configuration file,\neither by direct editing or with the `ng config` command.\nThese include `assets`, `styles`, and `scripts` objects that provide runtime-global resources to include in the project.\nResources in CSS, such as images and fonts, are automatically written and fingerprinted at the root of the output folder.\n\nFor further details, see [Workspace Configuration](guide/workspace-config).\n',
    aliases: ['b'],
    deprecated: false,
    options: [
      {
        name: 'allowed-common-js-dependencies',
        type: 'array',
        description:
          'A list of CommonJS packages that are allowed to be used without a build time warning.',
      },
      {
        name: 'aot',
        type: 'boolean',
        default: true,
        description: 'Build using Ahead of Time compilation.',
      },
      {
        name: 'base-href',
        type: 'string',
        description: 'Base url for the application being built.',
      },
      {
        name: 'build-optimizer',
        type: 'boolean',
        default: true,
        description:
          "Enables advanced build optimizations when using the 'aot' option.",
      },
      {
        name: 'common-chunk',
        type: 'boolean',
        default: true,
        description:
          'Generate a seperate bundle containing code used across multiple bundles.',
      },
      {
        name: 'configuration',
        type: 'string',
        aliases: ['c'],
        description:
          'One or more named builder configurations as a comma-separated list as specified in the "configurations" section in angular.json.\nThe builder uses the named configurations to run the given target.\nFor more information, see https://angular.io/guide/workspace-config#alternate-build-configurations.',
      },
      {
        name: 'cross-origin',
        type: 'string',
        default: 'none',
        enum: ['none', 'anonymous', 'use-credentials'],
        description:
          'Define the crossorigin attribute setting of elements that provide CORS support.',
      },
      {
        name: 'delete-output-path',
        type: 'boolean',
        default: true,
        description: 'Delete the output path before building.',
      },
      {
        name: 'deploy-url',
        type: 'string',
        deprecated:
          'Use "baseHref" option, "APP_BASE_HREF" DI token or a combination of both instead. For more information, see https://angular.io/guide/deployment#the-deploy-url.',
        description: 'URL where files will be deployed.',
      },
      {
        name: 'extract-licenses',
        type: 'boolean',
        default: true,
        description: 'Extract all licenses in a separate file.',
      },
      {
        name: 'help',
        type: 'boolean',
        description: 'Shows a help message for this command in the console.',
      },
      {
        name: 'i18n-duplicate-translation',
        type: 'string',
        default: 'warning',
        enum: ['warning', 'error', 'ignore'],
        description: 'How to handle duplicate translations for i18n.',
      },
      {
        name: 'i18n-missing-translation',
        type: 'string',
        default: 'warning',
        enum: ['warning', 'error', 'ignore'],
        description: 'How to handle missing translations for i18n.',
      },
      {
        name: 'index',
        type: 'string',
        description:
          "Configures the generation of the application's HTML index.",
      },
      {
        name: 'inline-style-language',
        type: 'string',
        default: 'css',
        enum: ['css', 'less', 'sass', 'scss'],
        description:
          "The stylesheet language to use for the application's inline component styles.",
      },
      {
        name: 'localize',
        type: 'boolean',
        description: 'Translate the bundles in one or more locales.',
      },
      {
        name: 'main',
        type: 'string',
        description:
          'The full path for the main entry point to the app, relative to the current workspace.',
      },
      {
        name: 'named-chunks',
        type: 'boolean',
        default: false,
        description: 'Use file name for lazy loaded chunks.',
      },
      {
        name: 'ngsw-config-path',
        type: 'string',
        description: 'Path to ngsw-config.json.',
      },
      {
        name: 'optimization',
        type: 'boolean',
        default: true,
        description:
          'Enables optimization of the build output. Including minification of scripts and styles, tree-shaking, dead-code elimination, inlining of critical CSS and fonts inlining. For more information, see https://angular.io/guide/workspace-config#optimization-configuration.',
      },
      {
        name: 'output-hashing',
        type: 'string',
        default: 'none',
        enum: ['none', 'all', 'media', 'bundles'],
        description: 'Define the output filename cache-busting hashing mode.',
      },
      {
        name: 'output-path',
        type: 'string',
        description:
          'The full path for the new output directory, relative to the current workspace.\nBy default, writes output to a folder named dist/ in the current project.',
      },
      {
        name: 'poll',
        type: 'number',
        description:
          'Enable and define the file watching poll time period in milliseconds.',
      },
      {
        name: 'polyfills',
        type: 'string',
        description: 'Polyfills to be included in the build.',
      },
      {
        name: 'preserve-symlinks',
        type: 'boolean',
        description:
          'Do not use the real path when resolving modules. If unset then will default to `true` if NodeJS option --preserve-symlinks is set.',
      },
      {
        name: 'progress',
        type: 'boolean',
        default: true,
        description: 'Log progress to the console while building.',
      },
      {
        name: 'project',
        type: 'string',
        description:
          'The name of the project to build. Can be an application or a library.',
        positional: 0,
      },
      {
        name: 'resources-output-path',
        type: 'string',
        description:
          'The path where style resources will be placed, relative to outputPath.',
      },
      {
        name: 'service-worker',
        type: 'boolean',
        default: false,
        description: 'Generates a service worker config for production builds.',
      },
      {
        name: 'source-map',
        type: 'boolean',
        default: false,
        description:
          'Output source maps for scripts and styles. For more information, see https://angular.io/guide/workspace-config#source-map-configuration.',
      },
      {
        name: 'stats-json',
        type: 'boolean',
        default: false,
        description:
          "Generates a 'stats.json' file which can be analyzed using tools such as 'webpack-bundle-analyzer'.",
      },
      {
        name: 'subresource-integrity',
        type: 'boolean',
        default: false,
        description: 'Enables the use of subresource integrity validation.',
      },
      {
        name: 'ts-config',
        type: 'string',
        description:
          'The full path for the TypeScript configuration file, relative to the current workspace.',
      },
      {
        name: 'vendor-chunk',
        type: 'boolean',
        default: false,
        description:
          'Generate a seperate bundle containing only vendor libraries. This option should only be used for development to reduce the incremental compilation time.',
      },
      {
        name: 'verbose',
        type: 'boolean',
        default: false,
        description: 'Adds more details to output logging.',
      },
      {
        name: 'watch',
        type: 'boolean',
        default: false,
        description: 'Run build when files change.',
      },
      {
        name: 'web-worker-ts-config',
        type: 'string',
        description: 'TypeScript configuration for Web Worker modules.',
      },
    ],
  },
  {
    name: 'cache',
    command: 'ng cache',
    shortDescription:
      'Configure persistent disk cache and retrieve cache statistics.',
    longDescriptionRelativePath:
      '@angular/cli/src/commands/cache/long-description.md',
    longDescription:
      'Angular CLI saves a number of cachable operations on disk by default.\n\nWhen you re-run the same build, the build system restores the state of the previous build and re-uses previously performed operations, which decreases the time taken to build and test your applications and libraries.\n\nTo amend the default cache settings, add the `cli.cache` object to your [Workspace Configuration](guide/workspace-config).\nThe object goes under `cli.cache` at the top level of the file, outside the `projects` sections.\n\n```jsonc\n{\n  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",\n  "version": 1,\n  "cli": {\n    "cache": {\n      // ...\n    }\n  },\n  "projects": {}\n}\n```\n\nFor more information, see [cache options](guide/workspace-config#cache-options).\n\n### Cache environments\n\nBy default, disk cache is only enabled for local environments. The value of environment can be one of the following:\n\n- `all` - allows disk cache on all machines.\n- `local` - allows disk cache only on development machines.\n- `ci` - allows disk cache only on continuous integration (CI) systems.\n\nTo change the environment setting to `all`, run the following command:\n\n```bash\nng config cli.cache.environment all\n```\n\nFor more information, see `environment` in [cache options](guide/workspace-config#cache-options).\n\n<div class="alert is-helpful">\n\nThe Angular CLI checks for the presence and value of the `CI` environment variable to determine in which environment it is running.\n\n</div>\n\n### Cache path\n\nBy default, `.angular/cache` is used as a base directory to store cache results.\n\nTo change this path to `.cache/ng`, run the following command:\n\n```bash\nng config cli.cache.path ".cache/ng"\n```\n',
    aliases: [],
    deprecated: false,
    options: [
      {
        name: 'help',
        type: 'boolean',
        description: 'Shows a help message for this command in the console.',
      },
    ],
    subcommands: [
      {
        name: 'clean',
        command: 'clean',
        shortDescription: 'Deletes persistent disk cache from disk.',
        options: [],
        aliases: [],
        deprecated: false,
      },
      {
        name: 'disable',
        command: 'disable',
        shortDescription:
          'Disables persistent disk cache for all projects in the workspace.',
        options: [],
        aliases: ['off'],
        deprecated: false,
      },
      {
        name: 'enable',
        command: 'enable',
        shortDescription:
          'Enables disk cache for all projects in the workspace.',
        options: [],
        aliases: ['on'],
        deprecated: false,
      },
      {
        name: 'info',
        command: 'info',
        shortDescription:
          'Prints persistent disk cache configuration and statistics in the console.',
        options: [],
        aliases: [],
        deprecated: false,
      },
    ],
  },
  {
    name: 'completion',
    command: 'ng completion',
    shortDescription: 'Set up Angular CLI autocompletion for your terminal.',
    longDescriptionRelativePath:
      '@angular/cli/src/commands/completion/long-description.md',
    longDescription:
      "Setting up autocompletion configures your terminal, so pressing the `<TAB>` key while in the middle\nof typing will display various commands and options available to you. This makes it very easy to\ndiscover and use CLI commands without lots of memorization.\n\n![A demo of Angular CLI autocompletion in a terminal. The user types several partial `ng` commands,\nusing autocompletion to finish several arguments and list contextual options.\n](generated/images/guide/cli/completion.gif)\n\n## Automated setup\n\nThe CLI should prompt and ask to set up autocompletion for you the first time you use it (v14+).\nSimply answer \"Yes\" and the CLI will take care of the rest.\n\n```\n$ ng serve\n? Would you like to enable autocompletion? This will set up your terminal so pressing TAB while typing Angular CLI commands will show possible options and autocomplete arguments. (Enabling autocompletion will modify configuration files in your home directory.) Yes\nAppended `source <(ng completion script)` to `/home/my-username/.bashrc`. Restart your terminal or run:\n\nsource <(ng completion script)\n\nto autocomplete `ng` commands.\n\n# Serve output...\n```\n\nIf you already refused the prompt, it won't ask again. But you can run `ng completion` to\ndo the same thing automatically.\n\nThis modifies your terminal environment to load Angular CLI autocompletion, but can't update your\ncurrent terminal session. Either restart it or run `source <(ng completion script)` directly to\nenable autocompletion in your current session.\n\nTest it out by typing `ng ser<TAB>` and it should autocomplete to `ng serve`. Ambiguous arguments\nwill show all possible options and their documentation, such as `ng generate <TAB>`.\n\n## Manual setup\n\nSome users may have highly customized terminal setups, possibly with configuration files checked\ninto source control with an opinionated structure. `ng completion` only ever appends Angular's setup\nto an existing configuration file for your current shell, or creates one if none exists. If you want\nmore control over exactly where this configuration lives, you can manually set it up by having your\nshell run at startup:\n\n```bash\nsource <(ng completion script)\n```\n\nThis is equivalent to what `ng completion` will automatically set up, and gives power users more\nflexibility in their environments when desired.\n\n## Platform support\n\nAngular CLI supports autocompletion for the Bash and Zsh shells on MacOS and Linux operating\nsystems. On Windows, Git Bash and [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/)\nusing Bash or Zsh are supported.\n\n## Global install\n\nAutocompletion works by configuring your terminal to invoke the Angular CLI on startup to load the\nsetup script. This means the terminal must be able to find and execute the Angular CLI, typically\nthrough a global install that places the binary on the user's `$PATH`. If you get\n`command not found: ng`, make sure the CLI is installed globally which you can do with the `-g`\nflag:\n\n```bash\nnpm install -g @angular/cli\n```\n",
    aliases: [],
    deprecated: false,
    options: [
      {
        name: 'help',
        type: 'boolean',
        description: 'Shows a help message for this command in the console.',
      },
    ],
    subcommands: [
      {
        name: 'script',
        command: 'script',
        shortDescription:
          'Generate a bash and zsh real-time type-ahead autocompletion script.',
        options: [],
        aliases: [],
        deprecated: false,
      },
    ],
  },
  {
    name: 'doc',
    command: 'ng doc <keyword>',
    shortDescription:
      'Opens the official Angular documentation (angular.io) in a browser, and searches for a given keyword.',
    aliases: ['d'],
    deprecated: false,
    options: [
      {
        name: 'help',
        type: 'boolean',
        description: 'Shows a help message for this command in the console.',
      },
      {
        name: 'keyword',
        type: 'string',
        description:
          'The keyword to search for, as provided in the search bar in angular.io.',
        positional: 0,
      },
      {
        name: 'search',
        type: 'boolean',
        aliases: ['s'],
        default: false,
        description:
          'Search all of angular.io. Otherwise, searches only API reference documentation.',
      },
      {
        name: 'version',
        type: 'string',
        description:
          'Contains the version of Angular to use for the documentation. If not provided, the command uses your current Angular core version.',
      },
    ],
  },
  {
    name: 'e2e',
    command: 'ng e2e [project]',
    shortDescription:
      'Builds and serves an Angular application, then runs end-to-end tests.',
    aliases: ['e'],
    deprecated: false,
    options: [
      {
        name: 'configuration',
        type: 'string',
        aliases: ['c'],
        description:
          'One or more named builder configurations as a comma-separated list as specified in the "configurations" section in angular.json.\nThe builder uses the named configurations to run the given target.\nFor more information, see https://angular.io/guide/workspace-config#alternate-build-configurations.',
      },
      {
        name: 'help',
        type: 'boolean',
        description: 'Shows a help message for this command in the console.',
      },
      {
        name: 'project',
        type: 'string',
        description:
          'The name of the project to build. Can be an application or a library.',
        positional: 0,
      },
    ],
  },
  {
    name: 'generate',
    command: 'ng generate',
    shortDescription: 'Generates and/or modifies files based on a schematic.',
    aliases: ['g'],
    deprecated: false,
    options: [
      {
        name: 'defaults',
        type: 'boolean',
        default: false,
        description:
          'Disable interactive input prompts for options with a default.',
      },
      {
        name: 'dry-run',
        type: 'boolean',
        default: false,
        description:
          'Run through and reports activity without writing out results.',
      },
      {
        name: 'force',
        type: 'boolean',
        default: false,
        description: 'Force overwriting of existing files.',
      },
      {
        name: 'help',
        type: 'boolean',
        description: 'Shows a help message for this command in the console.',
      },
      {
        name: 'interactive',
        type: 'boolean',
        default: true,
        description: 'Enable interactive input prompts.',
      },
      {
        name: 'schematic',
        type: 'string',
        description: 'The [collection:schematic] to run.',
        positional: 0,
      },
    ],
    subcommands: [
      {
        name: 'app-shell',
        command: 'app-shell',
        shortDescription:
          'Generates an application shell for running a server-side version of an app.',
        options: [
          {
            name: 'app-id',
            type: 'string',
            default: 'serverApp',
            description: 'The application ID to use in withServerTransition().',
          },
          {
            name: 'main',
            type: 'string',
            default: 'main.server.ts',
            description: 'The name of the main entry-point file.',
          },
          {
            name: 'project',
            type: 'string',
            description: 'The name of the related client app.',
          },
          {
            name: 'root-module-class-name',
            type: 'string',
            default: 'AppServerModule',
            description: 'The name of the root module class.',
          },
          {
            name: 'root-module-file-name',
            type: 'string',
            default: 'app.server.module.ts',
            description: 'The name of the root module file',
          },
          {
            name: 'route',
            type: 'string',
            default: 'shell',
            description: 'Route path used to produce the application shell.',
          },
        ],
        aliases: [],
        deprecated: false,
      },
      {
        name: 'application',
        command: 'application [name]',
        shortDescription:
          'Generates a new basic application definition in the "projects" subfolder of the workspace.',
        options: [
          {
            name: 'inline-style',
            type: 'boolean',
            aliases: ['s'],
            description:
              'Include styles inline in the root component.ts file. Only CSS styles can be included inline. Default is false, meaning that an external styles file is created and referenced in the root component.ts file.',
          },
          {
            name: 'inline-template',
            type: 'boolean',
            aliases: ['t'],
            description:
              'Include template inline in the root component.ts file. Default is false, meaning that an external template file is created and referenced in the root component.ts file. ',
          },
          {
            name: 'minimal',
            type: 'boolean',
            default: false,
            description:
              'Create a bare-bones project without any testing frameworks. (Use for learning purposes only.)',
          },
          {
            name: 'name',
            type: 'string',
            description: 'The name of the new application.',
            positional: 0,
          },
          {
            name: 'prefix',
            type: 'string',
            aliases: ['p'],
            default: 'app',
            description: 'A prefix to apply to generated selectors.',
          },
          {
            name: 'project-root',
            type: 'string',
            description: 'The root directory of the new application.',
          },
          {
            name: 'routing',
            type: 'boolean',
            default: false,
            description: 'Create a routing NgModule.',
          },
          {
            name: 'skip-install',
            type: 'boolean',
            default: false,
            description: 'Skip installing dependency packages.',
          },
          {
            name: 'skip-package-json',
            type: 'boolean',
            default: false,
            description: 'Do not add dependencies to the "package.json" file.',
          },
          {
            name: 'skip-tests',
            type: 'boolean',
            aliases: ['S'],
            default: false,
            description:
              'Do not create "spec.ts" test files for the application.',
          },
          {
            name: 'strict',
            type: 'boolean',
            default: true,
            description:
              'Creates an application with stricter bundle budgets settings.',
          },
          {
            name: 'style',
            type: 'string',
            default: 'css',
            enum: ['css', 'scss', 'sass', 'less'],
            description:
              'The file extension or preprocessor to use for style files.',
          },
          {
            name: 'view-encapsulation',
            type: 'string',
            enum: ['Emulated', 'None', 'ShadowDom'],
            description:
              'The view encapsulation strategy to use in the new application.',
          },
        ],
        aliases: ['app'],
        deprecated: false,
      },
      {
        name: 'class',
        command: 'class [name]',
        shortDescription:
          'Creates a new, generic class definition in the given project.',
        options: [
          {
            name: 'name',
            type: 'string',
            description: 'The name of the new class.',
            positional: 0,
          },
          {
            name: 'project',
            type: 'string',
            description: 'The name of the project.',
          },
          {
            name: 'skip-tests',
            type: 'boolean',
            default: false,
            description:
              'Do not create "spec.ts" test files for the new class.',
          },
          {
            name: 'type',
            type: 'string',
            description:
              'Adds a developer-defined type to the filename, in the format "name.type.ts".',
          },
        ],
        aliases: ['cl'],
        deprecated: false,
      },
      {
        name: 'component',
        command: 'component [name]',
        shortDescription:
          'Creates a new, generic component definition in the given project.',
        options: [
          {
            name: 'change-detection',
            type: 'string',
            aliases: ['c'],
            default: 'Default',
            enum: ['Default', 'OnPush'],
            description:
              'The change detection strategy to use in the new component.',
          },
          {
            name: 'display-block',
            type: 'boolean',
            aliases: ['b'],
            default: false,
            description:
              'Specifies if the style will contain `:host { display: block; }`.',
          },
          {
            name: 'export',
            type: 'boolean',
            default: false,
            description: 'The declaring NgModule exports this component.',
          },
          {
            name: 'flat',
            type: 'boolean',
            default: false,
            description:
              'Create the new files at the top level of the current project.',
          },
          {
            name: 'inline-style',
            type: 'boolean',
            aliases: ['s'],
            default: false,
            description:
              'Include styles inline in the component.ts file. Only CSS styles can be included inline. By default, an external styles file is created and referenced in the component.ts file.',
          },
          {
            name: 'inline-template',
            type: 'boolean',
            aliases: ['t'],
            default: false,
            description:
              'Include template inline in the component.ts file. By default, an external template file is created and referenced in the component.ts file.',
          },
          {
            name: 'module',
            type: 'string',
            aliases: ['m'],
            description: 'The declaring NgModule.',
          },
          {
            name: 'name',
            type: 'string',
            description: 'The name of the component.',
            positional: 0,
          },
          {
            name: 'prefix',
            type: 'string',
            aliases: ['p'],
            description:
              'The prefix to apply to the generated component selector.',
          },
          {
            name: 'project',
            type: 'string',
            description: 'The name of the project.',
          },
          {
            name: 'selector',
            type: 'string',
            description: 'The HTML selector to use for this component.',
          },
          {
            name: 'skip-import',
            type: 'boolean',
            default: false,
            description:
              'Do not import this component into the owning NgModule.',
          },
          {
            name: 'skip-selector',
            type: 'boolean',
            default: false,
            description:
              'Specifies if the component should have a selector or not.',
          },
          {
            name: 'skip-tests',
            type: 'boolean',
            default: false,
            description:
              'Do not create "spec.ts" test files for the new component.',
          },
          {
            name: 'standalone',
            type: 'boolean',
            default: false,
            description: 'Whether the generated component is standalone.',
          },
          {
            name: 'style',
            type: 'string',
            default: 'css',
            enum: ['css', 'scss', 'sass', 'less', 'none'],
            description:
              "The file extension or preprocessor to use for style files, or 'none' to skip generating the style file.",
          },
          {
            name: 'type',
            type: 'string',
            default: 'Component',
            description:
              'Adds a developer-defined type to the filename, in the format "name.type.ts".',
          },
          {
            name: 'view-encapsulation',
            type: 'string',
            aliases: ['v'],
            enum: ['Emulated', 'None', 'ShadowDom'],
            description:
              'The view encapsulation strategy to use in the new component.',
          },
        ],
        aliases: ['c'],
        deprecated: false,
      },
      {
        name: 'config',
        command: 'config [type]',
        shortDescription:
          'Generates a configuration file in the given project.',
        options: [
          {
            name: 'project',
            type: 'string',
            description: 'The name of the project.',
          },
          {
            name: 'type',
            type: 'string',
            enum: ['karma', 'browserslist'],
            description:
              'Specifies which type of configuration file to create.',
            positional: 0,
          },
        ],
        aliases: [],
        deprecated: false,
      },
      {
        name: 'directive',
        command: 'directive [name]',
        shortDescription:
          'Creates a new, generic directive definition in the given project.',
        options: [
          {
            name: 'export',
            type: 'boolean',
            default: false,
            description: 'The declaring NgModule exports this directive.',
          },
          {
            name: 'flat',
            type: 'boolean',
            default: true,
            description:
              'When true (the default), creates the new files at the top level of the current project.',
          },
          {
            name: 'module',
            type: 'string',
            aliases: ['m'],
            description: 'The declaring NgModule.',
          },
          {
            name: 'name',
            type: 'string',
            description: 'The name of the new directive.',
            positional: 0,
          },
          {
            name: 'prefix',
            type: 'string',
            aliases: ['p'],
            description: 'A prefix to apply to generated selectors.',
          },
          {
            name: 'project',
            type: 'string',
            description: 'The name of the project.',
          },
          {
            name: 'selector',
            type: 'string',
            description: 'The HTML selector to use for this directive.',
          },
          {
            name: 'skip-import',
            type: 'boolean',
            default: false,
            description:
              'Do not import this directive into the owning NgModule.',
          },
          {
            name: 'skip-tests',
            type: 'boolean',
            default: false,
            description:
              'Do not create "spec.ts" test files for the new class.',
          },
          {
            name: 'standalone',
            type: 'boolean',
            default: false,
            description: 'Whether the generated directive is standalone.',
          },
        ],
        aliases: ['d'],
        deprecated: false,
      },
      {
        name: 'enum',
        command: 'enum [name]',
        shortDescription:
          'Generates a new, generic enum definition in the given project.',
        options: [
          {
            name: 'name',
            type: 'string',
            description: 'The name of the enum.',
            positional: 0,
          },
          {
            name: 'project',
            type: 'string',
            description:
              'The name of the project in which to create the enum. Default is the configured default project for the workspace.',
          },
          {
            name: 'type',
            type: 'string',
            description:
              'Adds a developer-defined type to the filename, in the format "name.type.ts".',
          },
        ],
        aliases: ['e'],
        deprecated: false,
      },
      {
        name: 'environments',
        command: 'environments',
        shortDescription:
          'Generates and configures environment files for a project.',
        options: [
          {
            name: 'project',
            type: 'string',
            description: 'The name of the project.',
          },
        ],
        aliases: [],
        deprecated: false,
      },
      {
        name: 'guard',
        command: 'guard [name]',
        shortDescription:
          'Generates a new, generic route guard definition in the given project.',
        options: [
          {
            name: 'flat',
            type: 'boolean',
            default: true,
            description:
              'When true (the default), creates the new files at the top level of the current project.',
          },
          {
            name: 'functional',
            type: 'boolean',
            default: true,
            description: 'Specifies whether to generate a guard as a function.',
          },
          {
            name: 'implements',
            type: 'array',
            aliases: ['guardType'],
            description: 'Specifies which type of guard to create.',
          },
          {
            name: 'name',
            type: 'string',
            description: 'The name of the new route guard.',
            positional: 0,
          },
          {
            name: 'project',
            type: 'string',
            description: 'The name of the project.',
          },
          {
            name: 'skip-tests',
            type: 'boolean',
            default: false,
            description:
              'Do not create "spec.ts" test files for the new guard.',
          },
        ],
        aliases: ['g'],
        deprecated: false,
      },
      {
        name: 'interceptor',
        command: 'interceptor [name]',
        shortDescription:
          'Creates a new, generic interceptor definition in the given project.',
        options: [
          {
            name: 'flat',
            type: 'boolean',
            default: true,
            description:
              'When true (the default), creates files at the top level of the project.',
          },
          {
            name: 'functional',
            type: 'boolean',
            default: false,
            description: 'Creates the interceptor as a `HttpInterceptorFn`.',
          },
          {
            name: 'name',
            type: 'string',
            description: 'The name of the interceptor.',
            positional: 0,
          },
          {
            name: 'project',
            type: 'string',
            description: 'The name of the project.',
          },
          {
            name: 'skip-tests',
            type: 'boolean',
            default: false,
            description:
              'Do not create "spec.ts" test files for the new interceptor.',
          },
        ],
        aliases: [],
        deprecated: false,
      },
      {
        name: 'interface',
        command: 'interface [name] [type]',
        shortDescription:
          'Creates a new, generic interface definition in the given project.',
        options: [
          {
            name: 'name',
            type: 'string',
            description: 'The name of the interface.',
            positional: 0,
          },
          {
            name: 'prefix',
            type: 'string',
            description: 'A prefix to apply to generated selectors.',
          },
          {
            name: 'project',
            type: 'string',
            description: 'The name of the project.',
          },
          {
            name: 'type',
            type: 'string',
            description:
              'Adds a developer-defined type to the filename, in the format "name.type.ts".',
            positional: 1,
          },
        ],
        aliases: ['i'],
        deprecated: false,
      },
      {
        name: 'library',
        command: 'library [name]',
        shortDescription:
          'Creates a new, generic library project in the current workspace.',
        options: [
          {
            name: 'entry-file',
            type: 'string',
            default: 'public-api',
            description:
              "The path at which to create the library's public API file, relative to the workspace root.",
          },
          {
            name: 'name',
            type: 'string',
            description: 'The name of the library.',
            positional: 0,
          },
          {
            name: 'prefix',
            type: 'string',
            aliases: ['p'],
            default: 'lib',
            description: 'A prefix to apply to generated selectors.',
          },
          {
            name: 'project-root',
            type: 'string',
            description: 'The root directory of the new library.',
          },
          {
            name: 'skip-install',
            type: 'boolean',
            default: false,
            description: 'Do not install dependency packages.',
          },
          {
            name: 'skip-package-json',
            type: 'boolean',
            default: false,
            description: 'Do not add dependencies to the "package.json" file. ',
          },
          {
            name: 'skip-ts-config',
            type: 'boolean',
            default: false,
            description:
              'Do not update "tsconfig.json" to add a path mapping for the new library. The path mapping is needed to use the library in an app, but can be disabled here to simplify development.',
          },
        ],
        aliases: ['lib'],
        deprecated: false,
      },
      {
        name: 'module',
        command: 'module [name]',
        shortDescription:
          'Creates a new, generic NgModule definition in the given project.',
        options: [
          {
            name: 'flat',
            type: 'boolean',
            default: false,
            description:
              'Create the new files at the top level of the current project root. ',
          },
          {
            name: 'module',
            type: 'string',
            aliases: ['m'],
            description: 'The declaring NgModule.',
          },
          {
            name: 'name',
            type: 'string',
            description: 'The name of the NgModule.',
            positional: 0,
          },
          {
            name: 'project',
            type: 'string',
            description: 'The name of the project.',
          },
          {
            name: 'route',
            type: 'string',
            description:
              'The route path for a lazy-loaded module. When supplied, creates a component in the new module, and adds the route to that component in the `Routes` array declared in the module provided in the `--module` option.',
          },
          {
            name: 'routing',
            type: 'boolean',
            default: false,
            description: 'Create a routing module.',
          },
          {
            name: 'routing-scope',
            type: 'string',
            default: 'Child',
            enum: ['Child', 'Root'],
            description: 'The scope for the new routing module.',
          },
        ],
        aliases: ['m'],
        deprecated: false,
      },
      {
        name: 'pipe',
        command: 'pipe [name]',
        shortDescription:
          'Creates a new, generic pipe definition in the given project.',
        options: [
          {
            name: 'export',
            type: 'boolean',
            default: false,
            description: 'The declaring NgModule exports this pipe.',
          },
          {
            name: 'flat',
            type: 'boolean',
            default: true,
            description:
              'When true (the default) creates files at the top level of the project.',
          },
          {
            name: 'module',
            type: 'string',
            aliases: ['m'],
            description: 'The declaring NgModule.',
          },
          {
            name: 'name',
            type: 'string',
            description: 'The name of the pipe.',
            positional: 0,
          },
          {
            name: 'project',
            type: 'string',
            description: 'The name of the project.',
          },
          {
            name: 'skip-import',
            type: 'boolean',
            default: false,
            description: 'Do not import this pipe into the owning NgModule.',
          },
          {
            name: 'skip-tests',
            type: 'boolean',
            default: false,
            description: 'Do not create "spec.ts" test files for the new pipe.',
          },
          {
            name: 'standalone',
            type: 'boolean',
            default: false,
            description: 'Whether the generated pipe is standalone.',
          },
        ],
        aliases: ['p'],
        deprecated: false,
      },
      {
        name: 'resolver',
        command: 'resolver [name]',
        shortDescription:
          'Generates a new, generic resolver definition in the given project.',
        options: [
          {
            name: 'flat',
            type: 'boolean',
            default: true,
            description:
              'When true (the default), creates the new files at the top level of the current project.',
          },
          {
            name: 'functional',
            type: 'boolean',
            default: true,
            description: 'Creates the resolver as a `ResolveFn`.',
          },
          {
            name: 'name',
            type: 'string',
            description: 'The name of the new resolver.',
            positional: 0,
          },
          {
            name: 'project',
            type: 'string',
            description: 'The name of the project.',
          },
          {
            name: 'skip-tests',
            type: 'boolean',
            default: false,
            description:
              'Do not create "spec.ts" test files for the new resolver.',
          },
        ],
        aliases: ['r'],
        deprecated: false,
      },
      {
        name: 'service',
        command: 'service [name]',
        shortDescription:
          'Creates a new, generic service definition in the given project.',
        options: [
          {
            name: 'flat',
            type: 'boolean',
            default: true,
            description:
              'When true (the default), creates files at the top level of the project.',
          },
          {
            name: 'name',
            type: 'string',
            description: 'The name of the service.',
            positional: 0,
          },
          {
            name: 'project',
            type: 'string',
            description: 'The name of the project.',
          },
          {
            name: 'skip-tests',
            type: 'boolean',
            default: false,
            description:
              'Do not create "spec.ts" test files for the new service.',
          },
        ],
        aliases: ['s'],
        deprecated: false,
      },
      {
        name: 'service-worker',
        command: 'service-worker',
        shortDescription:
          'Pass this schematic to the "run" command to create a service worker',
        options: [
          {
            name: 'project',
            type: 'string',
            description: 'The name of the project.',
          },
          {
            name: 'target',
            type: 'string',
            default: 'build',
            description: 'The target to apply service worker to.',
          },
        ],
        aliases: [],
        deprecated: false,
      },
      {
        name: 'web-worker',
        command: 'web-worker [name]',
        shortDescription:
          'Creates a new, generic web worker definition in the given project.',
        options: [
          {
            name: 'name',
            type: 'string',
            description: 'The name of the worker.',
            positional: 0,
          },
          {
            name: 'project',
            type: 'string',
            description: 'The name of the project.',
          },
          {
            name: 'snippet',
            type: 'boolean',
            default: true,
            description:
              'Add a worker creation snippet in a sibling file of the same name.',
          },
        ],
        aliases: [],
        deprecated: false,
      },
    ],
  },
  {
    name: 'lint',
    command: 'ng lint [project]',
    shortDescription:
      'Runs linting tools on Angular application code in a given project folder.',
    longDescriptionRelativePath:
      '@angular/cli/src/commands/lint/long-description.md',
    longDescription:
      'The command takes an optional project name, as specified in the `projects` section of the `angular.json` workspace configuration file.\nWhen a project name is not supplied, executes the `lint` builder for all projects.\n\nTo use the `ng lint` command, use `ng add` to add a package that implements linting capabilities. Adding the package automatically updates your workspace configuration, adding a lint [CLI builder](guide/cli-builder).\nFor example:\n\n```json\n"projects": {\n  "my-project": {\n    ...\n    "architect": {\n      ...\n      "lint": {\n        "builder": "@angular-eslint/builder:lint",\n        "options": {}\n      }\n    }\n  }\n}\n```\n',
    aliases: [],
    deprecated: false,
    options: [
      {
        name: 'configuration',
        type: 'string',
        aliases: ['c'],
        description:
          'One or more named builder configurations as a comma-separated list as specified in the "configurations" section in angular.json.\nThe builder uses the named configurations to run the given target.\nFor more information, see https://angular.io/guide/workspace-config#alternate-build-configurations.',
      },
      {
        name: 'help',
        type: 'boolean',
        description: 'Shows a help message for this command in the console.',
      },
      {
        name: 'project',
        type: 'string',
        description:
          'The name of the project to build. Can be an application or a library.',
        positional: 0,
      },
    ],
  },
  {
    name: 'new',
    command: 'ng new [name]',
    shortDescription: 'Creates a new Angular workspace.',
    longDescriptionRelativePath:
      '@angular/cli/src/commands/new/long-description.md',
    longDescription:
      "Creates and initializes a new Angular application that is the default project for a new workspace.\n\nProvides interactive prompts for optional configuration, such as adding routing support.\nAll prompts can safely be allowed to default.\n\n- The new workspace folder is given the specified project name, and contains configuration files at the top level.\n\n- By default, the files for a new initial application (with the same name as the workspace) are placed in the `src/` subfolder.\n- The new application's configuration appears in the `projects` section of the `angular.json` workspace configuration file, under its project name.\n\n- Subsequent applications that you generate in the workspace reside in the `projects/` subfolder.\n\nIf you plan to have multiple applications in the workspace, you can create an empty workspace by using the `--no-create-application` option.\nYou can then use `ng generate application` to create an initial application.\nThis allows a workspace name different from the initial app name, and ensures that all applications reside in the `/projects` subfolder, matching the structure of the configuration file.\n",
    aliases: ['n'],
    deprecated: false,
    options: [
      {
        name: 'collection',
        type: 'string',
        aliases: ['c'],
        description:
          'A collection of schematics to use in generating the initial application.',
      },
      {
        name: 'commit',
        type: 'boolean',
        default: true,
        description: 'Initial git repository commit information.',
      },
      {
        name: 'create-application',
        type: 'boolean',
        default: true,
        description:
          "Create a new initial application project in the 'src' folder of the new workspace. When false, creates an empty workspace with no initial application. You can then use the generate application command so that all applications are created in the projects folder.",
      },
      {
        name: 'defaults',
        type: 'boolean',
        default: false,
        description:
          'Disable interactive input prompts for options with a default.',
      },
      {
        name: 'directory',
        type: 'string',
        description: 'The directory name to create the workspace in.',
      },
      {
        name: 'dry-run',
        type: 'boolean',
        default: false,
        description:
          'Run through and reports activity without writing out results.',
      },
      {
        name: 'force',
        type: 'boolean',
        default: false,
        description: 'Force overwriting of existing files.',
      },
      {
        name: 'help',
        type: 'boolean',
        description: 'Shows a help message for this command in the console.',
      },
      {
        name: 'inline-style',
        type: 'boolean',
        aliases: ['s'],
        description:
          'Include styles inline in the component TS file. By default, an external styles file is created and referenced in the component TypeScript file.',
      },
      {
        name: 'inline-template',
        type: 'boolean',
        aliases: ['t'],
        description:
          'Include template inline in the component TS file. By default, an external template file is created and referenced in the component TypeScript file.',
      },
      {
        name: 'interactive',
        type: 'boolean',
        default: true,
        description: 'Enable interactive input prompts.',
      },
      {
        name: 'minimal',
        type: 'boolean',
        default: false,
        description:
          'Create a workspace without any testing frameworks. (Use for learning purposes only.)',
      },
      {
        name: 'name',
        type: 'string',
        description: 'The name of the new workspace and initial project.',
        positional: 0,
      },
      {
        name: 'new-project-root',
        type: 'string',
        default: 'projects',
        description:
          'The path where new projects will be created, relative to the new workspace root.',
      },
      {
        name: 'package-manager',
        type: 'string',
        enum: ['npm', 'yarn', 'pnpm', 'cnpm'],
        description: 'The package manager used to install dependencies.',
      },
      {
        name: 'prefix',
        type: 'string',
        aliases: ['p'],
        default: 'app',
        description:
          'The prefix to apply to generated selectors for the initial project.',
      },
      {
        name: 'routing',
        type: 'boolean',
        description: 'Generate a routing module for the initial project.',
      },
      {
        name: 'skip-git',
        type: 'boolean',
        aliases: ['g'],
        default: false,
        description: 'Do not initialize a git repository.',
      },
      {
        name: 'skip-install',
        type: 'boolean',
        default: false,
        description: 'Do not install dependency packages.',
      },
      {
        name: 'skip-tests',
        type: 'boolean',
        aliases: ['S'],
        default: false,
        description:
          'Do not generate "spec.ts" test files for the new project.',
      },
      {
        name: 'strict',
        type: 'boolean',
        default: true,
        description:
          'Creates a workspace with stricter type checking and stricter bundle budgets settings. This setting helps improve maintainability and catch bugs ahead of time. For more information, see https://angular.io/guide/strict-mode',
      },
      {
        name: 'style',
        type: 'string',
        enum: ['css', 'scss', 'sass', 'less'],
        description:
          'The file extension or preprocessor to use for style files.',
      },
      {
        name: 'view-encapsulation',
        type: 'string',
        enum: ['Emulated', 'None', 'ShadowDom'],
        description:
          'The view encapsulation strategy to use in the initial project.',
      },
    ],
  },
  //   {
  //     name: 'run',
  //     command: 'ng run <target>',
  //     shortDescription:
  //       'Runs an Architect target with an optional custom builder configuration defined in your project.',
  //     longDescriptionRelativePath:
  //       '@angular/cli/src/commands/run/long-description.md',
  //     longDescription:
  //       'Architect is the tool that the CLI uses to perform complex tasks such as compilation, according to provided configurations.\nThe CLI commands run Architect targets such as `build`, `serve`, `test`, and `lint`.\nEach named target has a default configuration, specified by an `options` object,\nand an optional set of named alternate configurations in the `configurations` object.\n\nFor example, the `serve` target for a newly generated app has a predefined\nalternate configuration named `production`.\n\nYou can define new targets and their configuration options in the `architect` section\nof the `angular.json` file which you can run them from the command line using the `ng run` command.\n',
  //     aliases: [],
  //     deprecated: false,
  //     options: [
  //       {
  //         name: 'help',
  //         type: 'boolean',
  //         description: 'Shows a help message for this command in the console.',
  //       },
  //       {
  //         name: 'target',
  //         type: 'string',
  //         description:
  //           'The Architect target to run provided in the the following format `project:target[:configuration]`.',
  //         positional: 0,
  //       },
  //     ],
  //   },
  {
    name: 'serve',
    command: 'ng serve [project]',
    shortDescription:
      'Builds and serves your application, rebuilding on file changes.',
    aliases: ['s'],
    deprecated: false,
    options: [
      {
        name: 'allowed-hosts',
        type: 'array',
        description: 'List of hosts that are allowed to access the dev server.',
      },
      {
        name: 'browser-target',
        type: 'string',
        description:
          'A browser builder target to serve in the format of `project:target[:configuration]`. You can also pass in more than one configuration name as a comma-separated list. Example: `project:target:production,staging`.',
      },
      {
        name: 'configuration',
        type: 'string',
        aliases: ['c'],
        description:
          'One or more named builder configurations as a comma-separated list as specified in the "configurations" section in angular.json.\nThe builder uses the named configurations to run the given target.\nFor more information, see https://angular.io/guide/workspace-config#alternate-build-configurations.',
      },
      {
        name: 'disable-host-check',
        type: 'boolean',
        default: false,
        description:
          "Don't verify connected clients are part of allowed hosts.",
      },
      {
        name: 'help',
        type: 'boolean',
        description: 'Shows a help message for this command in the console.',
      },
      {
        name: 'hmr',
        type: 'boolean',
        default: false,
        description: 'Enable hot module replacement.',
      },
      {
        name: 'host',
        type: 'string',
        default: 'localhost',
        description: 'Host to listen on.',
      },
      {
        name: 'live-reload',
        type: 'boolean',
        default: true,
        description: 'Whether to reload the page on change, using live-reload.',
      },
      {
        name: 'open',
        type: 'boolean',
        aliases: ['o'],
        default: false,
        description: 'Opens the url in default browser.',
      },
      {
        name: 'poll',
        type: 'number',
        description:
          'Enable and define the file watching poll time period in milliseconds.',
      },
      {
        name: 'port',
        type: 'number',
        default: 4200,
        description: 'Port to listen on.',
      },
      {
        name: 'project',
        type: 'string',
        description:
          'The name of the project to build. Can be an application or a library.',
        positional: 0,
      },
      {
        name: 'proxy-config',
        type: 'string',
        description:
          'Proxy configuration file. For more information, see https://angular.io/guide/build#proxying-to-a-backend-server.',
      },
      {
        name: 'public-host',
        type: 'string',
        description:
          'The URL that the browser client (or live-reload client, if enabled) should use to connect to the development server. Use for a complex dev server setup, such as one with reverse proxies.',
      },
      {
        name: 'serve-path',
        type: 'string',
        description: 'The pathname where the application will be served.',
      },
      {
        name: 'ssl',
        type: 'boolean',
        default: false,
        description: 'Serve using HTTPS.',
      },
      {
        name: 'ssl-cert',
        type: 'string',
        description: 'SSL certificate to use for serving HTTPS.',
      },
      {
        name: 'ssl-key',
        type: 'string',
        description: 'SSL key to use for serving HTTPS.',
      },
      {
        name: 'verbose',
        type: 'boolean',
        description: 'Adds more details to output logging.',
      },
      {
        name: 'watch',
        type: 'boolean',
        default: true,
        description: 'Rebuild on change.',
      },
    ],
  },
  {
    name: 'test',
    command: 'ng test [project]',
    shortDescription: 'Runs unit tests in a project.',
    longDescriptionRelativePath:
      '@angular/cli/src/commands/test/long-description.md',
    longDescription:
      'Takes the name of the project, as specified in the `projects` section of the `angular.json` workspace configuration file.\nWhen a project name is not supplied, it will execute for all projects.\n',
    aliases: ['t'],
    deprecated: false,
    options: [
      {
        name: 'browsers',
        type: 'string',
        description: 'Override which browsers tests are run against.',
      },
      {
        name: 'code-coverage',
        type: 'boolean',
        default: false,
        description: 'Output a code coverage report.',
      },
      {
        name: 'code-coverage-exclude',
        type: 'array',
        description: 'Globs to exclude from code coverage.',
      },
      {
        name: 'configuration',
        type: 'string',
        aliases: ['c'],
        description:
          'One or more named builder configurations as a comma-separated list as specified in the "configurations" section in angular.json.\nThe builder uses the named configurations to run the given target.\nFor more information, see https://angular.io/guide/workspace-config#alternate-build-configurations.',
      },
      {
        name: 'exclude',
        type: 'array',
        description: 'Globs of files to exclude, relative to the project root.',
      },
      {
        name: 'help',
        type: 'boolean',
        description: 'Shows a help message for this command in the console.',
      },
      {
        name: 'include',
        type: 'array',
        description:
          'Globs of files to include, relative to project root. \nThere are 2 special cases:\n - when a path to directory is provided, all spec files ending ".spec.@(ts|tsx)" will be included\n - when a path to a file is provided, and a matching spec file exists it will be included instead.',
      },
      {
        name: 'inline-style-language',
        type: 'string',
        default: 'css',
        enum: ['css', 'less', 'sass', 'scss'],
        description:
          "The stylesheet language to use for the application's inline component styles.",
      },
      {
        name: 'karma-config',
        type: 'string',
        description: 'The name of the Karma configuration file.',
      },
      {
        name: 'main',
        type: 'string',
        description: 'The name of the main entry-point file.',
      },
      {
        name: 'poll',
        type: 'number',
        description:
          'Enable and define the file watching poll time period in milliseconds.',
      },
      {
        name: 'polyfills',
        type: 'string',
        description: 'Polyfills to be included in the build.',
      },
      {
        name: 'preserve-symlinks',
        type: 'boolean',
        description:
          'Do not use the real path when resolving modules. If unset then will default to `true` if NodeJS option --preserve-symlinks is set.',
      },
      {
        name: 'progress',
        type: 'boolean',
        default: true,
        description: 'Log progress to the console while building.',
      },
      {
        name: 'project',
        type: 'string',
        description:
          'The name of the project to build. Can be an application or a library.',
        positional: 0,
      },
      {
        name: 'reporters',
        type: 'array',
        description:
          'Karma reporters to use. Directly passed to the karma runner.',
      },
      {
        name: 'source-map',
        type: 'boolean',
        default: true,
        description:
          'Output source maps for scripts and styles. For more information, see https://angular.io/guide/workspace-config#source-map-configuration.',
      },
      {
        name: 'ts-config',
        type: 'string',
        description: 'The name of the TypeScript configuration file.',
      },
      {
        name: 'watch',
        type: 'boolean',
        description: 'Run build when files change.',
      },
      {
        name: 'web-worker-ts-config',
        type: 'string',
        description: 'TypeScript configuration for Web Worker modules.',
      },
    ],
  },
  {
    name: 'update',
    command: 'ng update [packages..]',
    shortDescription: 'Updates your workspace and its dependencies',
    longDescriptionRelativePath:
      '@angular/cli/src/commands/update/long-description.md',
    longDescription:
      'Perform a basic update to the current stable release of the core framework and CLI by running the following command.\n\n```\nng update @angular/cli @angular/core\n```\n\nTo update to the next beta or pre-release version, use the `--next` option.\n\nTo update from one major version to another, use the format\n\n```\nng update @angular/cli@^<major_version> @angular/core@^<major_version>\n```\n\nWe recommend that you always update to the latest patch version, as it contains fixes we released since the initial major release.\nFor example, use the following command to take the latest 10.x.x version and use that to update.\n\n```\nng update @angular/cli@^10 @angular/core@^10\n```\n\nFor detailed information and guidance on updating your application, see the interactive [Angular Update Guide](https://update.angular.io/).\n',
    aliases: [],
    deprecated: false,
    options: [
      {
        name: 'allow-dirty',
        type: 'boolean',
        default: false,
        description:
          'Whether to allow updating when the repository contains modified or untracked files.',
      },
      {
        name: 'create-commits',
        type: 'boolean',
        aliases: ['C'],
        default: false,
        description:
          'Create source control commits for updates and migrations.',
      },
      {
        name: 'force',
        type: 'boolean',
        default: false,
        description: 'Ignore peer dependency version mismatches.',
      },
      {
        name: 'from',
        type: 'string',
        description:
          "Version from which to migrate from. Only available with a single package being updated, and only with 'migrate-only'.",
      },
      {
        name: 'help',
        type: 'boolean',
        description: 'Shows a help message for this command in the console.',
      },
      {
        name: 'migrate-only',
        type: 'boolean',
        description:
          'Only perform a migration, do not update the installed version.',
      },
      {
        name: 'name',
        type: 'string',
        description:
          "The name of the migration to run. Only available with a single package being updated, and only with 'migrate-only' option.",
      },
      {
        name: 'next',
        type: 'boolean',
        default: false,
        description: 'Use the prerelease version, including beta and RCs.',
      },
      {
        name: 'packages',
        type: 'array',
        default: [],
        description: 'The names of package(s) to update.',
        positional: 0,
      },
      {
        name: 'packages',
        type: 'string',
        default: [],
        description: 'The names of package(s) to update.',
        positional: 0,
      },
      {
        name: 'to',
        type: 'string',
        description:
          "Version up to which to apply migrations. Only available with a single package being updated, and only with 'migrate-only' option. Requires 'from' to be specified. Default to the installed version detected.",
      },
      {
        name: 'verbose',
        type: 'boolean',
        default: false,
        description:
          'Display additional details about internal operations during execution.',
      },
    ],
  },
  {
    name: 'version',
    command: 'ng version',
    shortDescription: 'Outputs Angular CLI version.',
    aliases: ['v'],
    deprecated: false,
    options: [
      {
        name: 'help',
        type: 'boolean',
        description: 'Shows a help message for this command in the console.',
      },
    ],
  },
];

export const NG_COMMANDS = RAW_NG_COMMANDS.map((command) => {
  return {
    ...command,
    options: command.options.map((option) => {
      return {
        ...option,
        parentCommand: command.name,
      };
    }),
    subcommands: (command.subcommands || []).map((subcommand) => {
      return {
        ...subcommand,
        parentCommand: command.name,
        options: subcommand.options.map((option) => {
          return {
            ...option,
            parentCommand: subcommand.name,
          };
        }),
      };
    }),
  };
});
