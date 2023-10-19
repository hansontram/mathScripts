let length = 10
let width = 8
let area = length * width ; 
let tilesNeeded =  (area / (1 * 1)) ; // Each tile covers 1 square foot
let tilesNeededPlus10 = tilesNeeded + (tilesNeeded * .10)
// console.log(tilesNeeded + (tilesNeeded * .10))
let boxesNeeded = Math.ceil(tilesNeededPlus10 / 12); // Each box has 12 tiles

console.log("You need to buy " + boxesNeeded + " boxes of tiles. " )




let length = 10;
let width = 8;
let tilesNeeded = Math.ceil((length * width) * 1.1 / 12);

console.log(`You need to buy ${tilesNeeded} boxes of tiles.`);