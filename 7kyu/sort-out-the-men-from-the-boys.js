/*. Task
Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys!alt!alt
Notes
Return an array/list where Even numbers come first then odds

Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .

Array/list size is at least 4 .

Array/list numbers could be a mixture of positives , negatives .

Have no fear , It is guaranteed that no Zeroes will exists .!alt
Repetition of numbers in the array/list could occur , So (duplications are not included when separating).

*/

// My Solution

function menFromBoys(arr){
  const evenNums = arr.filter(num => num % 2 === 0)
  for(let i = 1; i < evenNums.length; i++) {
    let j = i - 1
    let currentValue = evenNums[i]
    while(j >= 0 && evenNums[j] > currentValue ) {
      evenNums[j + 1] = evenNums[j]
      j--
    }
    evenNums[j + 1] = currentValue
  }
  const oddNums = arr.filter(num => num % 2 !== 0)
  .sort((a,b) => b - a)
  const uniqueEvenNums = new Set(evenNums)
  const uniqueOddNums = new Set(oddNums)
  return [...uniqueEvenNums,...uniqueOddNums]
}