import { assert } from 'chai';
import { expect } from 'chai';
import { mergeSort, combineArrays } from '../scripts/mergesort.js'
import randomArrayLength from '../randomNumGenNoRepeat.js'
import genRandomLettersArray from '../randomLetterGen.js'
import getRandomIntInclusive from '../randomNegNumGen.js'

describe('mergesort', () => {
  var randomArray = [];

  it('Should be a function', () => {
    assert.isFunction(mergeSort);
  })

  it('Should sort an array containing one positive number', () => {
    randomArray = randomArrayLength(1);
    let sortedArray = mergeSort(randomArray);
    for(let i = 0; i<sortedArray.length; i++){
      expect(sortedArray[i]<sortedArray[i+1], true);
    }
  })

  it('Should sort an array containing two positive numbers (no repeats)', () => {
    randomArray = randomArrayLength(2);
    let sortedArray = mergeSort(randomArray);
    for(let i = 0; i<sortedArray.length; i++){
      expect(sortedArray[i]<sortedArray[i+1], true);
    }
  })

  it('Should sort an array containing a few positive numbers (no repeats)', () => {
    randomArray = randomArrayLength(50);
    let sortedArray = mergeSort(randomArray);
    for(let i = 0; i<sortedArray.length; i++){
      expect(sortedArray[i]<sortedArray[i+1], true);
    }
  })

  it('Should sort an array containing many positive numbers (no repeats)', () => {
    randomArray = randomArrayLength(5000);
    let sortedArray = mergeSort(randomArray);
    for(let i = 0; i<sortedArray.length; i++){
      expect(sortedArray[i]<sortedArray[i+1], true);
    }
  })

  it('Should sort an array containing two positive numbers (with repeats)', () => {
    for(let i=0; i<2; i++){
      randomArray.push(getRandomIntInclusive(1,1));
    }
    let sortedArray = mergeSort(randomArray);
    for(let i = 0; i<sortedArray.length; i++){
      expect(sortedArray[i]<sortedArray[i+1], true);
    }
  })

  it('Should sort an array containing a few positive numbers (with repeats)', () => {
    for(let i=0; i<50; i++){
      randomArray.push(getRandomIntInclusive(1,25));
    }
    let sortedArray = mergeSort(randomArray);
    for(let i = 0; i<sortedArray.length; i++){
      expect(sortedArray[i]<sortedArray[i+1], true);
    }
  })

  it('Should sort an array containing many positive numbers (with repeats)', () => {
    for(let i=0; i<5000; i++){
      randomArray.push(getRandomIntInclusive(1,100));
    }
    let sortedArray = mergeSort(randomArray);
    for(let i = 0; i<sortedArray.length; i++){
      expect(sortedArray[i]<sortedArray[i+1], true);
    }
  })

  it('Should sort an array containing one negative number', () => {
    for(let i=0; i<2; i++){
      randomArray.push(getRandomIntInclusive(-1,-1));
    }
    let sortedArray = mergeSort(randomArray);
    for(let i = 0; i<sortedArray.length; i++){
      expect(sortedArray[i]<sortedArray[i+1], true);
    }
  })

  it('Should sort an array containing two positive numbers (no repeats)', () => {
    randomArray = randomArrayLength(-2);
    let sortedArray = mergeSort(randomArray);
    for(let i = 0; i<sortedArray.length; i++){
      expect(sortedArray[i]<sortedArray[i+1], true);
    }
  })

  it('Should sort an array containing a few positive numbers (no repeats)', () => {
    randomArray = randomArrayLength(-50);
    let sortedArray = mergeSort(randomArray);
    for(let i = 0; i<sortedArray.length; i++){
      expect(sortedArray[i]<sortedArray[i+1], true);
    }
  })

  it('Should sort an array containing many positive numbers (no repeats)', () => {
    randomArray = randomArrayLength(-5000);
    let sortedArray = mergeSort(randomArray);
    for(let i = 0; i<sortedArray.length; i++){
      expect(sortedArray[i]<sortedArray[i+1], true);
    }
  })

  it('Should sort an array containing two positive numbers (with repeats)', () => {
    for(let i=0; i<2; i++){
      randomArray.push(getRandomIntInclusive(-1,-1));
    }
    let sortedArray = mergeSort(randomArray);
    for(let i = 0; i<sortedArray.length; i++){
      expect(sortedArray[i]<sortedArray[i+1], true);
    }
  })

  it('Should sort an array containing a few positive numbers (with repeats)', () => {
    for(let i=0; i<50; i++){
      randomArray.push(getRandomIntInclusive(-25,-1));
    }
    let sortedArray = mergeSort(randomArray);
    for(let i = 0; i<sortedArray.length; i++){
      expect(sortedArray[i]<sortedArray[i+1], true);
    }
  })

  it('Should sort an array containing many positive numbers (with repeats)', () => {
    for(let i=0; i<5000; i++){
      randomArray.push(getRandomIntInclusive(-100,-1));
    }
    let sortedArray = mergeSort(randomArray);
    for(let i = 0; i<sortedArray.length; i++){
      expect(sortedArray[i]<sortedArray[i+1], true);
    }
  })



  it('Should sort an array containing two numbers (pos & neg)', () => {
    for(let i=0; i<2; i++){
      randomArray.push(getRandomIntInclusive(-1,1));
    }
    let sortedArray = mergeSort(randomArray);
    for(let i = 0; i<sortedArray.length; i++){
      expect(sortedArray[i]<sortedArray[i+1], true);
    }
  })

  it('Should sort an array containing a few numbers (pos & neg)', () => {
    for(let i=0; i<50; i++){
      randomArray.push(getRandomIntInclusive(-25,25));
    }
    let sortedArray = mergeSort(randomArray);
    for(let i = 0; i<sortedArray.length; i++){
      expect(sortedArray[i]<sortedArray[i+1], true);
    }
  })

  it('Should sort an array containing many numbers (pos & neg)', () => {
    for(let i=0; i<2500; i++){
      randomArray.push(getRandomIntInclusive(-1000,1000));
    }
    let sortedArray = mergeSort(randomArray);
    for(let i = 0; i<sortedArray.length; i++){
      expect(sortedArray[i]<sortedArray[i+1], true);
    }
  })

  it('Should sort an array containing one letter', () => {
    randomArray = genRandomLettersArray(1);
    let sortedArray = mergeSort(randomArray);
    for(let i = 0; i<sortedArray.length; i++){
      expect(sortedArray[i]<sortedArray[i+1], true);
    }
  })

  it('Should sort an array containing two letters', () => {
    randomArray = genRandomLettersArray(2);
    let sortedArray = mergeSort(randomArray);
    for(let i = 0; i<sortedArray.length; i++){
      expect(sortedArray[i]<sortedArray[i+1], true);
    }
  })

  it('Should sort an array containing a few letters', () => {
    randomArray = genRandomLettersArray(50);
    let sortedArray = mergeSort(randomArray);
    for(let i = 0; i<sortedArray.length; i++){
      expect(sortedArray[i]<sortedArray[i+1], true);
    }
  })

  it('Should sort an array containing many letters', () => {
    randomArray = genRandomLettersArray(5000);
    let sortedArray = mergeSort(randomArray);
    for(let i = 0; i<sortedArray.length; i++){
      expect(sortedArray[i]<sortedArray[i+1], true);
    }
  })

})
