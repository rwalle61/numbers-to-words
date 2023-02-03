import { output } from '../adapters/cliOutputter';
import { numberToWords } from '../useCases/numberToWords';

const parse = (args: string[]): number => parseInt(args[2], 10);

export const cliController = (args: string[]): void => {
  const number = parse(args);

  const words = numberToWords(number);

  output(words);
};
