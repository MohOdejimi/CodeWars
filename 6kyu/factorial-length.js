/*  DESCRIPTION:
In this Kata, you will implement a function count that takes an integer and returns the number of digits in factorial(n).

For example, count(5) = 3, because 5! = 120, and 120 has 3 digits.*/

// My solution

function count(n) {
  let factorial = BigInt(n)
  for(let i = n - 1; i > 0; i--) {
    factorial *= BigInt(i)
  }
  return String(factorial)
  .split('')
  .length
}
