export interface PrimaryOption {
  value: string;
  label: string;
}

interface Command {
  [key: string]: Array<{
    value: string;
    label: string;
    command: string;
  }>;
}

export const PRIMARY_OPTIONS: PrimaryOption[] = [
  { value: 'create', label: 'create' },
  { value: 'serve', label: 'serve' },
  { value: 'build', label: 'build' },
  { value: 'test', label: "run my app's tests" },
];

export const SECONDARY_OPTIONS: Command = {
  create: [
    { value: 'app', label: 'a new app', command: 'ng new <app-name>' },
    {
      value: 'lib',
      label: 'a new library',
      command: 'ng generate library <lib-name>',
    },
    {
      value: 'component',
      label: 'a new component',
      command: 'ng generate component <component-name>',
    },
    {
      value: 'directive',
      label: 'a new directive',
      command: 'ng generate directive <directive-name>',
    },
    {
      value: 'pipe',
      label: 'a new pipe',
      command: 'ng generate pipe <pipe-name>',
    },
    {
      value: 'service',
      label: 'a new service',
      command: 'ng generate service <service-name>',
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
