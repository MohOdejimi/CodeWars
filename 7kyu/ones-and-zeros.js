/*Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.*/





// My Solution

function binaryArrayToNumber(arr) {
  let arrOfNum = arr.join('');
  return parseInt(arrOfNum, 2)

}