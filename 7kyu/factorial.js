/*DESCRIPTION:
Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial*/

// My Solution

function factorial(n) {
  //your code here
  let result = 1
  for (let i = 1; i <= n; i++) {
    result *= i
  }
  return result
}