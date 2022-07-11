const firstName = prompt ("What's you first name?", "John");
const lastName = prompt ("What's you last name?", "Doe");
const dayOfBirth = prompt ("What's you day of birth?", 12);
const monthOfBirth = prompt ("What's you month of birth?", 11);
const yearOfBirth = prompt ("What's you year of birth?", 1988);

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

if (Aquarius) {
  console.log ("Aquarius ♒");
} else if (Pisces) {
  console.log ("Pisces ♓");
} else if (Aries) {
  console.log ("Aries ♈");
} else if (Taurus) {
  console.log ("Taurus ♉");
} else if (Gemini) {
  console.log ("Gemini ♊");
} else if (Cancer) {
  console.log ("Cancer ♋");
} else if (Leo) {
  console.log ("Leo ♌");
} else if (Virgo) {
  console.log ("Virgo ♍");
} else if (Libra) {
  console.log ("Libra ♎");
} else if (Scorpio) {
  console.log ("Scorpio ♏");
} else if (Sagittarius) {
  console.log ("Sagittarius ♐");
} else if (Capricorn) {
  console.log ("Capricorn ♑");
}

const isLeapYear = (yearOfBirth % 400 === 0 || yearOfBirth % 4 === 0 && yearOfBirth % 100 !== 0);
console.log (isLeapYear);


/*if (monthOfBirth && dayOfBirth === Aquarius) {
  console.log ("skdfalfskfkdla");
};*/

/*if (dayOfBirth >= 20 && monthOfBirth === January || dayOfBirth <= 18 && monthOfBirth === February) {
  console.log("Aquarius");
} else if (dayOfBirth >= 19 && monthOfBirth === February || dayOfBirth <= 20 && monthOfBirth === March); {
  console.log("Pisces");
}*/

//const monthDayHoroscop = (monthOfBirth && dayOfBirth);



//const Aquarius = (monthOfBirth == "January" && (dayOfBirth >= 20) || monthOfBirth == "January" && (dayOfBirth <= 31) || monthOfBirth == "February" (dayOfBirth <= 18));

//const dayHoroscop = 
//if (monthOfBirth == ("January" && (dayOfBirth >= 20)) || monthOfBirth == "January" && (dayOfBirth <= 31) || monthOfBirth == "February" (dayOfBirth <= 18)) {
  //console.log ("User Bio:", firstName, lastName + ",", age, "years old,", "Aquarius", "♒");
//}
//if (monthOfBirth === ("January" && (dayOfBirth >= 20 ||dayOfBirth <= 31)) || "February" && (dayOfBirth <= 18)) {
  
//  console.log ("User Bio:", firstName, lastName + ",", age, "years old,", "Aquarius", "♒");

//} else if (monthOfBirth === ("February" && (dayOfBirth >= 19 || dayOfBirth <= 28)) || "March" && (dayOfBirth <= 20)) {
//  console.log ("User Bio:", firstName, lastName + ",", age, "years old,", "Pisces", "♓");
//}


//if (Aquarius == monthDayHoroscop) {
//  console.log("Aquarius");
//}

//if (userHoroscop) {
//  January && February &&  
//}
//if (dayOfBirth ) {
//  January && February &&  
//}

//console.log ("User Bio:", firstName, lastName + ",", age, "years old")
