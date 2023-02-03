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
  400: 'four hundred',
  500: 'five hundred',
  600: 'six hundred',
  700: 'seven hundred',
  800: 'eight hundred',
  900: 'nine hundred',
  1000: 'one thousand',
}; // as const
// TODO type able to return undefined;

export const numberToWords = (number: number): string => {
  let remainder = number;
  let words = '';

  // hundreds & thousands
  if (mapNumberToWords[remainder]) {
    return `${words}${mapNumberToWords[remainder]}`;
  }

  const thousandAmount = 1000;
  if (remainder > thousandAmount) {
    remainder -= thousandAmount;
    if (remainder < 100) {
      words += `${mapNumberToWords[thousandAmount]} and `;
    } else {
      words += `${mapNumberToWords[thousandAmount]}, `;
    }
  }

  const hundredAmounts = [900, 800, 700, 600, 500, 400, 300, 200, 100];

  for (const hundredAmount of hundredAmounts) {
    if (remainder > hundredAmount) {
      remainder -= hundredAmount;
      const hundreds = Math.floor(hundredAmount / 100);
      words += `${mapNumberToWords[hundreds]} hundred and `;
    }
  }

  // tens & <20
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
