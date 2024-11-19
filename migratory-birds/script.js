/**
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 *
 * @format
 */

function migratoryBirds(arr) {
  // Write your code here
  const count = {};
  arr.forEach((bird) => {
    count[bird] = (count[bird] || 0) + 1;
  });

  let maxValue = null;
  let mostFreq = 0;

  for (const bird in count) {
    if (Object.prototype.hasOwnProperty.call(count, bird)) {
      if (count[bird] > maxValue) {
        maxValue = count[bird];
        mostFreq = parseInt(bird);
      }
    }
  }

  console.log(mostFreq)
}
migratoryBirds([1, 2, 4, 3, 4, 5, 4, 3, 2, 1, 3]);
