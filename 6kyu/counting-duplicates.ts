/*  
DESCRIPTION:
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/


// My Solution 

export function duplicateCount(text: string): number{
  let text_array = text.split('')
  for(let i = 0; i < text_array.length; i++) {
    if(typeof text_array[i] === 'string') {
      text_array[i] = text_array[i].toLowerCase()
    }
  }
  let count:(number | string)[] = []
  let i = 0;
  while(i < text_array.length) {
    const firstIndex = text_array.indexOf(text_array[i])
    const lastIndex = text_array.lastIndexOf(text_array[i])
    if((firstIndex !== lastIndex) && !(count.includes(text_array[i]))) {
      count.push(text_array[i])
    }
    i++
  }
  return count.length
}