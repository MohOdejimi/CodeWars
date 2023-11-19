/*. DESCRIPTION:
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3 */

// My Solution

function highestRank(nums) {
  let numFrequencies = new Map()
  let n = nums.length;

  for (let j = 0; j < n; j++) {
    let currentNum = nums[j]
    if (numFrequencies.has(currentNum)) {
      let freq = numFrequencies.get(currentNum)
      numFrequencies.set(currentNum, freq + 1)
    } else {
      numFrequencies.set(currentNum, 1)
    }
  }
  let uniqueNums = [...new Set(nums).values()]
  let highest = Math.max(...Array.from(numFrequencies.values()))
  let ranks = []
  for (let i = 0; i < uniqueNums.length; i++) {
    let currentNum = uniqueNums[i]
    if (numFrequencies.get(currentNum) === highest) {
      ranks.push(currentNum)
    }
  }
  return Math.max(...ranks)
}