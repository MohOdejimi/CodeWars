/*Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.*/

// My Solution 

function removeSmallest(numbers) {
  let nums = Array.from(numbers)
  if (nums.length === 0) return nums
  let smallestNumber = (nums.reduce((x, y) => x > y ? y : x))
  let indexOfSmallestNumber = nums.findIndex(x => x === smallestNumber)
  nums.splice(indexOfSmallestNumber, 1)
  return nums
}