/*Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.*/



//My Solution

function sumOfMinimum(arr) {
  let minimumValues = []
  for (let i = 0; i < arr.length; i++) {
    let minimumValue = arr[i].reduce((x, y) => x > y ? y : x)
    minimumValues.push(minimumValue)
  }
  return minimumValues.reduce((x, y) => x + y)
}