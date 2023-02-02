import { numberToWords } from './numberToWords';

describe('unit', () => {
  it.each([
    [0, 'zero'],
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
    [4, 'four'],
    [5, 'five'],
    [6, 'six'],
    [7, 'seven'],
    [8, 'eight'],
    [9, 'nine'],
    [10, 'ten'],
    [11, 'eleven'],
    [12, 'twelve'],
    [13, 'thirteen'],
    [14, 'fourteen'],
    [15, 'fifteen'],
    [16, 'sixteen'],
    [17, 'seventeen'],
    [18, 'eighteen'],
    [19, 'nineteen'],
    [20, 'twenty'],
    [21, 'twenty-one'],
    [30, 'thirty'],
    [31, 'thirty-one'],
    [40, 'forty'],
    [41, 'forty-one'],
    [50, 'fifty'],
    [51, 'fifty-one'],
    [60, 'sixty'],
    [61, 'sixty-one'],
    [70, 'seventy'],
    [71, 'seventy-one'],
    [80, 'eighty'],
    [81, 'eighty-one'],
    [90, 'ninety'],
    [91, 'ninety-one'],
    // [100, 'one hundred'],
    // [101, 'one hundred and one'],
    // [111, 'one hundred and eleven'],
    // [121, 'one hundred and twenty-one'],
    // [200, 'two hundred'],
    // [201, 'two hundred and one'],
    // [300, 'three hundred'],
    // [900, 'nine hundred'],
    // [1000, 'one thousand'],
    // [1001, 'one thousand and one'], // confirm
    // [1021, 'one thousand and twenty-one'], // confirm
    // [1100, 'one thousand, one hundred'],
    // [1101, 'one thousand, one hundred and one'],
    // [1121, 'one thousand, one hundred and twenty-one'],
    // [1201, 'one thousand, two hundred and one'],
    // [2000, 'two thousand'],
    // [2001, 'two thousand and one'], // confirm
    // [2101, 'two thousand, one hundred and one'],
    // [3000, 'three thousand'],
    // [11_000, 'eleven thousand'],
    // [21_000, 'twenty-one thousand'],
    // [99_999, 'ninety-nine thousand, nine hundred and ninety-nine'], // boundary
    // [100_000, 'one hundred thousand'],
  ])('%d => %s', (input, expected) => {
    const output = numberToWords(input);

    expect(output).toBe(expected);
  });

  // reject
  // it.each([
  //   [-1],
  //   [Infinity],
  //   [100_001],
  //   [NaN],
  //   [undefined],
  //   [null],
  //   [() => throw)],
  //   [eval],
  // ])('name', (input) => {
  //   const output = numberToWords(input);

  //   expect(output).toBe(expected);
  // });
});

// describe('acceptance', () => {
//   it.each([
//     [52, 'fifty-two'],
//     [1000, 'one thousand'],
//     [101, 'one hundred and one'],
//     [352, 'three hundred and fify-two'],
//     [12300, 'twelve thousand, three hundred'],
//     [12345, 'twelve thousand, three hundred and forty-five'],
//   ])('name', (input, expected) => {
//     const output = numberToWords(input);

//     expect(output).toBe(expected);
//   });
// });
