/*DESCRIPTION:
Please write a function that sums a list, but ignores any duplicate items in the list.

For instance, for the list [3, 4, 3, 6] , the function should return 10.*_)*/

//My Solution

function sumNoDuplicates(numList) {
  let result = 0
  for (let i = 0; i < numList.length; i++) {
    if (numList.indexOf(numList[i]) === numList.lastIndexOf(numList[i])) {
      result += numList[i]
    } else {
      result += 0
    }
  }
  return result
}