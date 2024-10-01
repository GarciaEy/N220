// get element by id calls the id in the html. created 2 refernce variables

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

// create refernce for the output
const output = document.getElementById("output");

// function for adding the two numbers
// make sure function name matches the onclick (addNums)
function addNums() {
  const sum = parseFloat(num1.value) + parseFloat(num2.value);
  output.innerHTML = sum;
}

// function for multiplying the 2 numbers
// add parse float to convert from string to ana actual number around each num value
// innerHTML property sets or returns the HTML content (inner HTML) of an element.
function timesNums() {
  const product = parseFloat(num1.value) * parseFloat(num2.value);
  output.innerHTML = product;
}
