/*DESCRIPTION:
You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:

var list1 = [
  { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];
write a function that when executed as findOddNames(list1) returns only the developers where if you add the ASCII representation of all characters in their first names, the result will be an odd number */


// Ny Solution 

function findOddNames(list1) {
  function getAsciiSum(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
      sum += charCode;
    }
    return sum;
  }
  let arrayOfNames = list1.map(value => value.firstName)
  let sumOfAscii = []
  let output = []
  for (let i = 0; i < arrayOfNames.length; i++) {
    sumOfAscii.push(getAsciiSum(arrayOfNames[i]))
  }
  for (let k = 0; k < sumOfAscii.length; k++) {
    if (sumOfAscii[k] % 2 !== 0) {
      output.push(list1[k])
    }
  }
  return output
}