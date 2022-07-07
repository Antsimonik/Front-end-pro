let ageYear = "1988";
let firstName = "John";
let lastName = "Doe";
const currentYear = 2022;
let age = currentYear - ageYear;

prompt ("Year of birth?", Number(ageYear));
prompt ("Your First Name?", firstName);
prompt ("Your Last Name?", lastName);
console.log("'User Bio:", firstName, lastName + ",",  age, "years old;'")
