// Exercise 1 

let payRate = 25;
let hoursWorked = 40;
let regularHours = 40
let overtimeHours = hoursWorked - 40

if(hoursWorked <= 40){
   console.log ( "The gross pay is $",hoursWorked * payRate)
}else{

   console.log ("The gross pay with OT is $", regularHours * hourlyRate) + (overtimeHours * 1.5 * hourlyRate)
}


// Exercise 2 
let year = 2000
// If a year is divisible by 4 and not divisible by 100, it is a leap year.
// If a year is divisible by 400, it is a leap year.
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log (`The year ${year} is a leap year`);
} else {
    // If a year is divisible by 100 but not divisible by 400, it is not a leap year.
    console.log (`The year ${year} is NOT a leap year`);
}


