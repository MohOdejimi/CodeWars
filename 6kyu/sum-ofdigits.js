/*DESCRIPTION:
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.*/


// My Solution

function toWeirdCase(string) {
  let arrayOfStr = string.split(' ')
  let firstWeirdCase = arrayOfStr.map(value => [...value].map((element, index) => index % 2 === 0 ? element.toUpperCase() : element.toLowerCase()).join``).join ` `
  return firstWeirdCase
}
console.log(toWeirdCase('weird is a boy'))