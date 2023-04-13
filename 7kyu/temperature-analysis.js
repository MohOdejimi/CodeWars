/* DESCRIPTION:
You were given a string of integer temperature values. Create a function lowest_temp(t) and return the lowest value or None/null/Nothing if the string is empty.*/


// My Solution 

function lowestTemp(t) {
  //lowest temperature
  if (t.length === 0) return null
  if (t.length !== 0) {
    let arrayOfT = t.split(' ')
    return Math.min(...arrayOfT)
  }
}