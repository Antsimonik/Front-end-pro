const products = [
	['apple',10],
	['banana',8],
	['mango',20],
	['grape',18]
];

function getPrice(products, seasonFunc) {
  let copiedProducts = JSON.parse(JSON.stringify(products));

  let sum = 0;
  for(let i=0; i<products.length; i++){
    let innerArray = products[i];

    sum += typeof seasonFunc === `function` ? seasonFunc(innerArray[1]) : innerArray[1];

  }
  return sum;
}

console.log(getPrice(products));
console.log(getPrice(products, summerValue));
console.log(getPrice(products, winterValue));

function summerValue(value){
  return value*0.8;
}

function winterValue(value){
  return value*2;
}

function sum(args){

  let sumResult = 0;
  for(let i=0; i<args.length; i++) sumResult+= args[i];
    
  return sumResult;
}
