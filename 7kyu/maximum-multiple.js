
/* DESCRIPTION:
Task
Given a Divisor and a Bound , Find the largest integer N , Such That ,

Conditions :
N is divisible by divisor

N is less than or equal to bound

N is greater than 0.

Notes
The parameters (divisor, bound) passed to the function are only positive values .
It's guaranteed that a divisor is Found . */


// My Solution 
function maxMultiple(divisor, bound) {
  //your code here
  let arrayOfMultiple = []
  for (let i = bound; i > 1; i--) {
    if (i % divisor === 0 && i <= bound && i > 0) {
      arrayOfMultiple.push(i)
    }
  }
  return Math.max(...arrayOfMultiple)
}