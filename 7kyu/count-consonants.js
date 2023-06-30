/* DESCRIPTION:
Complete the function that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u. */

//My Solution

function consonants(str) {
  let alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let array = str.toLowerCase().split('')
  array = array.filter(item => (alphabets.includes(item)))
  if(array.every(letter => !(vowels.includes(letter)))) return array.length
  if(array.some(letter => vowels.includes(letter))) {
    let consonants = array.filter(letter => !(vowels.includes(letter)))
    return consonants.length
  }
} 