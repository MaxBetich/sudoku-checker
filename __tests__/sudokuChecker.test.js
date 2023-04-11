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

  test('should check if every input array length !== 9', () => {
    const inputArray1 = [1, 2, 3, 4, 5, 6, 7, 8];
    const inputArray2 = [1, 2, 3, 4, 5, 6, 7, 8];
    const inputArray3 = [1, 2, 3, 4, 5, 6, 7, 8];
    const inputArray4 = [1, 2, 3, 4, 5, 6, 7, 8];
    const inputArray5 = [1, 2, 3, 4, 5, 6, 7, 8];
    const inputArray6 = [1, 2, 3, 4, 5, 6, 7, 8];
    const inputArray7 = [1, 2, 3, 4, 5, 6, 7, 8];
    const inputArray8 = [1, 2, 3, 4, 5, 6, 7, 8];
    const inputArray9 = [1, 2, 3, 4, 5, 6, 7, 8];
    const newPuzzle = new Puzzle(inputArray1, inputArray2, inputArray3, inputArray4, inputArray5, inputArray6, inputArray7, inputArray8, inputArray9);
    const lengthCheckerOutput = newPuzzle.lengthChecker();
    expect(lengthCheckerOutput).toEqual([false, false, false, false, false, false, false, false, false]);
  });

  test('should check if every input array contains the numbers 1 through 9', () => {
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
    const numberCheckerOutput = newPuzzle.numberChecker();
    expect(numberCheckerOutput).toEqual([true, true, true, true, true, true, true, true, true]);
  });

  test('should check if every input array does not contains the numbers 1 through 9', () => {
    const inputArray1 = [1, 3, 3, 4, 5, 6, 7, 8, 9];
    const inputArray2 = [1, 2, 4, 4, 5, 6, 7, 8, 9];
    const inputArray3 = [1, 2, 3, 5, 5, 6, 7, 8, 9];
    const inputArray4 = [1, 2, 3, 4, 6, 6, 7, 8, 9];
    const inputArray5 = [1, 2, 3, 4, 5, 7, 7, 8, 9];
    const inputArray6 = [1, 2, 3, 4, 5, 6, 8, 8, 9];
    const inputArray7 = [1, 2, 3, 4, 5, 6, 7, 9, 9];
    const inputArray8 = [1, 1, 3, 4, 5, 6, 7, 8, 9];
    const inputArray9 = [2, 2, 3, 4, 5, 6, 7, 8, 9];
    const newPuzzle = new Puzzle(inputArray1, inputArray2, inputArray3, inputArray4, inputArray5, inputArray6, inputArray7, inputArray8, inputArray9);
    const numberCheckerOutput = newPuzzle.numberChecker();
    expect(numberCheckerOutput).toEqual([false, false, false, false, false, false, false, false, false]);
  });

  test('should create 9 arrays by taking the value of each input array at each index from 0 to 8', () => {
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
    newPuzzle.verticalGenerator();
    expect(newPuzzle.arrayA).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1]);
    expect(newPuzzle.arrayB).toEqual([2, 2, 2, 2, 2, 2, 2, 2, 2]);
    expect(newPuzzle.arrayC).toEqual([3, 3, 3, 3, 3, 3, 3, 3, 3]);
    expect(newPuzzle.arrayD).toEqual([4, 4, 4, 4, 4, 4, 4, 4, 4]);
    expect(newPuzzle.arrayE).toEqual([5, 5, 5, 5, 5, 5, 5, 5, 5]);
    expect(newPuzzle.arrayF).toEqual([6, 6, 6, 6, 6, 6, 6, 6, 6]);
    expect(newPuzzle.arrayG).toEqual([7, 7, 7, 7, 7, 7, 7, 7, 7]);
    expect(newPuzzle.arrayH).toEqual([8, 8, 8, 8, 8, 8, 8, 8, 8]);
    expect(newPuzzle.arrayI).toEqual([9, 9, 9, 9, 9, 9, 9, 9, 9]);
  });

  test('should create 9 arrays by dividing the input arrays into 3x3 squares', () => {
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
    newPuzzle.squareGenerator();
    expect(newPuzzle.square1).toEqual([1, 2, 3, 1, 2, 3, 1, 2, 3]);
    expect(newPuzzle.square2).toEqual([4, 5, 6, 4, 5, 6, 4, 5, 6]);
    expect(newPuzzle.square3).toEqual([7, 8, 9, 7, 8, 9, 7, 8, 9]);
    expect(newPuzzle.square4).toEqual([1, 2, 3, 1, 2, 3, 1, 2, 3]);
    expect(newPuzzle.square5).toEqual([4, 5, 6, 4, 5, 6, 4, 5, 6]);
    expect(newPuzzle.square6).toEqual([7, 8, 9, 7, 8, 9, 7, 8, 9]);
    expect(newPuzzle.square7).toEqual([1, 2, 3, 1, 2, 3, 1, 2, 3]);
    expect(newPuzzle.square8).toEqual([4, 5, 6, 4, 5, 6, 4, 5, 6]);
    expect(newPuzzle.square9).toEqual([7, 8, 9, 7, 8, 9, 7, 8, 9]);
  })
});