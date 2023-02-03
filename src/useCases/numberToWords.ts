const mapNumberToWord = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
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
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};

const numberToWord = (number: number): string => {
  if (!(number in mapNumberToWord)) {
    throw new Error(`Unexpected number: ${number}`);
  }
  return mapNumberToWord[number as keyof typeof numberToWord];
};

const THOUSAND = 1000;
const HUNDRED = 100;
const TEN = 10;

export const numberToWords = (number: number): string => {
  let remainder = number;
  let words = '';

  if (remainder === 0) {
    return 'zero';
  }

  if (remainder >= THOUSAND) {
    const thousandsDigits = Math.floor(remainder / THOUSAND);
    words += `${numberToWords(thousandsDigits)} thousand`;
    remainder %= THOUSAND;
  }

  if (remainder >= HUNDRED) {
    if (words) {
      words += `, `;
    }
    const hundredsDigit = Math.floor(remainder / HUNDRED);
    words += `${numberToWord(hundredsDigit)} hundred`;
    remainder %= HUNDRED;
  }

  if (words && remainder !== 0) {
    words += ` and `;
  }

  if (remainder > 20) {
    const tensDigit = Math.floor(remainder / TEN);
    const tensAmount = tensDigit * TEN;
    words += numberToWord(tensAmount);
    remainder %= TEN;

    if (remainder !== 0) {
      words += '-';
    }
  }

  if (remainder !== 0) {
    words += numberToWord(remainder);
  }

  return words;
};
