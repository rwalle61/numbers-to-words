import * as outputter from '../adapters/cliOutputter';
import { cliController } from './cliController';

describe('cliController', () => {
  it('outputs correct word', () => {
    const args: NodeJS.Process['argv'] = [
      '/Users/richard/numbers-to-words/node_modules/.bin/ts-node',
      '/Users/richard/numbers-to-words/src',
      '1',
    ];

    const output = jest.spyOn(outputter, 'output').mockImplementation();

    cliController(args);

    expect(output).toHaveBeenCalledWith('one');
  });
});
