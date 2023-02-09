const onesToWord = {
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

type OnesDigit = keyof typeof onesToWord;

const teensToWord = {
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

const tensToWord = {
  10: 'ten',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};

type TensDigit = keyof typeof tensToWord;

const numbersToWords = {
  0: 'zero',
  ...onesToWord,
  ...teensToWord,
  ...tensToWord,
};

const illionsToWords = [
  [10 ** 15, 'quadrillion'],
  [10 ** 12, 'trillion'],
  [10 ** 9, 'billion'],
  [10 ** 6, 'million'],
  [10 ** 3, 'thousand'],
  [10 ** 2, 'hundred'],
] as const;

export const numberToWords = (number: number): string => {
  for (const [illionNumber, illionWord] of illionsToWords) {
    const illionDigits = Math.floor(number / illionNumber);

    if (illionDigits) {
      let words = `${numberToWords(illionDigits)} ${illionWord}`;

      const remainder = number % illionNumber;

      if (remainder) {
        const delimiter = remainder < 100 ? ' and ' : ', ';
        words += `${delimiter}${numberToWords(remainder)}`;
      }

      return words;
    }
  }

  if (number in numbersToWords) {
    return numbersToWords[number as keyof typeof numbersToWords];
  }

  const onesDigit = (number % 10) as OnesDigit;
  const tensDigit = (number - onesDigit) as TensDigit;
  return `${tensToWord[tensDigit]}-${onesToWord[onesDigit]}`;
};
