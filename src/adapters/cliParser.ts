import type { CLIArgs } from '../controllers/cliController';
import { MAX_NUMBER, MIN_NUMBER } from '../domain/range';

const isInteger = (string: string): boolean => /^-?\d+$/.test(string);

export const parse = (args: CLIArgs): number => {
  if (args.length < 3) {
    throw new Error('Too few args');
  }
  if (args.length > 3) {
    throw new Error('Too many args');
  }
  const commandArg = args[2];

  if (!isInteger(commandArg)) {
    throw new Error('Arg must be integer');
  }

  const number = parseInt(commandArg, 10);

  if (number < MIN_NUMBER || number > MAX_NUMBER) {
    throw new Error(`Arg must be between ${MIN_NUMBER}-${MAX_NUMBER}`);
  }

  return number;
};
