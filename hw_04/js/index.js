const strSentences = prompt ("Enter sentences", "How much is the fish?");

let operationId = +prompt( `1. Узнать unicode значение. 
2. Удалить символ из строки.
3. Заменить символ из строки на случайный смайлик.
4. Узнать количество букв в строке (без пробелов). `);

operationId = Math.ceil(operationId);

const IS_UNICOD = 1,
      IS_DELETE_SYMBOL = 2,
      IS_CHANGE_SYMBOL = 3,
      IS_LENGTH_SYMBOL = 4;

let smile = ["😀", "😃", "😄", "😁", "😆", "😅", "🤣", "😂", "🙂", "🙃"];
let smileIndex = getRandomIntInclusive(0, 9);
smileIndex = smile[smileIndex];
let showUnicode,
    deleteSymbol,
    changeSymbol,
    lengthSymbol;

if (operationId === IS_UNICOD) {
  operationId = prompt ("Выберите индекс:");
  showUnicode = strSentences.charCodeAt(operationId);
  alert (`1. Unicode значение указанного пользователем: ${showUnicode}`);
} else if (operationId === IS_DELETE_SYMBOL) {
  operationId = +prompt ("Выберите индекс для удаления:");
  deleteSymbol = strSentences.substring(0, operationId) 
  + "" + strSentences.substring(operationId + 1);
  alert (`2. Удалить указанный пользователем символ из строки: ${deleteSymbol}`);
} else if (operationId === IS_CHANGE_SYMBOL) {
  operationId = +prompt ("Выберите индекс для замены:");
  changeSymbol = strSentences.substring(0, operationId) 
  + smileIndex + strSentences.substring(operationId + 1);
  alert (`3. Заменить указанный пользователем символ из строки (по индексу) на случайный смайлик: ${changeSymbol}`);
} else if (operationId === IS_LENGTH_SYMBOL) {
  lengthSymbol = strSentences.replaceAll(" ", "").length;
  alert (`4. Узнать количество букв в строке (без пробелов): ${lengthSymbol}`);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max); 

  return Math.floor(Math.random() * (max - min + 1) + min);
}


