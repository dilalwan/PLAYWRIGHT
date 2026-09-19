// Nested ternary operator is a conditional operator that allows you to evaluate
//  multiple conditions in a single line of code. 
// It is a shorthand way of writing if-else statements.

let age = 25;
let isAdult = age >= 18 ? (age >= 65 ? "Senior Citizen" : "Adult") : "Minor";       
console.log(isAdult); // Output: "Adult"