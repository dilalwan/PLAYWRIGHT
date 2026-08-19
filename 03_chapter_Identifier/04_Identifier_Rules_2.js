// Camel Case is used in Javascript for variable names. The first word is in lowercase and the first letter of the second word is in uppercase.
var lastName='Rajpal';
var firstName='Divya'; 
var fullName=firstName+" "+lastName;
console.log(fullName);  


//Naming Conventions (Cases)

// 1. Camel Case (standard for JS variables and functions)
let userName = "DivyaRajpal";
let totalAmount = 1000;
let isLoggedIn = true;

// 2. Pascal Case (used for JS class names and constructors)
class UserProfile {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

let PascalCase= 'PascalCase';
let ShoppingCart= 'Shopping Cart';

// 3. Snake Case (less common in JS, but used in some cases,underscores between words)
let snake_case_variable = "This is a snake case variable";

//4. Screaming Snake Case (used for constants, all uppercase letters with underscores)
const MAX_VALUE = 100;
const API_KEY = "1234567890abcdef";

//5. Hungarian Notation (prefixes to indicate type or purpose, less common in modern JS)
let strUserName = "DivyaRajpal";    
let nTotalAmount = 1000;
let bIsLoggedIn = true;
let arrItems = ["item1", "item2", "item3"];
