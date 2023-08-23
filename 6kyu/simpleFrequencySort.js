/*.  DESCRIPTION:
  In this kata, you will sort elements in an array by decreasing frequency of elements.If two elements have the same frequency, sort them by increasing value.

solve([2, 3, 5, 3, 7, 9, 5, 3, 7]) = [3, 3, 3, 5, 5, 7, 7, 2, 9]
  --We sort by highest frequency to lowest frequency.
  --If two elements have same frequency, we sort by increasing value.
More examples in test cases.

Good luck!  */

// My Solution 

function solve(nums) {
  let numbers = new Map()
  let n = nums.length 
  
  for(let i = 0; i < n; i++) {
    let currentNum = nums[i] 
    if(numbers.has(currentNum)) {
      let freq = numbers.get(currentNum) 
      numbers.set(currentNum, freq + 1)
    } else {
      numbers.set(currentNum, 1)
    }
  }
  
  const entries = Array.from(numbers)
  const sorted = entries.sort((a,b) => {
    if(a[1] > b[1]) return -1
    if(b[1] > a[1]) {
      return 1
    } else{
      if(a[0] > b[0]) return 1 
      if(b[0] > a[0]) return -1 
      return 0
    }
  })
  let result = []
  
  for(let i = 0; i < sorted.length; i++){
    let currentArray = sorted[i] 
    let freq = sorted[i][1] 
    let number = sorted[i][0]
    let j = 1
    while(j <= freq) {
      result.push(number)
      j++
    }
  }
  return result
}