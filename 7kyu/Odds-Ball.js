/*  DESCRIPTION:
You are given an array with several "even" words, one "odd" word, and some numbers mixed in.

Determine if any of the numbers in the array is the index of the "odd" word. If so, return true, otherwise false. */

// My Solution

function oddBall(arr) {
  let setInterface = new Set() 
  let n = arr.length 
  let result = false
  
  for(let j = 0; j < n; j++) {
    let current = arr[j]
    if (typeof current === 'number') {
      setInterface.add(current)
    }
  }
  
  for(let i = 0; i < n; i++) {
    let current = arr[i]
    if(current === 'odd') {
      if(setInterface.has(i)) {
        result = true
    }
   }
  }
  return result
}
