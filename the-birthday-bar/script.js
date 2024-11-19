/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {
  // Write your code here

  const check = s.reduce((acc, currentValue, currentIndex) => {
    const newArr = s.slice(currentIndex, m + currentIndex)
    if (newArr.reduce((a, b) => a + b, 0) === d){
      return acc + 1
    } return acc
  }, 0);

  return check
}

console.log(birthday([2, 2, 1, 3, 2], 4, 2))