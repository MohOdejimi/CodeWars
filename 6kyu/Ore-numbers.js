/* 
DESCRIPTION:
Ore Numbers (also called Harmonic Divisor Numbers) are numbers for which the harmonic mean of all their divisors (including the number itself) equals an integer.

For example, 6 is an Ore Number because its harmonic mean is exactly 2:

H(6) = 4 / (1/1 + 1/2 + 1/3 + 1/6) = 2
Your task is to complete the function returns true if the given number is an Ore Number and false otherwise.

You can assume all inputs will be valid positive integers.

Hint: The harmonic mean is the total number of divisors divided by the sum of their reciprocals.
*/ 

// My Solution 

function isOre(n) {
  let multiples = []
  let i = 1
  while (i <= n) {
    if (n % i === 0) {
      multiples.push(1 / i)
    }
    i++
  }
  let harmonicDivisor = multiples.length / multiples.reduce((a, b) => a + b)
  harmonicDivisor = Number(harmonicDivisor.toFixed(11).replace(/\.?0+$/, ''));
  return (Number.isInteger(harmonicDivisor))
}