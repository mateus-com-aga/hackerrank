/** @format */

function timeConversion(s) {
  // const timeArray = [...s]
  // const partTime = timeArray.splice(-2).toString()

  // const first2Dig = Number((timeArray[0])+(timeArray[1]))

  // if (partTime === 'P,M' && first2Dig < 12){
  //   const newH = [...String(first2Dig + 12), ...timeArray.splice(2)]
  //   console.log(newH.toString().replaceAll(',',''))
  //   return
  // }
  // if (partTime === 'A,M' && first2Dig >= 12){
  //   const newH = [0, ...String(first2Dig - 12), ...timeArray.splice(2)]
  //   console.log(newH.toString().replaceAll(',',''))
  //   return
  // }
  // const newH = (timeArray)
  // console.log(newH.toString().replaceAll(',', ''))

  const period = s.slice(-2);
  let hour = parseInt(s.slice(0, 2));

  if (period === "PM" && hour !== 12) {
    hour += 12;
  } else if (period === "AM" && hour === 12) {
    hour = 0;
  }

  console.log(`${hour.toString().padStart(2, "0")}${s.slice(2, 8)}`);
}

timeConversion("12:45:54PM");
timeConversion("12:45:54AM");
