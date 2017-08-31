function mergeSort(numArray) {
  var splitArray1 = [];
  var splitArray2 = [];
  var mid = Math.floor(numArray.length/2);
  if (numArray.length < 2) {
    return numArray;
  } else {
    splitArray1 = numArray.slice(0, Math.floor(numArray.length/2));
    splitArray2 = numArray.slice(Math.floor(numArray.length/2), numArray.length);
  }

  return combineArrays(mergeSort(splitArray1), mergeSort(splitArray2));
}


function combineArrays(arr1, arr2) {
  let combinedArray = [];

   while(arr1.length && arr2.length){
    if(arr1[0] <= arr2[0]) {
      combinedArray.push(arr1.shift());
    } else {
      combinedArray.push(arr2.shift());
    }
  }
  while (arr1.length){
    combinedArray.push(arr1.shift());
  }
  while (arr2.length){
    combinedArray.push(arr2.shift());
  }
  return combinedArray;
}

module.exports = { mergeSort, combineArrays }
