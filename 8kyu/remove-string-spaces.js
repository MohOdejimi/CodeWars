/* DESCRIPTION:
Write a function that removes the spaces from the string, then return the resultant string*/

// My Solution

function noSpace(x) {
  // Loop through each individual item and check for whitespaces
  for (let i = 0; i < x.length; i++) {
    if (x[i] === ' ') {
      //replace each whitespace with empty literal
      return x.replaceAll(x[i], "")
    }
  }
  return x
}