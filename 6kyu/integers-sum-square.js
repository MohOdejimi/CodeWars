/*DESCRIPTION:
  Given positive integers n and m, find all integers less than m whose the square of the sum of thier digits is equal to n.If you haven 't such integers return No result.

m = 5, n = 4 - > [2]
m = 50, n = 15 - > 'No result'
m = 156, n = 16 - > [4, 13, 22, 31, 40, 103, 112, 121, 130]
m = 297, n = 25 - > [5, 14, 23, 32, 41, 50, 104, 113, 122, 131, 140, 203, 212, 221, 230]*/


// My Solution

const intSumSq = (m, n) => {
  let intOfM = []
  let checker = []
  for (let i = 1; i < m; i++) {
    intOfM.push(i)
  }
  let stringOfInts = intOfM.join().split(',')
  for (let k = 0; k < stringOfInts.length; k++) {
    let sum = 0
    for (let m = 0; m < (stringOfInts[k]).length; m++) {
      sum += Number((stringOfInts[k][m]))
    }
    if ((Math.pow(sum, 2)) === n) {
      checker.push(Number(stringOfInts[k]))
    }
  }
  if (checker.length === 0) {
    return 'No result'
  } else {
    return checker
  }
}