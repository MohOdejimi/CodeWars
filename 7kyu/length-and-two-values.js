/* DESCRIPTION:
  Given an integer n and two other values, build an array of size n filled with these two values alternating.

Examples
5, true, false-- > [true, false, true, false, true]
10, "blue", "red"-- > ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
0, "one", "two"-- > []
Good luck!

*/


// My Solution

function alternate(n, firstValue, secondValue) {
  // your code
  let result = []
  result.length = n
  for (let i = 0; i < result.length; i++) {
    if (i % 2 === 0) result[i] = firstValue
    if (i % 2 !== 0) result[i] = secondValue
  }
  return result
}