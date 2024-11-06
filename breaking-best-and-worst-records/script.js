/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scoresNotTrated) {
  // Write your code here

  const scores = scoresNotTrated.split(' ').map(Number)

  let highestScore = scores[0];
  let lowestScore = scores[0];
  let highestCount = 0;
  let lowestCount = 0;

  scores.forEach(score => {
    if (score > highestScore){
      highestScore = score;
      ++highestCount;
    };
    if (score < lowestScore){
      lowestScore = score;
      ++lowestCount;
    };
  });

  return [`${highestCount} ${lowestCount}`];
}

console.log(breakingRecords(`10 5 20 20 4 5 2 25 1`))