const studentName = document.getElementById("studentName");

const students = document.getElementById("students");

const classroom = {
  students: ["sally", "james"],
  className: "N220",
  showStudents() {
    (document.getElementById("students").innerHTML = ""),
      this.students.forEach(function (studentName) {
        document.getElementById("students").innerHTML += studentName + "<br />";
      });
  },
  maxStudents: 2,
};

classroom.showStudents();

function addStu() {
  const currentStu = classroom.students.length;
  if (currentStu == classroom.maxStudents) {
    console.log("no seats availible");
  } else {
    classroom.students.push(document.getElementById("studentName").value);
    classroom.showStudents();
  }
}
