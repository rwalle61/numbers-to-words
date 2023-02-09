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
      jest.spyOn(console, 'error').mockImplementation();

      toStderr(new Error('err'));

      expect(console.error).toHaveBeenCalledWith('err');
    });

    it('outputs to stderr when a non-Error is thrown', () => {
      jest.spyOn(console, 'error').mockImplementation();

      toStderr({});

      expect(console.error).toHaveBeenCalledWith({});
    });
  });
});
