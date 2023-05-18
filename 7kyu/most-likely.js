/*Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

*/

// My Solution 
function mostLikely(prob1, prob2) {
  // your code
  let value1 = prob1.split(':')
  let value2 = prob2.split(':')
  return ((value1.reduce((a, b) => Number(b) / Number(a))) < (value2.reduce((a, b) => Number(b) / Number(a))))
}