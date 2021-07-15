let testArray = [4, 8, 5, 7, 1, 6, 10, 2, 3, 9]

function partition(testArray, left, right) {
  let pivot = testArray[Math.floor((left + right )/ 2)]
  i = left;
  j = right;
  while(i <= j) {
    while(testArray[i] < pivot) {
      i++;
    }
    while(testArray[j] > pivot) {
      j--;
    }
    if(i<=j) {
      var temp = testArray[i]
      testArray[i] = testArray[j]
      testArray[j] = temp
      i++;
      j--;
    }
  }
  return i; 
}

function quickSort(testArray, left, right) {
  var index= 0;
  if(testArray.length > 1) {
    index= partition(testArray, left, right)
    console.log("index", index)

    if(left < index - 1) {
      quickSort(testArray, left, index - 1)
    }

    if(right > index) {
      quickSort(testArray, index, right)
    }
  }
  return testArray;
}

var sortedArray = quickSort(testArray, 0, testArray.length - 1);
console.log(sortedArray);

