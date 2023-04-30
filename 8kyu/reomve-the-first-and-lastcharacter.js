/*DESCRIPTION:


You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).*/

// My Solution

function array(string) {
  let arrayOfStr = (string.replaceAll(',', ' ')).split(' ')
  arrayOfStr.pop()
  arrayOfStr.shift()
  if ((arrayOfStr.length === 0)) {
    return null
  } else {
    return arrayOfStr.join(' ')
  }
}