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
  100: 'one hundred',
  200: 'two hundred',
  300: 'three hundred',
  // 1000: 'one thousand',
}; // as const
// TODO type able to return undefined;

export const numberToWords = (number: number): string => {
  let remainder = number;
  let words = '';

  if (mapNumberToWords[remainder]) {
    return `${words}${mapNumberToWords[remainder]}`;
  }

  if (remainder > 300) {
    remainder -= 300;
    words += `three hundred and `;
  }

  if (remainder > 200) {
    remainder -= 200;
    words += `two hundred and `;
  }

  if (remainder > 100) {
    remainder -= 100;
    words += `one hundred and `;
  }

  if (mapNumberToWords[remainder]) {
    return `${words}${mapNumberToWords[remainder]}`;
  }

  const tenAmounts = [90, 80, 70, 60, 50, 40, 30, 20];

  for (const tenAmount of tenAmounts) {
    if (remainder > tenAmount) {
      return `${words}${mapNumberToWords[tenAmount]}-${
        mapNumberToWords[remainder - tenAmount]
      }`;
    }
  }

  throw new Error();
};
