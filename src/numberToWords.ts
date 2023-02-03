const numberToWord: Record<number, string> = {
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
// TODO make type able to return undefined

export const numberToWords = (number: number): string => {
  let remainder = number;
  let words = '';

  if (remainder === 0) {
    return 'zero';
  }

  if (remainder >= 1000) {
    const thousandsDigits = Math.floor(remainder / 1000);
    remainder -= thousandsDigits * 1000;
    words += `${numberToWords(thousandsDigits)} thousand`;
  }

  if (remainder >= 100) {
    if (words) {
      words += `, `;
    }
    const hundredsDigit = Math.floor(remainder / 100);
    remainder -= hundredsDigit * 100;
    words += `${numberToWord[hundredsDigit]} hundred`;
  }

  if (words && remainder !== 0) {
    words += ` and `;
  }

  if (remainder > 20) {
    const tensDigit = Math.floor(remainder / 10);
    const tensAmount = tensDigit * 10;
    remainder -= tensAmount;
    words += numberToWord[tensAmount];

    if (remainder !== 0) {
      words += '-';
    }
  }

  if (remainder !== 0) {
    words += numberToWord[remainder];
  }

  return words;
};
