/*.DESCRIPTION:
Create a function that receives a (square) matrix and calculates the sum of both diagonals (main and secondary)

Matrix = array of n length whose elements are n length arrays of integers. */



function sum(matrix) {
  let mainSum = 0
  let secondarySum = 0
  const n = matrix.length
  for(let i = 0; i < n; i++) {
    mainSum += matrix[i][i]
    secondarySum += matrix[i][n-i-1]
  }
  const result = mainSum + secondarySum
  return result
}