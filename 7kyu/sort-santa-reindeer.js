/*.DESCRIPTION:
Happy Holidays fellow Code Warriors!
Now, Dasher! Now, Dancer! Now, Prancer, and Vixen! On, Comet! On, Cupid! On, Donder and Blitzen! That's the order Santa wanted his reindeer...right? What do you mean he wants them in order by their last names!? Looks like we need your help Code Warrior!

Sort Santa's Reindeer
Write a function that accepts a sequence of Reindeer names, and returns a sequence with the Reindeer names sorted by their last names.

Notes:
It's guaranteed that each string is composed of two words
In case of two identical last names, keep the original order
Examples
For this input:

[
  "Dasher Tonoyan", 
  "Dancer Moore", 
  "Prancer Chua", 
  "Vixen Hall", 
  "Comet Karavani",        
  "Cupid Foroutan", 
  "Donder Jonker", 
  "Blitzen Claus"
]
You should return this output:

[
  "Prancer Chua",
  "Blitzen Claus",
  "Cupid Foroutan", 
  "Vixen Hall", 
  "Donder Jonker", 
  "Comet Karavani",
  "Dancer Moore", 
  "Dasher Tonoyan",
]. */

// My Solution

function sortReindeer(names) {
  const name = names.map(name => name.split(' '))
    for(let i = 1; i < name.length; i++) {
      let j = i - 1
      let currentName = name[i]
      while(j >= 0 && name[j][1] > currentName[1]) {
        name[j + 1] = name[j]
        j--
      }
      name[j + 1] = currentName
    }
    return name.map(last => last.join(' '))
}