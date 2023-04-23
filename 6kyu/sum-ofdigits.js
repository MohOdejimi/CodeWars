/*DESCRIPTION:
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.*/


// My Solution

function digitalRoot(n) {
  let strOfNum = String(n)
  let arrOfNum = strOfNum.split('')
  let sumOfN = arrOfNum.reduce((x, y) => Number(x) + Number(y), 0)
  let newNum;
  if (sumOfN >= 10) {
    for (let i = sumOfN; i >= 10; i = newNum) {
      newNum = (((String(i)).split('')).reduce((x, y) => Number(x) + Number(y), 0))
    }
    return newNum
  } else {
    return sumOfN
  }
}
