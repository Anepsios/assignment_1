// object initialisation and example items. 
// these will be filled by a database in future versions

var courses = [];
var trainers = [];
var students = [];
var assignments = [];

var course = {
  title: "Example",
  stream: "Coding",
  type: "Course",
  startDate: "10/10/2020",
  endDate: "10/1/2021"
};

var trainer = {
  firstName: "Test",
  lastName: "Teacher",
  subject: "Coding,"
};

var student = {
  firstName: "Test",
  lastName: "Student",
  dateOfBirth: "1/1/2000",
  tuitionFee: "2500"
};

var assignment = {
  title: "TestProject1",
  description: "a test coding project to see what's up",
  submissionDate: "1/12/2020",
  oralMark: "20",
  totalMark: "80"
};

courses.push(course);
trainers.push(trainer);
students.push(student);
assignments.push(assignment);





// add our objects to our html pages
// possible to merge all functions into one with parameters? How to check internally which object we're using?

function AddToCourseList() {
  // add to table
  let tbody = document.getElementById("CourseList");
  for (let i = 0; i < courses.length; i++) {
    let tr = tbody.insertRow();
    var title = tr.insertCell(0);
    var stream = tr.insertCell(1);
    var type = tr.insertCell(2);
    var startDate = tr.insertCell(3);
    var endDate = tr.insertCell(4);

    title.innerHTML = courses[i].title;
    stream.innerHTML = courses[i].stream;
    type.innerHTML = courses[i].type;
    startDate.innerHTML = courses[i].startDate;
    endDate.innerHTML = courses[i].endDate;

    // add to edit selet list
    let form = document.getElementById("UpdateCourse");
    let option = document.createElement("option");
    option.text = courses[i].title + " " + courses[i].stream + " " + courses[i].type;
    form.add(option);
  }
}

function AddToTrainerList() {
  // add to table
  let tbody = document.getElementById("TrainerList");
  for (let i = 0; i < trainers.length; i++) {
    let tr = tbody.insertRow();
    var firstName = tr.insertCell(0);
    var lastName = tr.insertCell(1);
    var subject = tr.insertCell(2);

    firstName.innerHTML = trainers[i].firstName;
    lastName.innerHTML = trainers[i].lastName;
    subject.innerHTML = trainers[i].subject;

    // add to edit selet list
    let form = document.getElementById("UpdateTrainer");
    let option = document.createElement("option");
    option.text = trainers[i].firstName + " " + trainers[i].lastName;
    form.add(option);
  }
}

function AddToStudentList() {
  // add to table
  let tbody = document.getElementById("StudentList");
  for (let i = 0; i < students.length; i++) {
    let tr = tbody.insertRow();
    var firstName = tr.insertCell(0);
    var lastName = tr.insertCell(1);
    var dateOfBirth = tr.insertCell(2);
    var tuitionFee = tr.insertCell(3);

    firstName.innerHTML = students[i].firstName;
    lastName.innerHTML = students[i].lastName;
    dateOfBirth.innerHTML = students[i].dateOfBirth;
    tuitionFee.innerHTML = students[i].tuitionFee;

    // add to edit selet list
    let form = document.getElementById("UpdateStudent");
    let option = document.createElement("option");
    option.text = students[i].firstName + " " + students[i].lastName;
    form.add(option);
  }
}

function AddToAssignmentList() {
  // add to table
  let tbody = document.getElementById("AssignmentList");
  for (let i = 0; i < assignments.length; i++) {
    let tr = tbody.insertRow();
    var title = tr.insertCell(0);
    var description = tr.insertCell(1);
    var submissionDate = tr.insertCell(2);
    var oralMark = tr.insertCell(3);
    var totalMark = tr.insertCell(4);

    title.innerHTML = assignments[i].title;
    description.innerHTML = assignments[i].description;
    submissionDate.innerHTML = assignments[i].submissionDate;
    oralMark.innerHTML = assignments[i].oralMark;
    totalMark.innerHTML = assignments[i].totalMark;

    // add to edit selet list
    let form = document.getElementById("UpdateAssignment");
    let option = document.createElement("option");
    option.text = assignments[i].title;
    form.add(option);
  }
}


function AddToPerCourse() {
  for (let i = 0; i < courses.length; i++) {
    let form = document.getElementById("InputCourse");
    let option = document.createElement("option");
    option.text = courses[i].title + " " + courses[i].stream + " " + courses[i].type;
    form.add(option);
  }
}

function AddToPerStudent() {
  for (let i = 0; i < students.length; i++) {
    let form = document.getElementById("InputStudent");
    let option = document.createElement("option");
    option.text = students[i].firstName + " " + students[i].lastName;
    form.add(option);
  }
}