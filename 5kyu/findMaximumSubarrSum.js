/* DESCRIPTION:
Take a look to the kata Maximum Subarray Sum https://www.codewars.com/kata/maximum-subarray-sum In that kata (if you solved it), you had to give the maximum value of the elements of all the subarrays.

In this kata, we have a similar task but you have to find the sub-array or sub-arrays having this maximum value for their corresponding sums of elements. Let's see some examples:

[-2, 1, -3, 4, -1, 2, 1, -5, 4] returns [[4, -1, 2, 1], 6]
If in the solution we have two or more arrays having the maximum sum value, the result will have an array of arrays in the corresponding order of the array, from left to right.

[4, -1, 2, 1, -40, 1, 2, -1, 4]) returns [[[4, -1, 2, 1], [1, 2, -1, 4]], 6]  # From left to right [4, -1, 2, 1] appears in the array before than [1, 2, -1, 4].
If the array does not have any sub-array with a positive sum of its terms, the function will return [[], 0].

See more cases in the Example Test Cases Window. Enjoy it!

Thanks to smile67 (Matthias Metzger from Germany for his important observations in the javascript version */

// My Solution 

function findSubarrMaxSum(arr) {
  const subarrays = []
  const sums = []
  const n = arr.length
  let max = Number.NEGATIVE_INFINITY
  if(arr.every(num => num < 0)) return [[],0]
  
  for(let i = 0; i < n; i++) {
    const subarr = []
    for(let j = i; j < n; j++) {
      subarr.push(arr[j])
      let extract = subarr.slice()
      let sum = extract.reduce((a,b) => a + b,0)
      if(sum >= max) {
        max = sum 
        subarrays.push(extract)
        sums.push(sum)
      }
    }
  }
  let maxSum = Math.max(...sums)
  let indexOfMaxSum = sums.indexOf(maxSum)
  let maximumSubarray = subarrays.slice(indexOfMaxSum)
  return(maximumSubarray.length === 1) ? [...maximumSubarray, maxSum] : [maximumSubarray, maxSum]
}