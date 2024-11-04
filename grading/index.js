function gradingStudents(grades) {
  // Write your code here
  console.log(grades)

  const newGrades = grades.map(check)

  function check(element){
    const multiple = (Math.ceil(element/5)*5)
    console.log(element, multiple)

    if (element < 38) return element
    if ((multiple - element) < 3) return multiple
    return element
  }

  return newGrades
}

gradingStudents([4, 73, 67, 38, 33])