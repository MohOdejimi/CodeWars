/*Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!*/

//My Solution 

function getSum(a, b) {
  let res = 0;
  if (a > b) {
    for (let i = a; i >= b; i--) {
      res += i
    }
  } else if (a < b) {
    for (let i = a; i <= b; i++) {
      res += i
    }
  } else if (a == b) {
    return a
  }
  return res
}