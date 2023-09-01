import { Tree } from '@nx/devkit';

export default async function (tree: Tree, options: object) {
  const { default: chalk } = await (Function(
    'return import("chalk")'
  )() as Promise<typeof import('chalk')>);

  console.log(chalk.blue('Hello World'));
}
