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
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
  // 100: 'one hundred',
  // 1000: 'one thousand',
}; // as const
// TODO type able to return undefined;

export const numberToWords = (number: number): string => {
  if (mapNumberToWords[number]) {
    return mapNumberToWords[number];
  }

  const tenAmounts = [90, 80, 70, 60, 50, 40, 30, 20];

  for (const tenAmount of tenAmounts) {
    if (number > tenAmount) {
      const remainder = number - tenAmount;
      const words = `${mapNumberToWords[tenAmount]}-${mapNumberToWords[remainder]}`;
      return words;
    }
  }

  throw new Error();
};
