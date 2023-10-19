// Exercise 1
// let a = 1
// let b = 2
// let c = 3

// if( a<b && a<c){
//     console.log(a+" is the smallest value")
// } else if (b < a && b <c){
//     console.log(b + "is the smallest value")
// } else {
//     console.log(c + "is the smallest value")
// }

// if( a>b && a>c){
//     console.log(a+" is the largest value")
// } else if (b > a && b > c){
//     console.log(b + "is the largest value")
// } else {
//     console.log(c + " is the largest value")
// }

// Exercise 2
let studentName = "John";
let studentMajor = "MKT";

if (studentMajor === "CSCI") {
  console.log(
    `Student: ${studentName}, Major: Computer Science, Advising Location: Sheppard Hall, Room 314`
  );
} else if (studentMajor === "BIOL") {
  console.log(
    `Student: ${studentName}, Major: Biology, Advising Location: Science Bldg, Room 310`
  );
} else if (studentMajor === "ENG") {
  console.log(
    `Student: ${studentName}, Major: English, Advising Location: Kerr Hall, Room 201`
  );
} else if (studentMajor === "HIST") {
  console.log(
    `Student: ${studentName}, Major: History, Advising Location: Kerr Hall, Room 114`
  );
} else if (studentMajor === "MKT") {
  console.log(
    `Student: ${studentName}, Major: Marketing, Advising Location: Kerr Hall, Room 310`
  );
}
