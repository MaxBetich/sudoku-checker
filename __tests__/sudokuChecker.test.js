import Puzzle from "../src/sudokuChecker";

describe('Puzzle', () => {

  test('should successfully create a Puzzle object with an array1 property', () => {
    const array = [1];
    const newPuzzle = new Puzzle(array);
    expect(newPuzzle.array1).toEqual([1]);
  });
})