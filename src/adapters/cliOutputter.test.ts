import { output } from './cliOutputter';

describe('cliOutputter', () => {
  it('calls console.log', () => {
    jest.spyOn(console, 'log').getMockImplementation();

    output('one');

    // eslint-disable-next-line no-console
    expect(console.log).toHaveBeenCalledWith('one');
  });
});
