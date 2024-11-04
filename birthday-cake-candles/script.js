function birthdayCakeCandles(candles) {
  const max = Math.max(...candles)

  const count = candles.reduce((acc, curr) => {
    if (curr === max)
      return acc + 1
    
    return acc
  }, 0);

  console.log(count);
}

birthdayCakeCandles([4, 4, 1, 3])