/* DESCRIPTION:
Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:
"MM"      -> 2000
"MDCLXVI" -> 1666
"M"       -> 1000
"CD"      ->  400
"XC"      ->   90
"XL"      ->   40
"I"       ->    1
Help:
Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000 */


// My Solution 

function solution (s) {
   let sLength = s.length;
  let romanHash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let converted = new Set()

  let int = 0
  for (let i = 0; i < sLength; i++) {
    let char = s[i]
    if (romanHash[char] < romanHash[s[i + 1]]) {
      int += romanHash[s[i + 1]] - romanHash[char]
      converted.add(i)
      converted.add(i + 1)
    }
    if (!converted.has(i)) {
      int += romanHash[char]
    }
  }
  return int
}