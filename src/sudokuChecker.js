export default function Puzzle(inputArray1, inputArray2, inputArray3, inputArray4, inputArray5, inputArray6, inputArray7, inputArray8, inputArray9) {
  this.array1 = inputArray1;
  this.array2 = inputArray2;
  this.array3 = inputArray3;
  this.array4 = inputArray4;
  this.array5 = inputArray5;
  this.array6 = inputArray6;
  this.array7 = inputArray7;
  this.array8 = inputArray8;
  this.array9 = inputArray9;
};

Puzzle.prototype.lengthChecker = function() {
  let outputArray = [];
  //const testArray = [this.array1.value, this.array2.value, this.array3.value, this.array4.value, this.array5.value, this.array6.value, this.array7.value, this.array8.value, this.array9.value];
  // testArray.forEach(element => {
  //   if (element.length !== 9) {
  //     outputArray.push(false);
  //   } else {
  //     outputArray.push(true);
  //   };
  // });
  const testArray1 = this.array1;
  const testArray2 = this.array2;
  const testArray3 = this.array3;
  const testArray4 = this.array4;
  const testArray5 = this.array5;
  const testArray6 = this.array6;
  const testArray7 = this.array7;
  const testArray8 = this.array8;
  const testArray9 = this.array9;
  const inputArray = [testArray1, testArray2, testArray3, testArray4, testArray5, testArray6, testArray7, testArray8, testArray9];
  inputArray.forEach(element => {
    if (element.length !== 9) {
      outputArray.push(false);
    } else {
      outputArray.push(true);
    };
  });
  return outputArray;
};


Puzzle.prototype.numberChecker = function()  {
  const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const sampleArray = [2, 3, 7, 8, 2, 5, 6, 9, 1];

  for (let i = 0; i < numberArray.length; i++) {
    if (sampleArray.includes(numberArray[i])) {
      
    }
  }

  return numberOfVowels;
};



