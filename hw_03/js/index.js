const firstName = prompt ("What's you first name?", "John");
const lastName = prompt ("What's you last name?", "Doe");
const dayOfBirth = +prompt ("What's you day of birth?", 12);
const monthOfBirth = +prompt ("What's you month of birth?", 11);
const yearOfBirth = +prompt ("What's you year of birth?", 1988);

const CURRENT_YEAR = 2022;
const age = (CURRENT_YEAR - yearOfBirth);

const January = 1;
const February = 2;
const March =  3;
const April = 4;
const May = 5;
const June = 6;
const July = 7;
const August = 8;
const September = 9;
const October = 10;
const November = 11;
const December = 12;

let Aquarius;
let Pisces;
let Aries;
let Taurus;
let Gemini;
let Cancer;
let Leo;
let Virgo;
let Libra;
let Scorpio;
let Sagittarius;
let Capricorn;
let zodiakSign;

if (monthOfBirth == January && dayOfBirth >= 20 || monthOfBirth == February && dayOfBirth <= 18) {
  Aquarius = zodiakSign = "Aquarius ♒";
} else if (monthOfBirth == February && dayOfBirth >= 19 || monthOfBirth == March && dayOfBirth <= 20) {
  Pisces = zodiakSign = "Pisces ♓";
} else if (monthOfBirth == March && dayOfBirth >= 21 || monthOfBirth == April && dayOfBirth <= 19) {
  Aries = zodiakSign = "Pisces ♓";
} else if (monthOfBirth == April && dayOfBirth >= 20 || monthOfBirth == May && dayOfBirth <= 20) {
  Taurus = zodiakSign = "Taurus ♉";
} else if (monthOfBirth == May && dayOfBirth >= 21 || monthOfBirth == June && dayOfBirth <= 20) {
  Gemini = zodiakSign = "Gemini ♊";
} else if (monthOfBirth == June && dayOfBirth >= 21 || monthOfBirth == July && dayOfBirth <= 22) {
  Cancer = zodiakSign = "Cancer ♋";
} else if (monthOfBirth == July && dayOfBirth >= 23 || monthOfBirth == August && dayOfBirth <= 22) {
  Leo = zodiakSign = "Leo ♌";
} else if (monthOfBirth == August && dayOfBirth >= 23 || monthOfBirth == September && dayOfBirth <= 22) {
  Virgo = zodiakSign = "Virgo ♍";
} else if (monthOfBirth == September && dayOfBirth >= 23 || monthOfBirth == October && dayOfBirth <= 22) {
  Libra = zodiakSign = "Libra ♎";
} else if (monthOfBirth == October && dayOfBirth >= 23 || monthOfBirth == November && dayOfBirth <= 21) {
  Scorpio = zodiakSign = "Scorpio ♏";
} else if (monthOfBirth == November && dayOfBirth >= 22 || monthOfBirth == December && dayOfBirth <= 21) {
  Sagittarius = zodiakSign = "Sagittarius ♐";
} else if (monthOfBirth == December && dayOfBirth >= 22 || monthOfBirth == January && dayOfBirth <= 19) {
  Capricorn = zodiakSign = "Capricorn ♑";
}

let isLeapYear = (yearOfBirth % 400 === 0 || yearOfBirth % 4 === 0 && yearOfBirth % 100 !== 0);

if (isLeapYear) {
  isLeapYear = "(leap year),";
  console.log ("User Bio:", firstName, lastName + ",", age, "years old", isLeapYear, zodiakSign);
} else {
  console.log ("User Bio:", firstName, lastName + ",", age, "years old,", zodiakSign);
}