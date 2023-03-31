/*Given a mixed array of number and string representations of integers, add up the non - string integers and subtract the total of the string integers.

Return as a number.*/

//My Solution

function divCon(x) {
  let sumTotal = 0;
  let Difference = 0;
  for (let num of x) {
    if (typeof num === 'number') sumTotal += num
    if (typeof num === 'string') Difference += Number(num);
  }
  return (sumTotal - Difference)
}