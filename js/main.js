"use strict";

const xilofon = document.querySelector(".xilofon");
const notes = [
  "G",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
];
const keyBoard = [
  "a",
  "s",
  "d",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "j",
  "k",
  "l",
];

//Notes audios:
const notesArray = {
  0: new Audio("../media/0.mp3"),
  1: new Audio("../media/1.mp3"),
  2: new Audio("../media/2.mp3"),
  3: new Audio("../media/3.mp3"),
  4: new Audio("../media/4.mp3"),
  5: new Audio("../media/5.mp3"),
  6: new Audio("../media/6.mp3"),
  7: new Audio("../media/7.mp3"),
  8: new Audio("../media/8.mp3"),
  9: new Audio("../media/9.mp3"),
  10: new Audio("../media/10.mp3"),
  11: new Audio("../media/11.mp3"),
  12: new Audio("../media/12.mp3"),
  13: new Audio("../media/13.mp3"),
  14: new Audio("../media/14.mp3"),
};

let mallet = document.querySelector(".mallet");

const button = document.querySelector(".switch");
let useKeyboard = false;

const createBoard = () => {
  xilofon.innerHTML = "";
  for (let i = 1; i <= 15; i++) {
    const xilofonKey = document.createElement("div");
    const text = document.createTextNode(notes[i - 1]);
    const textTwo = document.createTextNode(" (key " + keyBoard[i - 1] + ")");
    if (useKeyboard) {
      xilofonKey.append(text);
      xilofonKey.append(textTwo);
    } else {
      xilofonKey.append(text);
    }
    xilofonKey.classList.add("xilofonKeys");
    xilofonKey.classList.add(`xilofonKey${i}`);
    xilofonKey.id = i - 1;
    xilofon.appendChild(xilofonKey);
  }
};

createBoard();

const playMusic = (event) => {
  const id = event.target.id;
  notesArray[id].play();
};

xilofon.addEventListener("click", playMusic);

const changeUseKeyboard = () => {
  let newState = !useKeyboard;
  useKeyboard = newState;
  if (useKeyboard) {
    button.innerHTML = "Use mallets";
    mallet.classList.add("hidden");
  } else {
    button.innerHTML = "Use keyboard";
    mallet.classList.remove("hidden");
  }
  createBoard();
};

button.addEventListener("click", changeUseKeyboard);

const onMouseMove = (e) => {
  mallet.style.left = e.pageX - 20 + "px";
  mallet.style.top = e.pageY + "px";
};
document.addEventListener("mousemove", onMouseMove);

const onKeyPress = (ev) => {
  const pressedKey = ev.key;
  if (keyBoard.indexOf(pressedKey) !== -1 && useKeyboard) {
    const index = keyBoard.indexOf(pressedKey);
    notesArray[index].play();
  }
};

document.addEventListener("keydown", onKeyPress);
