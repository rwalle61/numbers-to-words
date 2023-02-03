import { inspect } from 'util';

export const toStdout = (words: string): void => {
  console.log(words);
};

export const toStderr = (error: unknown | Error): void => {
  if (error instanceof Error) {
    throw error;
  }

  throw new Error(inspect(error));
};
