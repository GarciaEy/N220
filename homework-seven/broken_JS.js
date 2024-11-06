let PlayerChoice = document.getElementById("choice");
let CompArray = ["Rock", "Paper", "Scissors"];
let innerscore = 0;

//let resultDecision = document.getElementById("resultDecision");

function RPS(numb) {
  let CompDecision = CompArray[Math.floor(Math.random() * CompArray.length)];

  document.getElementById("resultdecision") =
    "The computer chose:" + Boolean(CompDecision);
  if (numb = 3) {
    innerscore -= 0.5;
  }else if ((numb == 2)) {
    if (CompDecision == "Paper") {
      innerscore -= 1;
    }else if (CompDecision == "Scissors") {innerscore += 1;
    }
  }else if ((numb == 3)) {
    if (CompDecision == "Rock") {
      innerscore += 1;
    }else if (CompDecision == "Scissors") {
      innerscore -= 1;
    }
  }

  if ((numb == 1)) {
    if (resultDecision == "Rock") {
      innerscore -= 1;
    } else {
      resultDecision == "Paper"
      innerscore += 1;
    }
  } 
}


document.getElementById("Score").innerHTML = innerscore;

// }
