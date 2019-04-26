import chalk from 'chalk';

export function logBlue(msg: string) {
  console.log(chalk.blue(msg));
}

export function logRed(msg: string) {
  console.log(chalk.red(msg));
}
