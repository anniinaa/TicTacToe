const boxes = Array.from(document.getElementsByClassName("box"));
const playText = document.getElementById("playText");
const restartButton = document.getElementById("restartButton");
let spaces = [];
let X_text = "X";
let O_text = "0";
let currentPlayer;

const drawBoard = () => {
  boxes.forEach((box, index) => {
    let styleString = "";

    if (index < 3) {
      styleString += "border-bottom: 5px solid black;";
    }
    if (index % 3 === 0) {
      styleString += "border-right: 5px solid black;";
    }
    if (index % 3 === 2) {
      styleString += "border-left: 5px solid black;";
    }
    if (index > 5) {
      styleString += "border-top: 5px solid black;";
    }

    box.style = styleString;
    box.addEventListener("click", boxClicked);
  });
};
const boxClicked = (e) => {
  const id = e.target.id;
  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;

    console.log("current", currentPlayer);
    console.log("e.target.style", e.target);
    if (e.target.innerText === "X") {
      e.target.style.color = "red";
    }
    if (e.target.innerText === "O") {
      e.target.style.color = "black";
    }
    if (playerHasWon()) {
      playText.innerText = `${currentPlayer} has won !`;
      if (window.confirm(currentPlayer + " has won!!")) {
      }
      return;
    }
    if (isCatsGame(spaces)) {
      alert("Cat's game!!");
    }

    currentPlayer = currentPlayer === X_text ? O_text : X_text;
  }
};
const playerHasWon = () => {
  if (spaces[0] === currentPlayer) {
    if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
      return true;
    }
    if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
      return true;
    }
    if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
      return true;
    }
  }
  if (spaces[8] === currentPlayer) {
    if (spaces[2] === currentPlayer && spaces[5] === currentPlayer) {
      return true;
    }
    if (spaces[6] === currentPlayer && spaces[7] === currentPlayer) {
      return true;
    }
  }
  if (spaces[4] === currentPlayer) {
    if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
      return true;
    }
    if (spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
      return true;
    }
    if (spaces[2] === currentPlayer && spaces[6] === currentPlayer) {
      return true;
    }
  }
  return false;
};

const isCatsGame = (arr) => {
  console.log("checkkk", arr);
  let number = 0;
  let boolean = false;

  arr.forEach((space, index) => {
    number++;
  });
  if (number === 9) {
    boolean = true;
  }
  console.log("boolean", boolean);
  return boolean;
};

const restart = () => {
  spaces = [];
  spaces.forEach((space, index) => {
    spaces[index] = null;
  });
  boxes.forEach((box) => {
    box.innerText = "";
  });
  playText.innerText = "";
  currentPlayer = X_text;
};
restartButton.addEventListener("click", restart);

restart();
drawBoard();
