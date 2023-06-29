/* A zero-indexed array arr consisting of n integers is given. The dominator of array arr is the value that occurs in more than half of the elements of arr.
For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr. The function should return −1 if array does not have a dominator. All values in arr will be >=0. */

// My Solitiom 

function dominator(arr) {
  let half_length = arr.length / 2
  let filters = []
  for(let i = 0; i < arr.length; i++) {
    if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
      let filter = arr.filter(num => num === arr[i])
      filters.push(filter)
    }
  }
  let dominator = filters.find(array => array.length > half_length)
  return (dominator) ? dominator[0] : -1 
}
