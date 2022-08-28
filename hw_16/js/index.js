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
  
class Coffee{
    constructor (obj){
      Object.assign(this, obj);
      console.log(this.ingredients)
    }

    makeCoffee(){
        for(let key in this.ingredients){
        return `<div class="cup">
            <div class="coffee">
                <div class="coffee__ingredients">
                    <p style="height: ${this.ingredients[key]}" class="ingredient ${key}">${key}</p>
                </div>
            </div>
            <p class="coffee__title">${this.title}</p>
        </div>`
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
)
  
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

COFFEE_TYPES
    .map(Coffee => COFFEE_TYPE[Espresso] ? COFFEE_TYPE[Espresso](Coffee) : new Coffee(Coffee))
    .map(Coffee => Coffee.makeCoffee())
    .join(``);

  document.write(`<section class="cups">${renderDefaultCoffee.makeCoffee()}</section>`)
  console.log(renderDefaultCoffee.makeCoffee())
