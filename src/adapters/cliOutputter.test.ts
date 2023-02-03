import { inspect } from 'util';
import { toStderr, toStdout } from './cliOutputter';

describe('cliOutputter', () => {
  describe('toStdout', () => {
    it('outputs to stdout', () => {
      jest.spyOn(console, 'log').mockImplementation();

      toStdout('one');

      expect(console.log).toHaveBeenCalledWith('one');
    });
  });

  describe('toStderr', () => {
    it('outputs to stderr when an Error is thrown', () => {
      const error = new Error();

      expect(() => toStderr(error)).toThrow(error);
    });

    it('outputs to stderr when a non-Error is thrown', () => {
      const unknownError = {};

      expect(() => toStderr(unknownError)).toThrow(
        new Error(inspect(unknownError)),
      );
    });
  });
});
