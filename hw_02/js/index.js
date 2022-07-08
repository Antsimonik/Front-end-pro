const AGE_YEAR = 1988;
let firstName = "John";
let lastName = "Doe";
const CURRENT_YEAR = 2022;
let age = CURRENT_YEAR - AGE_YEAR;

prompt ("Year of birth?", AGE_YEAR);
prompt ("Your First Name?", firstName);
prompt ("Your Last Name?", lastName);
console.log("'User Bio:", firstName, lastName + ",",  age, "years old;'")
