const currentList = [];

// function addStu() {
//   const currentStu = classroom.students.length;
//   if (currentStu == classroom.maxStudents) {
//     console.log("no seats availible");
//   } else {
//     classroom.students.push(document.getElementById("studentName").value);
//     classroom.showStudents();
//   }
// }

// ("<li>" + item + "</li>" or `<li>${item}</li>`)

// ("Total Items: "); ("<br />");

function addItem() {
  const itemI = document.getElementById("item");
  const itemT = itemI.value.trim();

  if (itemT) {
    currentList.push(itemT);
    itemI.value = "";

    const listE = document.getElementById("list");
    listE.innerHTML = currentList
      .map((item) => "<li>" + item + "</li>")
      .join("");
  }
}

function summarizeList() {
  const summarizeE = document.getElementById("summary");

  const totalI = currentList.length;
  const firstI = totalI > 0 ? currentList[0] : "";
  const lastI = totalI > 0 ? currentList[totalI - 1] : "";

  summarizeE.innerHTML = `
  total items: ${totalI}<br /> 
  first items: ${firstI}<br /> 
  last items: ${lastI}<br /> 
 
  `;
}
