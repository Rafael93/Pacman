const worldContainer = document.querySelector(".world-container");

var world = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0],
  [0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const createStage = (world) => {
  for (let i = 0; i < world.length; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    row.id = i;
    for (let x = 0; x < world[i].length; x++) {
      if (world[i][x] === 0) {
        let brick = document.createElement("div");
        brick.classList.add("brick");
        row.appendChild(brick);
      } else if (world[i][x] === 1) {
        let coin = document.createElement("div");
        coin.classList.add("coin");
        coin.id = x;
        row.appendChild(coin);
      } else if (world[i][x] === 2) {
        let pacman = document.createElement("div");
        pacman.classList.add("pacman");
        row.appendChild(pacman);
      }
      worldContainer.appendChild(row);
    }
  }
};

createStage(world);

document.onkeydown = (e) => {
  if (e.keyCode === 37) {
    console.log("left");
  } else if (e.keyCode === 38) {
    console.log("up");
  } else if (e.keyCode === 39) {
    console.log("right");
  } else if (e.keyCode === 40) {
    //guado la posicion de pacman
    let currrentPos = findPacman(world);
    //modifico su posicion actual
    world[currrentPos[0]][currrentPos[1]] = 3;
    world[currrentPos[0] + 1][currrentPos[1]] = 2;
    //busco el elemento en el DOM
    let row = document.querySelector(
      "div.row[id='" + currrentPos[0] + 1 + "']"
    );
    let nextPos = row.querySelector("div.coin[id='" + currrentPos[1] + "']");
    //Actualizo el css
    nextPos.classList.remove("coin");
    document.querySelector(".pacman").classList.remove("pacman");
    nextPos.classList.add("pacman");
  }
};

const findPacman = (stage) => {
  for (let x = 0; x < stage.length; x++) {
    for (let y = 0; y < stage[x].length; y++) {
      if (stage[x][y] === 2) pos = [x, y];
    }
  }
  return pos;
};
