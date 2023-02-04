const onesToWord: Record<number, string> = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
};

const underTwentyToWord: Record<number, string> = {
  ...onesToWord,
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
};

const tensToWord: Record<number, string> = {
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};

const THOUSAND = 1000;
const HUNDRED = 100;
const TEN = 10;

export const numberToWords = (number: number): string => {
  if (number === 0) {
    return 'zero';
  }

  let words = '';

  const thousandsDigits = Math.floor(number / THOUSAND);
  const hundredsDigit = Math.floor((number % THOUSAND) / HUNDRED);
  const onesDigit = number % TEN;
  const underHundredAmount = number % HUNDRED;

  if (thousandsDigits) {
    words += `${numberToWords(thousandsDigits)} thousand`;
  }

  if (thousandsDigits && hundredsDigit) {
    words += ', ';
  }

  if (hundredsDigit) {
    words += `${onesToWord[hundredsDigit]} hundred`;
  }

  if ((thousandsDigits || hundredsDigit) && underHundredAmount) {
    words += ' and ';
  }

  if (underHundredAmount) {
    if (underHundredAmount < 20) {
      words += underTwentyToWord[underHundredAmount];
    } else if (onesDigit) {
      words += `${tensToWord[underHundredAmount - onesDigit]}-${
        onesToWord[onesDigit]
      }`;
    } else {
      words += tensToWord[underHundredAmount];
    }
  }

  return words;
};
