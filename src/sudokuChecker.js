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
  const testArray = this.array1;
  if (testArray.length !== 9) {
    outputArray.push(false);
  } else {
    outputArray.push(true);
  };
  return outputArray;
};