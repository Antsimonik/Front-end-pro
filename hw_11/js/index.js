const products = [
	['apple',10],
	['banana',8],
	['mango',20],
	['grape',18]
];


let summerProducts;
let winterProducts;
// const summerPrice = [].concat(copiedProducts[0][1], copiedProducts[2][1]);
// const winterPrice = [].concat(copiedProducts[1][1], copiedProducts[3][1]);
let value;
function getPrice(products, seasonFunc) {
  let copiedProducts = [];

  if(products, seasonFunc){
    for(let i=0; i<products.length; i++){
      let copiedProductsInfo = products[i];
      copiedProducts.push(copiedProductsInfo[1]);
    }
    summerProducts = [].concat(copiedProducts[0], copiedProducts[2]);
    winterProducts = [].concat(copiedProducts[1], copiedProducts[3]);
      console.log(summerProducts) 
      console.log(winterProducts)
    return copiedProducts;
  }
}
console.log(products, summerValue)
console.log(getPrice(products, seasonFunc));
getPrice(products, summerValue);
getPrice(products, winterValue);
getPrice(products);

function seasonFunc(summerValue, winterValue){
    return seasonFunc(sum(summerProducts), sum(winterProducts))

}
console.log (summerValue(sum(summerProducts)));
console.log (winterValue(sum(winterProducts)));

function summerValue(value){
  return value*0.8;
}

function winterValue(...value){
  return value*2;
}

function sum(args){

  let sumResult = 0;
  for(let i=0; i<args.length; i++) sumResult+= args[i];
    
  return sumResult;
}
// console.log(sum(summerProducts))
// console.log( sum(winterValue(...winterPrice), summerValue(...summerPrice)) );

      // return typeof funcName === `function` 
      //   ? (products, seasonFunc) 
      //   : `funcName is not a function`;

  // for(let j=0; j<copiedProducts.length; j++) {
    // console.log(copiedProducts[j][1]);
    // value = [].concat(copiedProducts[j][1]);
    // value = [].concat(copiedProducts[0][1], copiedProducts[1][1], copiedProducts[2][1], copiedProducts[3][1]);
    // console.log(value);
    // copiedProducts = copiedProducts.splice(j,1);
  
  // }



// console.log (summerValue) 
// console.log (winterValue) 

// switch(value) {
//   case value[0] && value[2]:
//     console.log(`poluchilos`);
//     break;
//   case value[1] && value[3]:
//     console.log(`eshe luche`);
//     break;  
// }

//вставить значения под эту функцию, определить по лету и зиме


// console.log (summerValue(value));



  // if(!getPrice) return getPrice(products, seasonFunc);

  //   for(i=0; i<copiedProducts.length; i++){
  // if(getPrice){
  //   for(i=0; i<copiedProducts.length; i++){
  //     // return console.log(copiedProducts[i])
  //   }
  // }






// function multiply(args){
//     let multiplyResult = 1;
//     for(let i=0; i<args.length; i++) multiplyResult *= args[i];

//     return multiplyResult;
// }
// console.log( multiply(products) );

// function seasonFunc(summerValue, winterValue){
      
//   function summerValue(value){
//     return value*0.8;
//   }
//   console.log (summerValue(sum));
  
  
//   function winterValue(value){
//     return value*2;
//   }
// }




// if(Array.isArray(getPrice)){
//   for(let i=0; i<copiedProducts.length; i++){
//     copiedProducts[i](seasonFunc);
//   }
// }
// return getPrice ? copiedProducts[i](seasonFunc)

// console.log(getPrice(products, seasonFunc))
// console.log(copiedProducts)
// console.log(copiedProducts)

// function sum(first, ...args){
//     console.log(first); // 10
//     console.log(args); // 20, 100

//     // let jsonArray = JSON.parse(JSON.stringify(arguments));
//     // console.log(jsonArray);
//     // console.log(arguments);

//     let sumResult = 0;
//     for(let i=0; i<args.length; i++) sumResult+= args[i];
    
//     return sumResult;
// }
