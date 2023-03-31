/*In your class, you have started lessons about arithmetic progression. Since you are also a programmer, you have decided to write a function that will return the first n elements of the sequence with the given common difference d and first element a. Note that the difference may be zero!

The result should be a string of numbers, separated by comma and space.*/

//My Solution

function arithmeticSequenceElements(a, d, n) {
  let res = []
  for (let i = 1; i <= n; i++) {
    res.push(a + ((i - 1) * d))
  }
  return res.join(', ')
}