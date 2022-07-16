const strSentences = prompt ("Enter sentences", "How much is the fish?");

const isOperation = [1, 2, 3, 4]; 

let operationId = +prompt( `1. Узнать unicode значение. 
2. Удалить символ из строки.
3. Заменить символ из строки на случайный смайлик.
4. Узнать количество букв в строке (без пробелов). `);

operationId = Math.ceil(operationId);

let isUnicode = 1;
let isDeleteSymbol = 2;
let isChangeSymbol = 3;
let isLengthSymbol = 4;

let isSmile = ["😀", "😃", "😄", "😁", "😆", "😅", "🤣", "😂", "🙂", "🙃"];
let isSmileIndex = getRandomIntInclusive(0, 9);
isSmileIndex = isSmile[isSmileIndex];

if (operationId === isUnicode) {
  isUnicode = prompt ("which symbol to choose?");
  isUnicode = strSentences.replaceAll(" ", "").charCodeAt(isUnicode);
  alert (`1. Unicode значение указанного пользователем: ${isUnicode}`);
} else if (operationId === isDeleteSymbol) {
  isDeleteSymbol = prompt ("Which symbol delete?");
  isDeleteSymbol = strSentences.slice(0, isDeleteSymbol-1) + strSentences.slice(isDeleteSymbol);
  alert (`2. Удалить указанный пользователем символ из строки: ${isDeleteSymbol}`);
} else if (operationId === isChangeSymbol) {
  isChangeSymbol = prompt ("Which symbol change?");
  isChangeSymbol = strSentences.charAt(isChangeSymbol);
  isChangeSymbol = strSentences.replace(isChangeSymbol, isSmileIndex);
  alert (`3. Заменить указанный пользователем символ из строки (по индексу) на случайный смайлик: ${isChangeSymbol}`);
} else if (operationId === isLengthSymbol) {
  isLengthSymbol = strSentences.replaceAll(" ", "").length;
  alert (`4. Узнать количество букв в строке (без пробелов): ${isLengthSymbol}`);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max); 

  return Math.floor(Math.random() * (max - min + 1) + min);
}


