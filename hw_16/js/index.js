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
                "milk-foam": 10
            }
        },
        {
            title: `Flat White`,
            ingredients: {
                espresso: 55,
                "milk-foam": 45
            }
        },
        {
            title: `Cappuccino`,
            ingredients: {
                espresso: 20,
                milk: 20,
                "milk-foam": 15
            }
        },
        {
            title: `Latte`,
            ingredients: {
                espresso: 20,
                milk: 20,
                "milk-foam": 20
            }
        },
        {
            title: `Mocha`,
            ingredients: {
                "chocolate-syrop": 15,
                espresso: 15,
                milk: 18,
                "milk-foam": 15
            }
        }
    ],
    Alcoholic: [
        {
            title: `Irish Coffee`,
            ingredients: {
                espresso: 50,
                whiskey: 10,
                "whipped-cream": 40
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
                "warm-milk": 20,
                "baileys-irish-cream": 30
            }
        }
    ],
    Dessert: [
        {
            title: `Affogato`,
            ingredients: {
                espresso: 25,
                "ice-cream": 20,
                "whipped-cream": 10,
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
                "grated-chocolate": 10,
                "ice-cream": 30
            }
        }
    ]
}

class Coffee{
    constructor (obj){
      Object.assign(this, obj);
      console.log(this.ingredients)
    }

    makeCoffee() {
        const DIVs = Object.keys(this.ingredients)
            .map(key => `<p style="height: ${this.ingredients[key]}%" class="ingredient ${key}">${key}</p>`)
            .join(``);
        return `<div class="cup">
                    <div class="${this.setClass().join(` `)}">
                        <div class="coffee__ingredients">${DIVs}</div>
                    </div>
                    <p class="coffee__title">${this.title}</p>
                </div>`
    }

    setClass(){
        return [`coffee`];
    }
}

class Espresso extends Coffee{
    constructor(obj){
        super(obj);
    }

    setClass(){
        let classes = super.setClass();
        classes.push(`coffee--espresso`);
        return classes;
    }
}
class EspressoMilk extends Coffee{
    constructor(obj){
        super(obj);
    }

    setClass(){
        let classes = super.setClass();
        classes.push(`coffee--espressoMilk`);
        return classes;
    }
}
class Alcoholic extends Coffee{
    constructor(obj){
        super(obj);
    }

    setClass(){
        let classes = super.setClass();
        classes.push(`coffee--alcoholic`);
        return classes;
    }
}
class Dessert extends Coffee{
    constructor(obj){
        super(obj);
    }

    setClass(){
        let classes = super.setClass();
        classes.push(`coffee--dessert`);
        return classes;
    }
}

let defaultCoffee = new Coffee(
    {
        title: `Default Coffee`,
        ingredients: {
            espresso: 50,
            whiskey: 10,
            "whipped cream": 40
        }
    }
)

let EspressoCoffee = COFFEE_TYPES.Espresso
    .map(Coffee => new Espresso(Coffee))
    .map(Coffee => Coffee.makeCoffee())
    .join(``);

let EspressoMilkCoffee = COFFEE_TYPES.EspressoMilk
    .map(Coffee => new EspressoMilk(Coffee))
    .map(Coffee => Coffee.makeCoffee())
    .join(``);

let AlcoholicCoffee = COFFEE_TYPES.Alcoholic
    .map(Coffee => new Alcoholic(Coffee))
    .map(Coffee => Coffee.makeCoffee())
    .join(``);

let DessertCoffee = COFFEE_TYPES.Dessert
    .map(Coffee => new Dessert(Coffee))
    .map(Coffee => Coffee.makeCoffee())
    .join(``);

document.write(`<section class="cups">
    ${defaultCoffee.makeCoffee()}
    ${EspressoCoffee}
    ${EspressoMilkCoffee}
    ${AlcoholicCoffee}
    ${DessertCoffee}
    </section>`)