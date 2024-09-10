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
