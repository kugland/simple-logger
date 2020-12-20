import chalk from 'chalk';
import timestamp from './timestamp';

export type SimpleLogger = (...messages: any[]) => void;

const logger: SimpleLogger = (...messages) => {
  console.log(chalk.green(timestamp()), '|', ...messages);
}

export const taggedLogger: (tag: string) => SimpleLogger =
  tag => (...messages) => logger(tag, ...messages);

export default logger;
