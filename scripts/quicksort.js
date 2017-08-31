function quickSort(numArray) {
  let pivot = numArray[0];
  let lessThan = [];
  let greaterThan = [];

  if(numArray.length < 2) {
    return numArray;
  }

  for(let i=1; i<numArray.length; i++) {
    if(numArray[i] <= pivot) {
      lessThan.push(numArray[i]);
    }
    else {
      greaterThan.push(numArray[i]);
    }
  }
  return quickSort(lessThan).concat(pivot).concat(quickSort(greaterThan));
}

module.exports = quickSort;
