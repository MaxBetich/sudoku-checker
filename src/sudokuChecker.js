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
  let outputArray = [];

  inputArray.forEach(element => {
    let individualArray = [];
    for (let i = 0; i < numberArray.length; i++) {
      if (element.includes(numberArray[i])) {
        individualArray.push(true);
      } else {
        individualArray.push(false);
      };
    };
    if (individualArray.includes(false)) {
      outputArray.push(false);
    } else {
      outputArray.push(true);
    };
  })
  return outputArray;
};

Puzzle.prototype.verticalGenerator = function() {
  const testArray1 = this.array1;
  const testArray2 = this.array2;
  const testArray3 = this.array3;
  const testArray4 = this.array4;
  const testArray5 = this.array5;
  const testArray6 = this.array6;
  const testArray7 = this.array7;
  const testArray8 = this.array8;
  const testArray9 = this.array9;
  const horizontalArrays = [testArray1, testArray2, testArray3, testArray4, testArray5, testArray6, testArray7, testArray8, testArray9];
  
  let testArrayA = [];
  horizontalArrays.forEach(element => {
    testArrayA.push(element[0]);
  });
  this.arrayA = testArrayA;
  
  let testArrayB = [];
  horizontalArrays.forEach(element => {
    testArrayB.push(element[1]);
  });
  this.arrayB = testArrayB;
    
  let testArrayC = [];
  horizontalArrays.forEach(element => {
    testArrayC.push(element[2]);
  });
  this.arrayC = testArrayC;
  
  let testArrayD = [];
  horizontalArrays.forEach(element => {
    testArrayD.push(element[3]);
  });
  this.arrayD = testArrayD;
    
  let testArrayE = [];
  horizontalArrays.forEach(element => {
    testArrayE.push(element[4]);
  });
  this.arrayE = testArrayE;
  
  let testArrayF = [];
  horizontalArrays.forEach(element => {
    testArrayF.push(element[5]);
  });
  this.arrayF = testArrayF;
    
  let testArrayG = [];
  horizontalArrays.forEach(element => {
    testArrayG.push(element[6]);
  });
  this.arrayG = testArrayG;
    
  let testArrayH = [];
  horizontalArrays.forEach(element => {
    testArrayH.push(element[7]);
  });
  this.arrayH = testArrayH;
  
  let testArrayI = [];
  horizontalArrays.forEach(element => {
    testArrayI.push(element[8]);
  });
  this.arrayI = testArrayI;
}

Puzzle.prototype.squareGenerator = function() {
  const testArray1 = this.array1;
  const testArray2 = this.array2;
  const testArray3 = this.array3;
  const testArray4 = this.array4;
  const testArray5 = this.array5;
  const testArray6 = this.array6;
  const testArray7 = this.array7;
  const testArray8 = this.array8;
  const testArray9 = this.array9;
  const horizontalArrays1 = [testArray1, testArray2, testArray3];
  const horizontalArrays2 = [testArray4, testArray5, testArray6];
  const horizontalArrays3 = [testArray7, testArray8, testArray9];
  
  let testSquare1 = [];
  horizontalArrays1.forEach(element => {
    testSquare1.push(element[0]);
    testSquare1.push(element[1]);
    testSquare1.push(element[2]);
  });
  this.square1 = testSquare1;
  console.log(testSquare1);
  let testSquare2 = [];
  horizontalArrays1.forEach(element => {
    testSquare2.push(element[3]);
    testSquare2.push(element[4]);
    testSquare2.push(element[5]);
  });
  this.square2 = testSquare2;

  let testSquare3 = [];
  horizontalArrays1.forEach(element => {
    testSquare3.push(element[6]);
    testSquare3.push(element[7]);
    testSquare3.push(element[8]);
  });
  this.square3 = testSquare3;

  let testSquare4 = [];
  horizontalArrays2.forEach(element => {
    testSquare4.push(element[0]);
    testSquare4.push(element[1]);
    testSquare4.push(element[2]);
  });
  this.square4 = testSquare4;

  let testSquare5 = [];
  horizontalArrays2.forEach(element => {
    testSquare5.push(element[3]);
    testSquare5.push(element[4]);
    testSquare5.push(element[5]);
  });
  this.square5 = testSquare5;
  
  let testSquare6 = [];
  horizontalArrays2.forEach(element => {
    testSquare6.push(element[6]);
    testSquare6.push(element[7]);
    testSquare6.push(element[8]);
  });
  this.square6 = testSquare6;
  
  let testSquare7 = [];
  horizontalArrays3.forEach(element => {
    testSquare7.push(element[0]);
    testSquare7.push(element[1]);
    testSquare7.push(element[2]);
  });
  this.square7 = testSquare7;

  let testSquare8 = [];
  horizontalArrays3.forEach(element => {
    testSquare8.push(element[3]);
    testSquare8.push(element[4]);
    testSquare8.push(element[5]);
  });
  this.square8 = testSquare8;

  let testSquare9 = [];
  horizontalArrays3.forEach(element => {
    testSquare9.push(element[6]);
    testSquare9.push(element[7]);
    testSquare9.push(element[8]);
  });
  this.square9 = testSquare9;
};

// square1 = arrays1,2,3  [0,1,2]  
// square2 = arrays1,2,3  [3,4,5]  
// square3 = arrays1,2,3  [6,7,8]

// square4 = arrays4,5,6  [0,1,2]  
// square5 = arrays4,5,6  [3,4,5] 
// square6 = arrays4,5,6  [6,7,8]

// square7 = arrays7,8,9  [0,1,2] 
// square8 = arrays7,8,9  [3,4,5] 
// square9 = arrays7,8,9  [6,7,8]