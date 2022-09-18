const userData = {
	USD: 1000,
	EUR: 900,
	UAH: 15000,
	BIF: 20000,
	AOA: 100
};

const bankData = {
    USD: {
        max: 3000,
        min: 100,
        img: '💵'
    },
    EUR: {
        max: 1000,
        min: 50,
        img: '💶'
    },
    UAH: {
        max: 0,
        min: 0,
        img: '💴'
    },
    GBP: {
        max: 10000,
        min: 100,
        img: '💷'
    }
}

function getMoney () {
  return myPromise;
}

let myPromise = new Promise(
  function(resolve, reject){
    let viewBalance = confirm (`Подивитися баланс карті?`);
    viewBalance ? resolve() : reject();
  }
);

myPromise
  .then(
    function(){
      let chooseCurrency,
          avaibleUserCurrency = Object.keys(userData),
          sommeUserCurrency;

      do{
        chooseCurrency = prompt(`Введiть назву валюты: ${avaibleUserCurrency.join(`, `)}`);
        if(chooseCurrency) chooseCurrency = chooseCurrency.replaceAll(` `, ``).toUpperCase();
        sommeUserCurrency = avaibleUserCurrency.some(item => item === chooseCurrency);
      } while (!sommeUserCurrency);

      console.log(`Баланс становить: ${userData[chooseCurrency]}, ${chooseCurrency}`)
      // return sommeUserCurrency ? resolve() : reject();
    }
  )

  .catch(
    function(){
      let avaibleUserCurrency = Object.keys(userData);
      let avaibleBankCurrency = Object
          .keys(bankData)
          .filter(chooseCurrency => bankData[chooseCurrency].max>0);
      
      let avaiblUserBank = avaibleBankCurrency
          .filter(chooseCurrency => avaibleUserCurrency. includes(chooseCurrency));

      let chooseCurrency;
      do{
        chooseCurrency = prompt(`Введiть назву валюти: ${avaiblUserBank.join(`, `)}`)
        if(chooseCurrency) chooseCurrency = chooseCurrency.replaceAll(` `, ``).toUpperCase();
      } while(!avaiblUserBank.includes(chooseCurrency));

      let minAvaiblePrice = bankData[chooseCurrency].min;
      let maxAvaiblePrice = userData[chooseCurrency];
      if(userData[chooseCurrency] > bankData[chooseCurrency].max) max = bankData[chooseCurrency].max;

      let price = prompt(`Введить суму ${minAvaiblePrice}-${maxAvaiblePrice}`);

      if(price > maxAvaiblePrice){
        console.log(`Введена сума більша за доступну. Максимальна сума зняття: ${maxAvaiblePrice} ${chooseCurrency}`)
      } else if(minAvaiblePrice > price){
        console.log(`Введена сума менша за доступну. Мiнiмальна сума зняття: ${maxAvaiblePrice} ${chooseCurrency}`)
      } else {
        console.log(`От Вашi грошi ${price} ${chooseCurrency}`)
      }
    }
  )

  .finally(
    function(){
      console.log(`Дякую, гарного дня 😊`);
    }

  )