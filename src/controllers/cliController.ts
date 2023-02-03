import { output } from '../adapters/cliOutputter';
import { parse } from '../adapters/cliParser';
import { numberToWords } from '../useCases/numberToWords';

export type CLIArgs = NodeJS.Process['argv'];

export const cliController = (args: CLIArgs): void => {
  const number = parse(args);

  const words = numberToWords(number);

  output(words);
};
