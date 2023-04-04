/*The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.*/


// My Solution

function duplicateEncode(word) {
  // Convert word to Lowercase
  let wordCase = word.toLowerCase()
  //Create a variable that will store the new stting
  let encoder = ""
  // Run a loop through the the Lowercase String
  for (let i = 0; i < wordCase.length; i++) {
    //Check for Characters that are not repeating
    if (wordCase.lastIndexOf(wordCase[i]) === wordCase.indexOf(wordCase[i])) {
      encoder += '('
    } else {
      encoder += ')'
    }
  }
  return encoder
}