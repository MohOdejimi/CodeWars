/*DESCRIPTION:
Dot Calculator
You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

Here are the following valid operators :

+ Addition
- Subtraction
* Multiplication
// Integer Division
Your Work (Task)
You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.

Examples (Input => Output)
* "..... + ..............." => "...................."
* "..... - ..."             => ".."
* "..... - ."               => "...."
* "..... * ..."             => "..............."
* "..... * .."              => ".........."
* "..... // .."             => ".."
* "..... // ."              => "....."
* ". // .."                 => ""
* ".. - .."                 => ""
*/

// My Solution

function dotCalculator(equation) {
  let arrOfEquation = equation.split(' ')
  let operand1 = Number(arrOfEquation[0].length)
  let operand2 = Number(arrOfEquation[2].length)
  let operator = arrOfEquation[1]
  let result;
  if (operator === '+') {
    result = operand1 + operand2
  } else if (operator === '-') {
    result = operand1 - operand2
  } else if (operator === '*') {
    result = operand1 * operand2
  } else if (operator === '//') {
    result = Math.floor(operand1 / operand2)
  }
  let array = new Array(result)
  return (array.fill('.')).join('')
}