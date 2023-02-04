import { CLIArgs } from '../controllers/cliController';
import { MAX_NUMBER, MIN_NUMBER } from '../domain/range';
import { parse } from './cliParser';

const makeArgs = (commandArgs: string[]): CLIArgs => [
  '/bin/node',
  '/bin/command',
  ...commandArgs,
];

describe('cliParser', () => {
  it('parses a valid integer', () => {
    const args = makeArgs(['1']);

    const number = parse(args);

    expect(number).toBe(1);
  });

  it('rejects too few args', () => {
    const args = makeArgs([]);

    expect(() => parse(args)).toThrow(new Error('Too few args'));
  });

  it('rejects too many args', () => {
    const args = makeArgs(['1', '2']);

    expect(() => parse(args)).toThrow(new Error('Too many args'));
  });

  it.each([
    ['0.0'],
    ['Infinity'],
    ['NaN'],
    ['a'],
    ['undefined'],
    ['null'],
    ['Error'],
  ])('rejects non-integers: %s', (nonInteger) => {
    const args = makeArgs([nonInteger]);

    expect(() => parse(args)).toThrow(new Error('Arg must be integer'));
  });

  it('rejects an integer that is too small', () => {
    const args = makeArgs([`${MIN_NUMBER - 1}`]);

    expect(() => parse(args)).toThrow(
      new Error(`Arg must be between ${MIN_NUMBER}-${MAX_NUMBER}`),
    );
  });

  it('rejects an integer that is too big', () => {
    const args = makeArgs([`${MAX_NUMBER + 1}`]);

    expect(() => parse(args)).toThrow(
      new Error(`Arg must be between ${MIN_NUMBER}-${MAX_NUMBER}`),
    );
  });
});
