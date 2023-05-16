/* DESCRIPTION:
Given a text, for example:

const inputText = "Michael, how are you? - Cool, how is John Williamns and Michael Jordan? I don't know but Michael Johnson is fine. Michael do you still score points with LeBron James, Michael Green AKA Star and Michael Wood?";

get an array of last names of people named Michael. The result should be:
["Jordan", "Johnson", "Green", "Wood"]

Notes:

First name will always be Michael with upper case 'M'.
There will always be a space character between 'Michael' and last name.
Last name will always be one word, starting with an upper-case letter and continuing with lower-case letters.
There will always be at least one 'Micheal' with a valid last name in the input text.
*/



// My Solution

function getMichaelLastName(inputText) {
  // your awesome code here
  let arrayOfInputText = inputText.split(' ')
  let lastName = []
  let output = []
  for (let i = 0; i < arrayOfInputText.length; i++) {
    if (arrayOfInputText[i] === 'Michael') {
      let firstLetter = arrayOfInputText[i + 1][0]
      if (firstLetter === firstLetter.toUpperCase()) {
        lastName.push(arrayOfInputText[i + 1])
      }
    }
  }
  for (let i = 0; i < lastName.length; i++) {
    output.push(lastName[i].replace(/[^a-z0-9]/gi, ''))
  }
  return output
}