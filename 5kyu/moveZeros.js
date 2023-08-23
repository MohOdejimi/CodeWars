/*  DESCRIPTION:
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.  */


// My Solution 

function moveZeros(arr) {
  let result = [...arr.filter(char => char !== 0)]
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === 0) {
      result.push(0)
    }
  }
  return result
}