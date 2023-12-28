/* Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?". */ 

// My Solution 

package kata 

import "fmt" 

func Greet(name string) string {
  return fmt.Sprintf("Hello, %v how are you doing today?", name)
}