const COFFEE_TYPES = {
    Espresso: [
        {
            title: `Ristretto`,
            ingredients: {
                espresso: 20
            }
        },
        {
            title: `Espresso`,
            ingredients: {
                espresso: 60
            }
        },
        {
            title: `Lungo`,
            ingredients: {
                espresso: 100
            }
        },
        {
            title: `Americano`,
            ingredients: {
                espresso: 40,
                water: 60
            }
        }
    ],
    EspressoMilk: [
        {
            title: `Macchiato`,
            ingredients: {
                espresso: 20,
                "milk foam": 10
            }
        },
        {
            title: `Flat White`,
            ingredients: {
                espresso: 55,
                "milk foam": 45
            }
        },
        {
            title: `Cappuccino`,
            ingredients: {
                espresso: 20,
                milk: 20,
                "milk foam": 15
            }
        },
        {
            title: `Latte`,
            ingredients: {
                espresso: 20,
                milk: 20,
                "milk foam": 20
            }
        },
        {
            title: `Mocha`,
            ingredients: {
                "chocolate syrop": 15,
                espresso: 15,
                milk: 18,
                "milk foam": 15
            }
        }
    ],
    Alcoholic: [
        {
            title: `Irish Coffee`,
            ingredients: {
                espresso: 50,
                whiskey: 10,
                "whipped cream": 40
            }
        },
        {
            title: `Corretto`,
            ingredients: {
                espresso: 90,
                brandy: 10
            }
        },
        {
            title: `Baileys Hot Coffee`,
            ingredients: {
                espresso: 30,
                "warm milk": 20,
                "baileys irish cream": 30
            }
        }
    ],
    Dessert: [
        {
            title: `Affogato`,
            ingredients: {
                espresso: 25,
                "ice cream": 20,
                "whipped cream": 10,
                chocolate: 10
            }
        },
        {
            title: `Frappe`,
            ingredients: {
                espresso: 30,
                ice: 10,
                milk: 50
            }
        },
        {
            title: `Glace`,
            ingredients: {
                espresso: 50,
                "grated chocolate": 10,
                "ice cream": 30
            }
        }
    ]
}

let copyCoffeeType = Object.entries(COFFEE_TYPES);

class Coffee{
    constructor (obj){
      Object.assign(this, obj);
      console.log(this.ingredients);
    }

    makeCoffee(){
        // array1.forEach(element => console.log(element));
        // COFFEE_TYPES.forEach(COFFEE_TYPES => console.log(COFFEE_TYPES))
        // render().forEach(Coffee)
                // let Coffeees = Object.entries(COFFEE_TYPES).forEach();
        // const Coffeees = Object.keys(this)
        for(let key in this.ingredients){
            document.write (`<div class="cup">
            <div class="coffee">
                <div class="coffee__ingredients">
                    <p style="height: ${this.ingredients[key]}" class="ingredient ${key}">${key}</p>
                </div>
            </div>
            <p class="coffee__title">${this.title}</p>
        </div>`)
            // return `<div class="cup">
            //     <div class="coffee">
            //         <div class="coffee__ingredients">
            //             <p style="height: ${this.ingredients[key]}" class="ingredient ${key}">${key}</p>
            //         </div>
            //     </div>
            //     <p class="coffee__title">${this.title}</p>
            // </div>`
            }
    }
}

let renderDefaultCoffee = new Coffee(
    {
        title: `Default Coffee`,
        ingredients: {
            espresso: 50,
            whiskey: 10,
            "whipped cream": 40
        }
    }
).makeCoffee();

console.log(renderDefaultCoffee.ingredients)
  
class Espresso extends Coffee{
    constructor(Coffee){
      super(Coffee);
    }
}
class EspressoMilk extends Coffee{
    constructor(Coffee){
      super(Coffee);
    }
}
class Alcoholic extends Coffee{
    constructor(Coffee){
      super(Coffee);
    }
}
class Dessert extends Coffee{
    constructor(Coffee){
      super(Coffee);
    }
}

const COFFEE_TYPE = {
    Espresso: Coffee => new Espresso(Coffee),
    EspressoMilk: Coffee => new EspressoMilk(Coffee),
    Alcoholic: Coffee => new Alcoholic(Coffee),
    Dessert: Coffee => new Dessert(Coffee)
}
let userCoffee = COFFEE_TYPES
for (let key in userCoffee){
    console.log(key, COFFEE_TYPES[key])
    switch (key) {
        case Espresso:
            COFFEE_TYPES[Espresso](Coffee);
            break;

        case EspressoMilk:
            COFFEE_TYPES[EspressoMilk](Coffee);
            break;

        case Alcoholic:
            COFFEE_TYPES[Alcoholic](Coffee);
            break;

        case Dessert:
            COFFEE_TYPES[Dessert](Coffee);
            break;

        case Dessert:
            new Coffee(Coffee);
            break;

    }
}

// let copyCoffeeType = Object.entries(COFFEE_TYPES);
// console.log(copyCoffeeType)

// COFFEE_TYPE
//     .forEach(Coffee => COFFEE_TYPE ? COFFEE_TYPE[Espresso](Coffee) : new Coffee(Coffee));
// const coff = Object.entries(COFFEE_TYPES)
// console.log(coff)

// coff
//     .map(coff => coff[Espresso] ? coff[Espresso] : new Coffee)
// COFFEE_TYPES
//     .forEach(Coffee => COFFEE_TYPE ? COFFEE_TYPE[Espresso](Coffee) : new Coffee(Coffee));
// for (let key in COFFEE_TYPES){
//     if(key === key(Coffee)){
//         console.log(key)
//     } else {
//         new Coffee (Coffee)
//     }
// }

  document.write(`<section class="cups">${userCoffee}</section>`)
  document.write(`<section class="cups">${renderDefaultCoffee.makeCoffee()}</section>`)
  console.log(renderDefaultCoffee.makeCoffee())

  console.log(renderDefaultCoffee instanceof Coffee) ;
  console.log(Espresso instanceof Coffee) ;

//   copyCoffeeType
//     .map(Coffee => copyCoffeeType[Espresso] ? copyCoffeeType[Espresso](Coffee) : new Coffee(Coffee))
//     .map(Coffee => Coffee.makeCoffee())
//     .join(``);
