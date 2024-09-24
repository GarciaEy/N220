// const codingChallenge = {
//   courseNum: "N" + 220,
//   courseTitle: "Introduction to Media Application Development,",
//   totalSeats: 20 + ",",
//   enrolled: 18 + ",",
//   availibility: function () {
//     return this.totalSeats - this.enrolled > 0;
//   },
// };

// getresults() {
//     return `${this.courseNum} ${this.courseTitle} ${this.totalSeats} ${this.enrolled} ${this.availibility}`;
//   };
// document.getElementById("results").innerHTML += codingChallenge.getresults();

const codingChallenge = {
  courseNum: "N" + 220,
  courseTitle: "Introduction to Media Application Development,",
  totalSeats: 20,
  enrolled: 18,
  getAvailibility: function () {
    return this.totalSeats > this.enrolled;
  },
};

console.log(`N220 Open: ${codingChallenge.getAvailibility()}`);

codingChallenge.enrolled += 2;

console.log(`total students ${codingChallenge.enrolled}`);

// console.log(`N220 Open: ${codingChallenge.getAvailibility}`);

function IUPUIWebsite() {
  console.log(`innerWidth: ${window.innerWidth}`);
  console.log(`outerWidth: ${window.outerWidth}`);

  console.log(window.location);
}

function printPage() {
  window.print();
}

document.getElementById("dpDetails").innerHTML += codingChallenge.courseTitle;

document.querySelector("#domain").innerHTML += "HI";

const updatePTag = document.getElementById("#update");

console.log(updatePTag.querySelector("#delete"));

console.log(string(100).length, 100);
console.log(string(100).includes("2"), 100);
console.log("100".replace("0", "2"), 100);
console.log("100".replaceAll("0", "2"), 100);
