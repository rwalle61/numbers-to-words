import * as outputter from '../adapters/cliOutputter';
import { cliController } from './cliController';

describe('cliController', () => {
  it('outputs correct word', () => {
    const output = jest.spyOn(outputter, 'output').mockImplementation();
    const args = ['/bin/node', '/bin/index.js', '1'];

    cliController(args);

    expect(output).toHaveBeenCalledWith('one');
  });
});
