/* DESCRIPTION:
In input string word(1 word):

replace the vowel with the nearest left consonant.
replace the consonant with the nearest right vowel.
P.S. To complete this task imagine the alphabet is a circle (connect the first and last element of the array in the mind). For example, 'a' replace with 'z', 'y' with 'a', etc.(see below)

For example:

'codewars' => 'enedazuu'
'cat' => 'ezu'
'abcdtuvwxyz' => 'zeeeutaaaaa'
It is preloaded:

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
const vowels = ['a','e','i','o','u'];
P.S. You work with lowercase letters only. */

// My Solution 

function replaceLetters(word) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let result = '';

  for (let i = 0; i < word.length; i++) {
    if (consonants.includes(word[i])) {
      let currentIndex = alphabet.indexOf(word[i]);
      let newArray = alphabet.slice(currentIndex + 1);
      let replacedLetter = newArray.find((e) => vowels.includes(e));
      if (!replacedLetter) {
        replacedLetter = vowels[0];
      }
      result += replacedLetter;
    } else {
      let currentIndex = alphabet.indexOf(word[i])
      if (currentIndex === 0) {
        result += alphabet[alphabet.length - 1]
      } else {
        let newArray = alphabet.slice(0, currentIndex).reverse()
        let replacedLetter = newArray.find(e => consonants.includes(e))
        result += replacedLetter
      }
    }
  }
  return result;
}