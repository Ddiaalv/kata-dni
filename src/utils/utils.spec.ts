import { calculateDniLetter, getRandomNumber, stringOfRandomNumbers } from './utils';

describe('GenerateRandomDni', () => {
  test('should generate a random number between 0 and 9', () => {
    let times = 0;
    const min = 0;
    const max = 9;
    do {
      const randomNumber = getRandomNumber(min, max);
      expect(randomNumber).toBeLessThanOrEqual(max);
      expect(randomNumber).toBeGreaterThanOrEqual(min);
      times++;
    } while (times < 20);
  });

  test('should generate an eight digit string', () => {
    const lenghtString = 8;
    const numbers = stringOfRandomNumbers(lenghtString);
    expect(numbers.length).toBe(lenghtString);
  });

  test('should return the dni letter', () => {
    const letter = 'H';
    const result = calculateDniLetter('11111111');
    expect(result).toBe(letter);
  });
});
