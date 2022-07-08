const CURRENT_YEAR = 2022;

let firstName = prompt ("Your First Name?", "John");
let lastName = prompt ("Your Last Name?", "Doe");
let ageYear = prompt ("Year of birth?", 1988);
let age = CURRENT_YEAR - ageYear;
console.log("'User Bio:", firstName, lastName + ",", age, "years old;'")
