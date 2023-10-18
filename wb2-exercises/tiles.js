let length = 10
let width = 8
let area = length * width ; 
let tilesNeeded = Math.ceil(area / (1 * 1)); // Each tile covers 1 square foot
let boxesNeeded = Math.ceil(tilesNeeded / 12); // Each box has 12 tiles

console.log("You need to buy " + boxesNeeded + " boxes of tiles. " )