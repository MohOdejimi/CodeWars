/* DESCRIPTION:
Check that the two provided arrays both contain the same number of different unique items, regardless of order. For example in the following:

[a,a,a,a,b,b] and [c,c,c,d,c,d]
Both arrays have four of one item and two of another, so balance should return true. */

// My Solution

function balance(arr1, arr2) {
  let arr1Hash = new Map()
  let arr2Hash = new Map() 
  let arr1Size = arr1.length; 
  let arr2Size = arr2.length; 
  
  if(arr1Size > arr2Size || arr2Size > arr1Size) return false
  
  for(let i = 0; i < arr1Size; i++) {
    let currentChar = arr1[i] 
    if(arr1Hash.has(currentChar)) {
      let count = arr1Hash.get(currentChar) 
      arr1Hash.set(currentChar, count + 1)
    } else {
      arr1Hash.set(currentChar, 1)
    }
  }
  
  for (let i = 0; i < arr2Size; i++) {
    let currentChar = arr2[i]
    if (arr2Hash.has(currentChar)) {
      let count = arr2Hash.get(currentChar)
      arr2Hash.set(currentChar, count + 1)
    } else {
      arr2Hash.set(currentChar, 1)
    }
  }
  let arr1Count = [...arr1Hash.values()].sort((a,b) => a - b)
  let arr2Count = [...arr2Hash.values()].sort((a,b) => a - b) 
  
  for(let j = 0; j < arr1Count.length; j++) {
    if(arr1Count[j] !== arr2Count[j]) return false
  }
  return true
}
