

function bubbleSort(numArray) {
  for(let i = 0; i < numArray.length; i++){
    for(let j = 0; j < numArray.length; j++){
      if(numArray[j] >= numArray[j+1]){
        [numArray[j], numArray[j+1]] = [numArray[j+1], numArray[j]]
      }
    }
  }
  return numArray;
}

module.exports = bubbleSort;
