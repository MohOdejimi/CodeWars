/*. DESCRIPTION:
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  "" 
  */

// My Solution

function breakCamelCase(string) {
  let stringLength = string.length; 
  if(stringLength === 0) return string 
  
  let result = ""
  for(let i = 0; i < stringLength; i++) {
    let currentChar = string[i] 
    if(currentChar.toUpperCase() === currentChar) {
      result += ` ${currentChar}`
    } else {
      result += currentChar
    }
  }
  return result
}
