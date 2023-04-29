/* DESCRIPTION:
In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string, then the function should return -1. If the letter occurs only once in the string, then -1 should also be returned.

Examples:

secondSymbol('Hello world!!!','l')  --> 3
secondSymbol('Hello world!!!', 'A') --> -1
*/
// My Solution

function secondSymbol(s, symbol) {
  // your code
  if ((!(s.includes(symbol))) || (s.indexOf(symbol) === s.lastIndexOf(symbol))) return -1;
  let firstSymbol = s.indexOf(symbol)
  let start = firstSymbol + 1
  for (let i = start; i < s.length; i++) {
    if (s[i] === symbol) {
      return i;
      break;
    }
  }
}