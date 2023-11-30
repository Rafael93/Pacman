const worldContainer = document.querySelector(".world-container");

const world = [
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
    for (let x = 0; x < world[i].length; x++) {
      if (world[i][x] === 0) {
        let brick = document.createElement("div");
        brick.classList.add("brick");
        row.appendChild(brick);
      } else if (world[i][x] === 1) {
        let coin = document.createElement("div");
        coin.classList.add("coin");
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
