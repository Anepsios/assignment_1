$(document).ready(function(){
  var courses=[];
  var trainers=[];
  var students=[];
  var assignments=[];

  var course = {
    title: "Placeholder",
    stream: "Placeholder",
    type: "Placeholder",
    startDate: "Placeholder",
    endDate: "Placeholder"
  };

  var trainer = {
    firstName: "Placeholder",
    lastName: "Placeholder",
    subject: "Placeholder,"
  };

  var student = {
    firstName: "Placeholder",
    lastName: "Placeholder",
    dateOfBirth: "Placeholder",
    tuitionFee: "Placeholder"
  };

  var assignment = {
    title: "Placeholder",
    description: "Placeholder",
    submission: "Placeholder",
    oralMark: "Placeholder",
    totalMark: "Placeholder"
  };

  courses.push(course);
  trainers.push(trainer);
  students.push(student);
  assignments.push(assignment);

  for(let i=1;i<courses.length;i++){
  }

  document.getElementById("pp").innerHTML = course.endDate;
});