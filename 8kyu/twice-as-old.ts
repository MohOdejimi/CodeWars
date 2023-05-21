/* DESCRIPTION:
Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future. */


// My Solution 

export function twiceAsOld(dadYearsOld: number, sonYearsOld: number): number {
  for (let i: number = 0; i <= dadYearsOld; i++) {
    if ((dadYearsOld - i === 2 * sonYearsOld) || (dadYearsOld + i === 2 * sonYearsOld)) {
      return i
    }
  }
  return 0
}