const checkIfContainsOnlyNumbers = (text: string): boolean => {
  return /^[0-9]+$/.test(text);
};

const getRandomNumber = (min: number, max: number): number => {
  return Math.trunc(Math.random() * (max - min) + min);
};

const stringOfRandomNumbers = (lenghtString: number): string => {
  let contador = 0;
  let numbers = '';
  do {
    numbers += getRandomNumber(0, 9);
    contador++;
  } while (contador < lenghtString);
  return numbers;
};

const calculateDniLetter = (dni: string): string => {
  const officialDniLetterTable = [
    'T',
    'R',
    'W',
    'A',
    'G',
    'M',
    'Y',
    'F',
    'P',
    'D',
    'X',
    'B',
    'N',
    'J',
    'Z',
    'S',
    'Q',
    'V',
    'H',
    'L',
    'C',
    'K',
    'E',
  ];
  const index = parseInt(dni, 10) % officialDniLetterTable.length;
  return officialDniLetterTable[index];
};

export {
  stringOfRandomNumbers,
  calculateDniLetter,
  getRandomNumber,
  checkIfContainsOnlyNumbers,
};
