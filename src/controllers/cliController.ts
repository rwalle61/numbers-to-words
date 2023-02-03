import { toStderr, toStdout } from '../adapters/cliOutputter';
import { parse } from '../adapters/cliParser';
import { numberToWords } from '../useCases/numberToWords';

export type CLIArgs = NodeJS.Process['argv'];

export const cliController = (args: CLIArgs): void => {
  try {
    const number = parse(args);

    const words = numberToWords(number);

    toStdout(words);
  } catch (error) {
    toStderr(error);
  }
};
