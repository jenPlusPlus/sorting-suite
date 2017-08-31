

function insertionSort(numArray) {

  for(let i = 0; i<numArray.length; i++) {
    for(let j = i-1; j>=0; j--) {
      if(numArray[j+1] <= numArray[j]) {
        [numArray[j+1], numArray[j]] = [numArray[j], numArray[j+1]];
      }
    }
  }
  return numArray;
}

module.exports = insertionSort;
