const board = document.getElementById("board");
const status = document.getElementById("status");

let currentPlayer = "X";
let cells = Array(9).fill(null);

function drawBoard() {
  board.innerHTML = "";
  cells.forEach((value, index) => {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.textContent = value || "";
    cell.addEventListener("click", () => makeMove(index));
    board.appendChild(cell);
  });
}

function makeMove(index) {
  if (cells[index] || checkWinner()) return;

  cells[index] = currentPlayer;
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  drawBoard();

  const winner = checkWinner();
  if (winner) {
    status.textContent = `${winner} wins! 🎉`;
  } else if (!cells.includes(null)) {
    status.textContent = "It's a draw!";
  } else {
    status.textContent = `Player ${currentPlayer}'s turn`;
  }
}

function checkWinner() {
  const combos = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  for (let combo of combos) {
    const [a,b,c] = combo;
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return cells[a];
    }
  }
  return null;
}

function resetGame() {
  cells = Array(9).fill(null);
  currentPlayer = "X";
  status.textContent = `Player X's turn`;
  drawBoard();
}

drawBoard();
status.textContent = `Player X's turn`;
