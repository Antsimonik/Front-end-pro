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

const Aquarius = monthOfBirth == January && dayOfBirth >= 20 || monthOfBirth == February && dayOfBirth <= 18;

const Pisces = monthOfBirth == February && dayOfBirth >= 19 || monthOfBirth == March && dayOfBirth <= 20;

const Aries = monthOfBirth == March && dayOfBirth >= 21 || monthOfBirth == April && dayOfBirth <= 19;

const Taurus = monthOfBirth == April && dayOfBirth >= 20 || monthOfBirth == May && dayOfBirth <= 20;

const Gemini = monthOfBirth == May && dayOfBirth >= 21 || monthOfBirth == June && dayOfBirth <= 20;

const Cancer = monthOfBirth == June && dayOfBirth >= 21 || monthOfBirth == July && dayOfBirth <= 22;

const Leo = monthOfBirth == July && dayOfBirth >= 23 || monthOfBirth == August && dayOfBirth <= 22;

const Virgo = monthOfBirth == August && dayOfBirth >= 23 || monthOfBirth == September && dayOfBirth <= 22;

const Libra = monthOfBirth == September && dayOfBirth >= 23 || monthOfBirth == October && dayOfBirth <= 22;

const Scorpio = monthOfBirth == October && dayOfBirth >= 23 || monthOfBirth == November && dayOfBirth <= 21;

const Sagittarius = monthOfBirth == November && dayOfBirth >= 22 || monthOfBirth == December && dayOfBirth <= 21;

const Capricorn = monthOfBirth == December && dayOfBirth >= 22 || monthOfBirth == January && dayOfBirth <= 19;

let zodiakSign;

if (Aquarius) {
  zodiakSign = "Aquarius ♒";
} else if (Pisces) {
  zodiakSign = "Pisces ♓";
} else if (Aries) {
  zodiakSign = "Aries ♈";
} else if (Taurus) {
  zodiakSign = "Taurus ♉";
} else if (Gemini) {
  zodiakSign = "Gemini ♊";
} else if (Cancer) {
  zodiakSign = "Cancer ♋";
} else if (Leo) {
  zodiakSign = "Leo ♌";
} else if (Virgo) {
  zodiakSign = "Virgo ♍";
} else if (Libra) {
  zodiakSign = "Libra ♎";
} else if (Scorpio) {
  zodiakSign = "Scorpio ♏";
} else if (Sagittarius) {
  zodiakSign = "Sagittarius ♐";
} else if (Capricorn) {
  zodiakSign = "Capricorn ♑";
}

let isLeapYear = (yearOfBirth % 400 === 0 || yearOfBirth % 4 === 0 && yearOfBirth % 100 !== 0);
let isNotLeapYear = isLeapYear !== true;

if (isLeapYear) {
  isLeapYear = "(leap year),";
  console.log ("User Bio:", firstName, lastName + ",", age, "years old", isLeapYear, zodiakSign);
} else if (isNotLeapYear) {
  console.log ("User Bio:", firstName, lastName + ",", age, "years old,", zodiakSign);
}