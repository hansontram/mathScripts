// let numberOfStudents = 8;
// let numberOfPizzas= 2;
// let slicePerPizza= 8
// let totalSlices = numberOfPizzas * slicePerPerson
// let slicePerPerson = Math.floor(totalSlices / (numberOfStudents + 1) )

// let slicesLeftOver = totalSlices % (numberOfStudents + 1)
// console.log(`Everyone gets ${slicePerPerson} slices of pizza and there were ${slicesLeftOver} slices left over`)



// Cashier

//calculate total change in cents
// calculate number of quarters
// calculate the remaining change
// repeat last two steps for rest

let cost = 1.01;
let cashGiven = 2;

let quarter = 0.25;
let dime = 0.1;
let nickles = 0.05;
let pennies = 0.01;

let change = (cashGiven - cost).toFixed(2);

let changeInQuarters = Math.floor(change / quarter);

console.log("Quarters", changeInQuarters);
// console.log(
//   "Remaining change after quarters",
//   change - changeInQuarters * quarter
// );
change = (change - changeInQuarters * quarter).toFixed(2);

let changeInDimes = Math.floor(change/ dime);
console.log("Dimes", changeInDimes);
// console.log(
//   "Remaining change after dimes",
//   (change - changeInDimes * dime).toFixed(2)
// );
change= (change - changeInDimes * dime).toFixed(2);

let changeInNickles = Math.floor(change / nickles);
console.log("Nickles", changeInNickles);
// console.log(
//   "Remaining change after nickles",
//   change - changeInNickles * nickles
// );

change = (change - changeInNickles * nickles).toFixed(2);

let changeInPennies = Math.floor(change / pennies);
console.log("Pennies", changeInPennies);
// console.log(
//   "Remaining change after pennies",
//   change - changeInPennies * pennies
// );



