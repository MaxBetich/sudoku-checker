import Puzzle from "../src/sudokuChecker";

describe('Puzzle', () => {

  test('should successfully create a Puzzle object with an array1 property', () => {
    const array = [1];
    const newPuzzle = new Puzzle(array);
    expect(newPuzzle.array1).toEqual([1]);
  });

  test('should successfully create a Puzzle object with array1-9 properties', () => {
    const newPuzzle = new Puzzle([1], [2], [3], [4], [5], [6], [7], [8], [9]);
    expect(newPuzzle.array1).toEqual([1]);
    expect(newPuzzle.array2).toEqual([2]);
    expect(newPuzzle.array3).toEqual([3]);
    expect(newPuzzle.array4).toEqual([4]);
    expect(newPuzzle.array5).toEqual([5]);
    expect(newPuzzle.array6).toEqual([6]);
    expect(newPuzzle.array7).toEqual([7]);
    expect(newPuzzle.array8).toEqual([8]);
    expect(newPuzzle.array9).toEqual([9]);
  });

  test('should check if input array length equals 9', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const newPuzzle = new Puzzle(array, [2], [3], [4], [5], [6], [7], [8], [9]);
    const lengthCheckerOutput = newPuzzle.lengthChecker();
    expect(lengthCheckerOutput).toEqual([true]);
  });

  test('should check if every input array length equals 9', () => {
    const inputArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const inputArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const inputArray3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const inputArray4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const inputArray5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const inputArray6 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const inputArray7 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const inputArray8 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const inputArray9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const newPuzzle = new Puzzle(inputArray1, inputArray2, inputArray3, inputArray4, inputArray5, inputArray6, inputArray7, inputArray8, inputArray9);
    const lengthCheckerOutput = newPuzzle.lengthChecker();
    expect(lengthCheckerOutput).toEqual([true, true, true, true, true, true, true, true, true]);
  });
})