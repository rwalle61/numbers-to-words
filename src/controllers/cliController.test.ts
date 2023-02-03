import * as outputter from '../adapters/cliOutputter';
import * as parser from '../adapters/cliParser';
import { cliController } from './cliController';

describe('cliController', () => {
  it('outputs correct word to stdout', () => {
    const toStdout = jest.spyOn(outputter, 'toStdout').mockImplementation();
    const args = ['/bin/node', '/bin/index.js', '1'];

    cliController(args);

    expect(toStdout).toHaveBeenCalledWith('one');
  });

  it('outputs errors to stderr', () => {
    const error = new Error();
    jest.spyOn(parser, 'parse').mockImplementation(() => {
      throw error;
    });
    const toStderr = jest.spyOn(outputter, 'toStderr').mockImplementation();
    const args = ['/bin/node', '/bin/index.js', '1'];

    cliController(args);

    expect(toStderr).toHaveBeenCalledWith(error);
  });
});
