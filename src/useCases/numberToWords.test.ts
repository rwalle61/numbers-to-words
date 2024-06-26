import { numberToWords } from './numberToWords';

describe('numberToWords', () => {
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
    [100, 'one hundred'],
    [101, 'one hundred and one'],
    [111, 'one hundred and eleven'],
    [121, 'one hundred and twenty-one'],
    [200, 'two hundred'],
    [201, 'two hundred and one'],
    [221, 'two hundred and twenty-one'],
    [300, 'three hundred'],
    [321, 'three hundred and twenty-one'],
    [900, 'nine hundred'],
    [1000, 'one thousand'],
    [1001, 'one thousand and one'],
    [1021, 'one thousand and twenty-one'],
    [1100, 'one thousand, one hundred'],
    [1101, 'one thousand, one hundred and one'],
    [1121, 'one thousand, one hundred and twenty-one'],
    [1201, 'one thousand, two hundred and one'],
    [2000, 'two thousand'],
    [2001, 'two thousand and one'],
    [2101, 'two thousand, one hundred and one'],
    [3000, 'three thousand'],
    [11_000, 'eleven thousand'],
    [21_000, 'twenty-one thousand'],
    [99_999, 'ninety-nine thousand, nine hundred and ninety-nine'],
    [100_000, 'one hundred thousand'],
    [999_900, 'nine hundred and ninety-nine thousand, nine hundred'],
    [1_000_000, 'one million'],
    [1_000_001, 'one million and one'],
    [
      999_900_900,
      'nine hundred and ninety-nine million, nine hundred thousand, nine hundred',
    ],
    [1_000_000_000, 'one billion'],
    [1_000_000_001, 'one billion and one'],
    [
      999_900_900_900,
      'nine hundred and ninety-nine billion, nine hundred million, nine hundred thousand, nine hundred',
    ],
    [
      999_900_900_900_900,
      'nine hundred and ninety-nine trillion, nine hundred billion, nine hundred million, nine hundred thousand, nine hundred',
    ],
    [
      8_900_900_900_900_900, // just under max safe integer of nine quadrillion `9007199254740991`
      'eight quadrillion, nine hundred trillion, nine hundred billion, nine hundred million, nine hundred thousand, nine hundred',
    ],
  ])('%d => %s', (input, expected) => {
    const output = numberToWords(input);

    expect(output).toBe(expected);
  });
});

describe('acceptance', () => {
  it.each([
    [52, 'fifty-two'],
    [1000, 'one thousand'],
    [101, 'one hundred and one'],
    [352, 'three hundred and fifty-two'],
    [12300, 'twelve thousand, three hundred'],
    [12345, 'twelve thousand, three hundred and forty-five'],
    [1_000_000_000, 'one billion'],
  ])('%d => %s', (input, expected) => {
    const output = numberToWords(input);

    expect(output).toBe(expected);
  });
});
