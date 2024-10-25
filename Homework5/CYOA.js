const storyElement = document.getElementById("story");
const choicesElement = document.getElementById("choices");

const storyData = {
  start: {
    text: "It’s Halloween night, and you receive an invitation to explore the abandoned Willow Creek Manor. As you arrive, you discover that the manor is rumored to be haunted by the spirit of Lady Eleanor, a former resident who vanished mysteriously. Choose where you enter:",
    choices: [
      { text: "Enter the Manor through the front door.", next: "frontDoor" },
      {
        text: "Sneak around the side to a broken window.",
        next: "brokenWindow",
      },
    ],
  },
  frontDoor: {
    text: "You enter the front door to find a vast foyer. A few portraits catch your eye; however, you hear a strange sound coming from upstairs. Do you investigate the sound upstairs or walk towards the portraits?",
    choices: [
      { text: "Investigate upstairs", next: "upstairs" },
      { text: "Walk towards the portraits", next: "portraits" },
    ],
  },
  upstairs: {
    text: "You head upstairs, the stairs creaking beneath your feet. You notice there's only a single room. You walk inside only to be met with Lady Eleanor’s ghost. She looks a bit down. Do you talk with her or flee?",
    choices: [
      { text: "Talk", next: "talk" },
      { text: "Flee", next: "flee" },
    ],
  },
  portraits: {
    text: "You continue to look around at the portraits on the wall. Something's off about them, but you can't quite place your finger on it. What do you do?",
    choices: [
      { text: "Touch the portrait", next: "touchPortrait" },
      { text: "Continue looking around", next: "lookAround" },
    ],
  },
  touchPortrait: {
    text: "You take a closer look at the painting and lightly touch its contents. One of the portraits comes to life. You've freed one of the trapped ghosts. He is grateful to you and reveals secrets about the manor.",
    choices: [],
  },
  lookAround: {
    text: "You trigger a trapdoor that leads to the basement filled with creepy artifacts.",
    choices: [],
  },
  talk: {
    text: "You ask her how she died. She's surprised that you're not afraid of her. She decides to trust you and helps you uncover the truth about her disappearance.",
    choices: [],
  },
  flee: {
    text: "You scream and flee out of the room. You run down the stairs, but the ancient stairs snap beneath you and you fall to your death.",
    choices: [],
  },
  brokenWindow: {
    text: "You crawl inside and explore the kitchen. A few things stand out to you: the ghostly old pantry and the illuminating garden behind the back door. Which one do you explore?",
    choices: [
      { text: "Investigate the pantry", next: "pantry" },
      { text: "Explore the garden", next: "garden" },
    ],
  },
  pantry: {
    text: "You check the old pantry for clues and notice an old book next to a strange jar. What do you investigate first?",
    choices: [
      { text: "The Book", next: "book" },
      { text: "The Jar", next: "jar" },
    ],
  },
  garden: {
    text: "You investigate the back door leading to the garden where you see a beautiful maze of crimson bushes and an illuminating grave. You hear rustling within the bushes. Do you investigate the bush or explore the grave?",
    choices: [
      { text: "Investigate the bush", next: "bush" },
      { text: "Explore the grave", next: "grave" },
    ],
  },
  book: {
    text: "You pick up the book and read the words 'property of Eleanor Violet'. You discover a diary that reveals the history of the manor and its tragic events.",
    choices: [],
  },
  jar: {
    text: "You accidentally knock over the jar's hazardous ingredients, releasing a cloud of poison that suffocates you.",
    choices: [],
  },
  bush: {
    text: "You walk into the bushes where you discover a ghost. It's the ghost of Lady Eleanor! She guides you out of the garden to safety.",
    choices: [],
  },
  grave: {
    text: "You take a closer look at the beautiful grave when the ground crumbles beneath you. You fall into a pit of spikes where you are impaled to death.",
    choices: [],
  },
};

function startGame() {
  showStory("start");
}

function showStory(storyKey) {
  const story = storyData[storyKey];
  storyElement.textContent = story.text;
  choicesElement.innerHTML = "";

  if (story.choices.length === 0) {
    choicesElement.innerHTML = "The End."; //if no more chioces show ending text
  } else {
    for (let i = 0; i < story.choices.length; i++) {
      createButton(story.choices[i].text, story.choices[i].next);
    }
  }
}

function createButton(text, nextStory) {
  const button = document.createElement("button");
  button.textContent = text;
  button.onclick = function () {
    showStory(nextStory);
  };
  choicesElement.appendChild(button);
}

startGame();
