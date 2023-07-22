/*. DESCRIPTION:
In this kata you will be given an array of the dimensions of rectangles (array with width and length) and circles (radius - just a number). Your task is to sort the objects by their area in ascending order and return the sorted array of areas. Round the values of the areas to a maximum of two decimal places. */

// My Solution

function sortByArea(array){
  const sorted = []
  for(let i = 0; i < array.length; i++) {
    if(typeof array[i] === 'number') {
      sorted[i] = +(Math.PI * Math.pow(array[i], 2)).toFixed(2)
     } else {
       sorted[i] = +((array[i][0] * array[i][1])).toFixed(2)
     }
  }
  return sorted.sort((a,b) => a - b)
}