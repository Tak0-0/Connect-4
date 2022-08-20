// const { append } = require("express/lib/response")
const playGrid = document.getElementById("playGrid");
playGrid.addEventListener("click", colorCellIn);
let gameState = {
  players: ["1", "2"],
  currentPlayer: "X",
  gameBoard: [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
  ],
  colHeight: [0, 0, 0, 0, 0, 0, 0],
};

function colorCellIn(evt) {
  let col = evt.target.cellIndex;
  console.log(evt);
  console.log(playGrid);
  if (gameState.currentPlayer === "X") {
    playGrid.children[5 - gameState.colHeight[col]].children[col].className =
      "red";
    gameState.gameBoard[5 - gameState.colHeight[col]][col] = "red";
    console.log(
      "this is gamestate.gameboard",
      JSON.stringify(gameState.gameBoard)
    );
    gameState.currentPlayer = "O";
  } else {
    playGrid.children[5 - gameState.colHeight[col]].children[col].className =
      "yellow";
    gameState.currentPlayer = "X";
    gameState.gameBoard[5 - gameState.colHeight[col]][col] = "yellow";
  }
  gameState.colHeight[col]++;
  let alertmessage = winValidator();
  if (alertmessage) {
    alert(alertmessage);
    gameState = {
      players: ["1", "2"],
      currentPlayer: "X",
      gameBoard: [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
      ],
      colHeight: [0, 0, 0, 0, 0, 0, 0],
    };
    makeBorder();
  }
  console.log(playGrid);
}

function makeBorder() {
  playGrid.innerHTML = "";
  for (let k = 0; k < 6; k++) {
    const row = document.createElement("tr");
    for (let i = 0; i < 7; i++) {
      const td = document.createElement("td");
      row.appendChild(td);
    }
    playGrid.appendChild(row);
  }
}
makeBorder();

function winValidator() {
  for (let row = 0; row < 6; row++) {
    let timesSeen = 1;
    for (let col = 1; col < 7; col++) {
      if (
        gameState.gameBoard[row][col - 1] == gameState.gameBoard[row][col] &&
        gameState.gameBoard[row][col] != null
      ) {
        timesSeen++;

        if (timesSeen == 4) {
          return gameState.gameBoard[row][col] + " wins";
        }
      } else {
        timesSeen = 1;
      }
    }
  }

  for (let col = 0; col < 7; col++) {
    let timesSeen = 1;
    for (let row = 1; row < 6; row++) {
      if (
        gameState.gameBoard[row - 1][col] == gameState.gameBoard[row][col] &&
        gameState.gameBoard[row][col] != null
      ) {
        timesSeen++;

        if (timesSeen == 4) {
          return gameState.gameBoard[row][col] + " wins";
        }
      } else {
        timesSeen = 1;
      }
    }
  }

  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 7; col++) {
      let timesSeen = 1;
      if (row < 3 && col < 4) {
        if (
          gameState.gameBoard[row + 1][col + 1] ==
            gameState.gameBoard[row][col] &&
          gameState.gameBoard[row][col] != null
        ) {
          timesSeen++;
        }
        if (
          gameState.gameBoard[row + 2][col + 2] ==
            gameState.gameBoard[row][col] &&
          gameState.gameBoard[row][col] != null
        ) {
          timesSeen++;
        }
        if (
          gameState.gameBoard[row + 3][col + 3] ==
            gameState.gameBoard[row][col] &&
          gameState.gameBoard[row][col] != null
        ) {
          timesSeen++;
          if (timesSeen == 4) {
            return gameState.gameBoard[row][col] + " wins";
          }
        }
      }
    }
  }

  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 7; col++) {
      let timesSeen = 1;
      if (row < 3 && col > 2) {
        if (
          gameState.gameBoard[row + 1][col - 1] ==
            gameState.gameBoard[row][col] &&
          gameState.gameBoard[row][col] != null
        ) {
          timesSeen++;
        }
        if (
          gameState.gameBoard[row + 2][col - 2] ==
            gameState.gameBoard[row][col] &&
          gameState.gameBoard[row][col] != null
        ) {
          timesSeen++;
        }
        if (
          gameState.gameBoard[row + 3][col - 3] ==
            gameState.gameBoard[row][col] &&
          gameState.gameBoard[row][col] != null
        ) {
          timesSeen++;
          if (timesSeen == 4) {
            return gameState.gameBoard[row][col] + " wins";
          }
        }
      }
    }
  }
  let colTotal = gameState.colHeight.reduce(function (total, value) {
    return total + value;
  }, 0);
  console.log("coltotal", colTotal);
  if (colTotal == 42) {
    return "no one won lol";
  } else {
    return null;
  }
  // [col + 1][col - 1]; goes bottom left
  // [col + 1][col + 1] goes bottom right
  // [col - 1][col + 1] goes top right
  // [col - 1][col - 1] goes top left
  // alert("no one won");
}
// let player1Name = document.getElementById("player1").value;
// let player2Name = document.getElementById("player2").value;
// console.log(`${player1Name}'s turn!`);
// playerTurn.innerHTML = "Some text";
// console.log(gameBoard);
// console.log(colHeight);
