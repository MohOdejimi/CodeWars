/* DESCRIPTION:
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1" */

// My Solution 
export function position(alphabet:string):string {
  const position = alphabet.charCodeAt(0) - 96
  return `Position of alphabet: ${position}`
}