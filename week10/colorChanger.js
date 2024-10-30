/**
 * @type {{ currentColor: string, lastColor: string }[]}
 * @description this is a list of colors that the user added
 */
const userColors = [];
/**
 * @description gets the colors from user input to add to the userColors list
 */
function addNewColorItem() {
  const newColorRef = document.getElementById("newColorItem");
  const newColorValue = newColorRef.value;

  userColors.push({ currentColor: newColorValue });
  newColorRef.value = "#000000";

  showUserColors();
}
/**
 * @description loops through userColors list and populates them on the page
 */
function showUserColors() {
  const colorSquares = document.getElementById("color-squares");
  colorSquares.innerHTML = "";

  for (let i = 0; i < userColors.length; i++) {
    const userColor = userColors[i];
    colorSquares.innerHTML += `
	<div style="height: 200px; width: 200px; background-color: ${userColor.currentColor}" onClick="openColorChanger(${i})">
	<input type="color"  
	id="user-color-${i}"
	name="user-color-${i}
	hidden
	value="${userColor.currentColor}"
	onChange="changeUserColor(${i})"
	
	/>
	</div>`;
  }
}

function changeUserColor(userColorIndex) {
  const userColorRef = document.getElementById(`user-color-${userColorIndex}`);

  const lastColor = userColorRef[userColorIndex].currentColor;
  const NewUserColor = {
    currentColor: userColorRef.value,
    lastColors: lastColor,
  };
  userColors.splice(userColorIndex, 1, NewUserColor);

  showUserColors();
}

function openColorChanger(userColorIndex) {
  document.getElementById(`user-color-${userColorIndex}`).click();
}
