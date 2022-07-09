const CURRENT_YEAR = 2022;

const firstName = prompt ("Your First Name?", "John");
const lastName = prompt ("Your Last Name?", "Doe");
const ageYear = prompt ("Year of birth?", 1988);
const age = CURRENT_YEAR - ageYear;

console.log("'User Bio:", firstName, lastName + ",", age, "years old;'")
