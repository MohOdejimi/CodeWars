/*You are given an initial 2-value array (x). You will use this to calculate a score.

If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.*/

// My Solution

function explode(x) {
     let score = 0
     let newArr = []
     if ((typeof x[0] == 'number') && (typeof x[1] == 'number')) {
       score = x[0] + x[1]
     } else if (typeof x[0] == 'number') {
       score = x[0]
     }
     else if (typeof x[1] == 'number') {
       score = x[1]
     }
     else if ((typeof x[0] != 'number') && typeof x[1] != 'number') {
       return 'Void!'
     }
     
     for(let i = 0; i<score; i++) {
       newArr.push(x)
       }
      return newArr;
 }   

 