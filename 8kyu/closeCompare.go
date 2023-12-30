/* Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b.

Please note the following:

When a is close to b, return 0.
For this challenge, a is considered "close to" b if margin is greater than or equal to the absolute distance between a and b.
Otherwise...

When a is less than b, return -1.

When a is greater than b, return 1.

If margin is not given, treat it as if it were zero. */

// My Solution  

package kata 

import "math"

func close_compare(a ,b, margin float64) int {
  condition := margin >= float64(math.Abs(b - a)) 
  
  if condition {
    return 0
  } else if a > b {
    return 1 
  } else if b > a {
    return -1
  }
  
  return 0
}