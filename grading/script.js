function gradingStudents(grades) {
  // Write your code here

  return grades.map(check);

  function check(grade){
    if (grade < 38) return grade;

    const multiple = (Math.ceil(grade/5)*5);
    return ((multiple - grade) < 3) ? multiple : grade;
  };
};

console.log(gradingStudents([4, 73, 67, 38, 33]));