/*DESCRIPTION:
A triangle is called an equable triangle if its area equals its perimeter. Return true, if it is an equable triangle, else return false. You will be provided with the length of sides of the triangle. Happy Coding!*/


// My Solution

function equableTriangle(a, b, c) {
  let s = (a + b + c) / 2
  return ((a + b + c) === (Math.sqrt(s * (s - a) * (s - b) * (s - c)))) ? true : false
}