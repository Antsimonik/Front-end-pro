 let impotantWord = confirm(`Tell me three most important words 💚`);

const COUNT_OF_WORDS = 3;
let finalString = ``;

if (impotantWord) {
  for(let i=1; i <= COUNT_OF_WORDS; i++) {

    let words;
        wordHasNumber = false;

    do{
      words = prompt(`Enter word #${i}`, `words`);
      if(words){
        words = words.trim();
        wordHasNumber = false;

        for(let j=0; j<words.length; j++){
          let currentLetter = words[j];

          if( !isNaN(+currentLetter) ){
            wordHasNumber = true;
            break;
          }
        }
      }
    } while(!words || wordHasNumber);

    console.log(words);

    let formatter;
    do{
      formatter = prompt(`Choose formating styles: uppercase || lowercase || capitalize`, `capitalize`);
      if(formatter) formatter = formatter.replaceAll(` `, ``).toLowerCase();

    } while(!formatter || (formatter !== `uppercase` && formatter !== `lowercase` && formatter !== `capitalize`))

    console.log(formatter);

    switch(formatter){
      case `uppercase`:
        words = words.toUpperCase();
        break;
      case `lowercase`:
        words = words.toLowerCase();
        break;
      case `capitalize`:
        words = words[0].toUpperCase() + words.slice(1).toLocaleLowerCase();
        break;
    }

    console.log(words);
    console.log(`--------------`)

    finalString += words;
    finalString += i===COUNT_OF_WORDS? `!` : ` `;

  }

  console.log(finalString);
}
