/* DESCRIPTION:
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false */


// My Solution 

export function solution(str: string, ending: string): boolean {
  let endLength = ending.length 
  let str_array = str.split('')
  let extract = []
  while (extract.length !== endLength) {
    extract.push(str_array.pop())
  }
  let character = extract.reverse().join('')
  return (character === ending)
}