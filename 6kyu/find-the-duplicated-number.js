/* DESCRIPTION:
Spin-off of this kata, here you will have to figure out an efficient strategy to solve the problem of finding the sole duplicate number among an unsorted array/list of numbers starting from 1 up to n.

Hints: a solution in linear time can be found; using the most intuitive ones to search for duplicates that can run in O(n²) time won't work. */

// My Solution 

function findDup(array) {
  let n = array.length
  let setInterface = new Set()
  
  for(let i = 0; i < n; i++) {
    let num = array[i]
    if(setInterface.has(num)) {
      return num
    } else {
      setInterface.add(num)
    }
  }
}