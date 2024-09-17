const studentGrades = [78, 86, 92, 77, 50];

const answersPTag = document.getElementById("answers");

function printAnswer(answer) {
  answersPTag.innerHTML += `<br /> ${answer}`;
}

// ARRAY BASICS
// 1. array will print as a string seperated with commas by default
answersPTag.innerHTML += studentGrades;

//2. access specefic values in array using indexes
// studentGrades[0] indexes start at 0
printAnswer(studentGrades[1]);

//3. assign new values to array items in the same way that you would a variable declared as let
studentGrades[1] = 83;

//4. same as 3
printAnswer(studentGrades);

//5. always have a length even if it is 0
printAnswer(studentGrades.length);

//6. arrays have a forEach method that takes a function as the parameter, that function has access to the values  and indexes in the array
studentGrades.forEach(function (currentStudent, currentStudentIndex) {
  // loop here
  studentGrades[currentStudentIndex] += 1;
  printAnswer(studentGrades[currentStudentIndex]);
});

//7. same as 1
printAnswer(studentGrades);

//8. similar to 2
const indexLastStudent = studentGrades.length - 1;
printAnswer(studentGrades[indexLastStudent]);

//9.
let totalGrades = 0;
studentGrades.forEach(function (currentGrade) {
  totalGrades += currentGrade;
});

const averageGrade = totalGrades / studentGrades.length;
printAnswer(totalGrades / studentGrades.length);

//10.

printAnswer(averageGrade > 80);

//ARRAY MORE!!
//0.  create an array
const friends = [
  "elmo",
  "spongebob",
  "catdog",
  "danny phantom",
  "timmy turner",
];

//1. add items to array using cushion method (method & function are the same) push method pushes things to the end of array

function printFriends() {
  document.querySelector("#extraAnswers").innerHTML += `<br /> ${friends}`;
}
friends.push("jimmy neutron");
printFriends();

//2 remove the last item to an array using the pop method
friends.pop();
printFriends();

//3 remove the last item to an array using the splice method
friends.splice(0, 1);
printFriends();

//4 add item to front of array using the
friends.splice(0, 0, "invader");
printFriends();

//5 use splice
friends.splice(2, 1);
printFriends();

//6 splice
friends.splice(2, 0, "gir");
printFriends();

//7. splice
friends.splice(3, 0, ["pat", "squid"]);
printFriends();

// splice method takes 3 parameters
//1. what index starts at
//2. how many elements strating from index should be deleted
//3 what to add to the array, this could be just a value or  an array of values to add multiple

//START OBJECTS

const person = {
  firstName: "ty",
  lastName: "the pumpkin guy",
  age: 57,
  hometown: "naptown",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

//1 show full name
document.getElementById("fullName").innerHTML += person.getFullName();

// 2. change value
person.age += 1;
document.getElementById("newFProp").innerHTML += person.age;

//3 printing object variable use the json. stringify method
document.getElementById("newFProp").innerHTML += `<br /> ${JSON.stringify(
  person
)}`;

//4 remove properity from person using delete keyword

delete person.hometown;
document.getElementById("newFProp").innerHTML += `<br /> ${JSON.stringify(
  person
)}`;

//5 print a sentance using our object
console.log(`${person.getFullName()} is ${person.age} years old`);

//6

person.isASenior = function () {
  return this.age >= 65;
};

console.log(person.isASenior());

person.age += 10;
console.log(person.isASenior());

let keyProp = "age";
console.log(person[keyProp]);
