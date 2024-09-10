function simpleFunctionOne() {
  // code here

  document.getElementById("changeTxt").innerHTML =
    "dont change this paragraph.";
}

simpleFunctionOne();

function simpleFunctionTwo() {
  document.querySelector("body").innerHTML +=
    "This function does not take parameters";
}

simpleFunctionTwo();

function sayhelloworld() {
  console.log("Hello World!");
}

sayhelloworld();

//started using parameters

function sayfavoriteband(bandName) {
  document.getElementById("favBand").innerHTML += bandName + "<br/>";
}

sayfavoriteband("Deftones");
sayfavoriteband("System of a Down");

function saymyname(myName) {
  console.log(myName);
}

saymyname("Say my name");
saymyname("Say my name");
saymyname("When no one is around you");

//functions that do calulations

function calcrecper(height, width) {
  const perimeter = 2 * height + 2 * width;
  //   2 * (height + width) is another way of writing that
  document.querySelector("#panswer").innerHTML += perimeter;
  //   document.getElementById("#panswer").innerHTML += perimeter;
}

calcrecper(2, 4);

function calcArea() {
  const height = document.getElementById("height").value;
  const width = document.getElementById("width").value;

  console.log("height", height);
  console.log("width", width);
  document.querySelector("#answer").innerHTML +=
    "Area " + height * width + "<br/>";
}

function calcrecareaandperi(height, width) {
  const perimeter = 2 * (height + width);
  const area = height * width;

  document.getElementById("multiAnswer").innerHTML += `
  
  Height: ${height} <br />
  Width: ${width} <br />
  perimeter: ${perimeter} <br />
  Area: ${area} <br /> <br />
  
  `;

  //you can use = instead of : above ^
}

calcrecareaandperi(5, 4);
calcrecareaandperi(2, 6);

function myFunction() {
  alert("who goes there?");
}

function wizard(name, occupation) {
  //   confirm("Welcome " + name + ", the" + occupation + " !");
  confirm(`welcome ${name}, the ${occupation}!`);
  document.getElementById(
    "future"
  ).innerHTML += `welcome ${name}, the ${occupation}!`;
}

function addItem() {
  const newItem = prompt("Add Item");
  console.log(newItem);
}

function returnValue(color) {
  return color;
}

alert(returnValue("green"));

function calccircarea(radius) {
  return 2 * Math.PI * radius;
}

document.getElementById("useOne").innerHTML += calccircarea(2);

document.getElementById("useTwo").innerHTML += calccircarea(4);
