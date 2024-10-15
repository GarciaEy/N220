//reference variables

const friendNameInput = document.getElementById("friendName");
const friendsListRef = document.getElementById("friendsList");

//variables to track friends (are not in the html-name whatever)
const myFriends = [];

//function for adding friend
function addFriend() {
  //get the name the user typed in
  const nameValue = friendNameInput.value;

  //add friend to myFriends list
  myFriends.push(nameValue);

  showFriends();

  //add name to friends list
  friendsListRef.innerHTML += `<li>
  ${nameValue} <button onClick="removeFriend('${nameValue}')">X</button></button>
  </li>`;

  //clear the name the user types
  friendNameInput.value = "";
}

function removeFriend(friendName) {
  //   console.log(friendName);
  //use variable to track index of friend to remove
  let friendIndex;

  //loop through current friends to find the friendName

  for (let i = 0; i < myFriends.length; i++) {
    if (myFriends[i] === friendName) {
      friendIndex = i;
    }
  }

  //remove the person from the list
  myFriends.splice(friendIndex, 1);
  showFriends();
}

//function to loop through myFriends and show em on the page

function showFriends() {
  //Clear any friends currently on the page
  friendsListRef.innerHTML = "";

  //loop through friends

  myFriends.forEach(function (friendName) {
    //add the name to the friends list
    friendsListRef.innerHTML += `<li>
  	${friendName} 
	<button onClick="removeFriend('${friendName}')">X</button> 
	<button onClick="moveFriend('${friendName}', true)">	&#8593;</button>
	<button onClick="moveFriend('${friendName}', false)>	&#8595;</button>
  </li>`;
  });
}

//function to clear list of friends

function clearList() {
  myFriends.splice(0, myFriends.length);

  showFriends();
}

//function to move friends ranking

function moveFriend(friendName, isMovingUp) {
  let friendIndex;
  let friendNewIndex;
  for (let i = 0; i < myFriends.length; i++) {
    if (myFriends[i] === friendName) {
      friendIndex = i;
      //['A', 'B', 'C'] move 'B' up 1 space
      //index of 'B' is originally 1
      //this is what the result should be
      //['B', 'A', 'C']so the new index would be 0

      if (isMovingUp) {
        friendIndex = friendNewIndex - 1;
      }

      //['A', 'B', 'C'] move 'B' down 1 space
      //index of 'B' is originally 1
      //this is what the result should be
      //['A', 'C', 'B']so the new index would be 2
      else {
        friendNewIndex = friendIndex + 1;
      }
    }
  }

  myFriends.splice(friendIndex, 1);
  myFriends.splice(friendNewIndex, 0, friendName);

  showFriends();
}
