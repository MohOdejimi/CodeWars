/*. DESCRIPTION:
Implement the function longest(array,n) where you will be given an array of strings and then return the nth longest string in that array. For example         arr = ['Hello','World','Codewars','Katas']  with n = 3  should return 'World' because 'Codewars' length = 8 , 'Hello' length = 5, so that is the 2nd longest word and then 'World' (although also word length of 5, 'World' is after 'Hello' in the array). When words have the same lengths, treat them in the order in which they exist in the array. Array will never be empty and n > 0 always. */


// My Solution 

function longest(arr, n) {
  let sorted = arr.slice().sort((a, b) => {
    if (a.length < b.length) return 1
    if (a.length > b.length) return -1
    return arr.indexOf(a) - arr.indexOf(b)
  })
  return sorted[n - 1]
}