/*DESCRIPTION:
This kata is all about adding numbers.

You will create a function named add. It will return the sum of all the arguments. Sounds easy, doesn't it?

Well Here's the Twist. The inputs will gradually decrease with their index as parameter to the function.

  add(3,4,6); 
  /*
  returns ( 3 / 1 ) + ( 4 / 2 ) + ( 6 / 3 ) = 7
  
Remember the function will return 0 if no arguments are passed and it must round the result if sum is a float.

Example

  add(); //=> 0
  add(1,2,3); //=> 3
  add(1,4,-6,20); //=> 6*/

// My Solution

function add(...nums) {
  let array = []
  if (nums.length === 0) {
    return 0
  } else {
    for (let i = 0; i < nums.length; i++) {
      array.push(nums[i] / (i + 1))
    }
  }
  return Math.round(array.reduce((x, y) => x + y))
}