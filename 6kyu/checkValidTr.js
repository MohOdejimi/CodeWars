/*  DESCRIPTION:
Every Turkish citizen has an identity number whose validity can be checked by these set of rules:

It is an 11 digit number
First digit can't be zero
Take the sum of 1st, 3rd, 5th, 7th and 9th digit and multiply it by 7. Then subtract the sum of 2nd, 4th, 6th and 8th digits from this value. Modulus 10 of the result should be equal to 10th digit.
Sum of first ten digits' modulus 10 should be equal to eleventh digit.
Example:

10167994524
//  1+1+7+9+5= 23   // "Take the sum of 1st, 3rd, 5th, 7th and 9th digit..."
//    23 * 7= 161   //  "...and multiply it by 7"
//   0+6+9+4 = 19   // "Take the sum of 2nd, 4th, 6th and 8th digits..."
// 161 - 19 = 142   // "...and subtract from first value"
// "Modulus 10 of the result should be equal to 10th digit"
10167994524
         ^ = 2 = 142 % 10
// 1+0+1+6+7+9+9+4+5+2 = 44
// "Sum of first ten digits' modulus 10 should be equal to eleventh digit"
10167994524
          ^ = 4 = 44 % 10
Your task is to write a function to check the validity of a given number. Return true or false accordingly.

Note: The input can be a string in some cases */


function checkValidTrNumbers(n) {
  let arrayOfNums = String(n).split('')
  if (Number(arrayOfNums[0]) === 0) return false
  let sum1 = 0
  let sum2 = 0
  let tenthDig = Number(arrayOfNums[9])
  let eleventhDig = Number(arrayOfNums[10])

  for (let i = 0; i < arrayOfNums.length - 1; i++) {
    if ((i + 1) % 2 !== 0) {
      sum1 += Number(arrayOfNums[i])
    } else {
      sum2 += Number(arrayOfNums[i])
    }
  }
  let prod = sum1 * 7
  let diff = prod - (sum2 - tenthDig)
  let mod1 = diff % 10
  let total = sum1 + sum2
  let mod2 = total % 10

  return (mod1 === tenthDig && mod2 === eleventhDig)
}