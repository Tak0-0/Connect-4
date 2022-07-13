// const { append } = require("express/lib/response")

let gameState = {
  players: ['1', '2'],
  currentPlayer: 'X',
  gameBoard: [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
  ]

}

// let connectFourCells = document.getElementsByClassName("tg-down")
// // addListenerToCell()
// function colorCellIn(evt) {

//   console.log("hi")
//   let eventTarget = evt.target
//   console.log(evt)
//   if (eventTarget.style.backgroundColor === "yellow" || eventTarget.style.backgroundColor === "red") {
//     alert("this square is filled")
//   } else {
//     if (gameState.currentPlayer === 'X') {
//       eventTarget.style["background-color"] = "yellow"
//       gameState.currentPlayer = 'O'
//     } else {
//       eventTarget.style["background-color"] = "red"
//       gameState.currentPlayer = 'X'
//     }
//   }
  


  

//   // function addListenerToCell() {

//   //   for (let i = 0; i < connectFourCells.length; i++) {
//   //     let currentCell = connectFourCells[i]
//   //     currentCell.addEventListener("click", colorCellIn)
//   //   }


//   // }
//   addListenerToCell()
// }

//USE THIS FOR GRABBING PLAYER NAMES
let playGrid = document.getElementById("playGrid");

function makeBoard(boardArr){
    let row = document.createElement('tr');

    for (let i = 0; i < boardArr.length; i++) {
      
      let cell = document.createElement('td');

      row.appendChild(cell);
    }

    playGrid.appendChild(row);

}
for (let j = 0; j < 7; j++) {
  makeBoard(gameState.gameBoard)
}

let player1Name = document.getElementById('player1').value;
let player2Name = document.getElementById('player2').value;
// console.log(player1Name)
// `${player1Name}'s turn!`
// playerTurn.innerHTML = ‘SOME TEXT’;
