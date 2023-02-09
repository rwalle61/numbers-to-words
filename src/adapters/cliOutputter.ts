export const toStdout = (words: string): void => {
  console.log(words);
};

export const toStderr = (error: unknown | Error): void => {
  if (error instanceof Error) {
    console.error(error.message);
  }

  console.error(error);
};
