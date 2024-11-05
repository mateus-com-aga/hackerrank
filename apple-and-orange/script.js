/**
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 *
 * @format
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  const applePositions = apples.map((fruit) => fruit + a);
  const orangePositions = oranges.map((fruit) => fruit + b);

  const orangesFiltered = orangePositions.filter((element) => {
    if (element >= s && element <= t) return element;
  });

  const applesFiltered = applePositions.filter((element) => {
    if (element >= s && element <= t) return element;
  });

  console.log(applesFiltered.length);
  console.log(orangesFiltered.length);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
