const theBoxRef = document.getElementById("theBox");
const boxForm = document.getElementById("boxForm");

theBoxRef.style.border = "4px solid lavender";
theBoxRef.style.minHeight = "300px";
theBoxRef.style.display = "grid";
theBoxRef.style.gridTemplateColumns = "1fr 1fr 1fr";

function addToBox() {
  const newThing = prompt("Thing to Add:");

  const newDiv = document.createElement("div");
  newDiv.style.height = "100px";
  newDiv.style.width = "100px";
  newDiv.style.backgroundColor = "cornflowerblue";
  newDiv.style.margin = "5px";
  newDiv.classList.add("box");
  newDiv.innerHTML = newThing;
  newDiv.dataset.text = newThing;

  theBoxRef.appendChild(newDiv);

  const allBoxes = document.querySelectorAll("div");
  for (let i = 0; i < allBoxes.length; i++) {
    const box = allBoxes[i];
    box.onclick = clickBox;
  }
  //   console.log(allBoxes);
}

function clickBox(e) {
  //   console.log(e.currentTarget);
  if (e.currentTarget.style.backgroundColor === "lightGreen") {
    e.currentTarget.style.backgroundColor = "cornflowerBlue";
  } else {
    e.currentTarget.style.backgroundColor = "lightGreen";
  }

  boxForm.style.display = "block";
  document.getElementById("boxText").value = e.currentTarget.dataset.text;
  document.getElementById("changeBox").onclick = changeText.bind(
    e.currentTarget
  );

  console.log(e.currentTarget.dataset.text);
}

function toggleTheBoxHidden() {
  if (theBoxRef.style.display !== "none") {
    theBoxRef.style.display = "none";
  } else {
    theBoxRef.style.display = "grid";
  }
}

function changeText() {
  this.innerHTML = document.getElementById("boxText").value;
  boxFormRef.style.display = "none";
  x;
}
