const mapNumberToWords: Record<number, string> = {
  0: 'zero',
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
  // 50: 'fifty',
  // 60: 'sixty',
  // 70: 'seventy',
  // 80: 'eighty',
  // 90: 'ninety',
  // 100: 'one hundred',
  // 1000: 'one thousand',
}; // as const
// TODO type able to return undefined;

export const numberToWords = (number: number): string => {
  if (mapNumberToWords[number]) {
    return mapNumberToWords[number];
  }

  if (number > 40) {
    const tensAmount = 40;
    const remainder = number - tensAmount;
    const words = `${mapNumberToWords[tensAmount]}-${mapNumberToWords[remainder]}`;
    return words;
  }

  if (number > 30) {
    const tensAmount = 30;
    const remainder = number - tensAmount;
    const words = `${mapNumberToWords[tensAmount]}-${mapNumberToWords[remainder]}`;
    return words;
  }

  if (number > 20) {
    const tensAmount = 20;
    const remainder = number - tensAmount;
    const words = `${mapNumberToWords[tensAmount]}-${mapNumberToWords[remainder]}`;
    return words;
  }

  throw new Error();
};