const IS_HAMBURGER = `hamburger`;
      IS_CHEESEBURGER = `cheeseburger`;
      HAMBURGER_CASH = 10;
      CHEESEBURGER_CASH = 15;
      DOUBLE_CHEESE = 5;
      SMALL_POTATO = 10;
      MIDDLE_POTATO = 15;
      BIG_POTATO = 20;
      KETCHUP = 2;
      MAYONNAISE = 3;
      ANSWER_YES = `yes`;


let stringHasNumber = false;
    currentCash = 0;
    isTrueMenu = true;
    userMenu = String();
    userMenuPotato = String();
    userMenuSauce = String();
    userMenuCheeseburger = String();



do {
  userMenu = prompt(`${IS_HAMBURGER} or ${IS_CHEESEBURGER}?`, `cheeseburger`);
  isTrueMenu = userMenu === IS_HAMBURGER || userMenu === IS_CHEESEBURGER;
  if(isTrueMenu) {
    userMenu = userMenu.trim().toLowerCase();
    if (userMenu === IS_HAMBURGER){ 
      currentCash += HAMBURGER_CASH;
    } else if (userMenu === IS_CHEESEBURGER) {
      currentCash += CHEESEBURGER_CASH;
      userMenuCheeseburger = prompt(`Would you like to add double cheese?`, `yes`).trim().toLowerCase();
      if (userMenuCheeseburger === ANSWER_YES) {
          currentCash += DOUBLE_CHEESE;
      }
    } 
  }
} while (!isTrueMenu){
}

console.log(`${currentCash} $, ${isTrueMenu}, ${userMenu}`)

userMenuPotato = prompt(`Would you like potato?`, 'yes');
userMenuPotato = userMenuPotato.trim().toLowerCase();
if (userMenuPotato === ANSWER_YES){
  userMenuPotato = prompt(`Choose potato size: small/middle/big`, 'small');
  userMenuPotato = userMenuPotato.trim().toLowerCase();
  if (!userMenuPotato || userMenuPotato === `small` || userMenuPotato === ` ` || userMenuPotato === ""){
    currentCash += SMALL_POTATO;
  } else if (userMenuPotato === `middle`){
        currentCash += MIDDLE_POTATO;
  } else if (userMenuPotato === `big`){
        currentCash += BIG_POTATO;
  }
}
console.log(`${currentCash} $, ${userMenuPotato}`)

userMenuSauce = prompt(`Would you like sauce?`, `yes`);
userMenuSauce = userMenuSauce.trim().toLowerCase();
if (userMenuSauce === ANSWER_YES) {
  userMenuSauce = prompt(`Choose sauce: ketchup/mayonnaise`, `ketchup`);
  userMenuSauce = userMenuSauce.trim().toLowerCase();
  if (!userMenuSauce || userMenuSauce === `ketchup` || userMenuSauce === " " || userMenuSauce === "") {
    currentCash += KETCHUP;
  } else if (userMenuSauce === `mayonnaise`) {
    currentCash += MAYONNAISE;
  }
  console.log(`${currentCash}$, ${userMenu}, ${userMenuPotato}, ${userMenuSauce}`)
}

if ((userMenuPotato && userMenuSauce) || (userMenuPotato&& userMenuSauce)) {
  document.write(`
<div class="price" id="Allprice">
  <h2>Your order:</h2>
<ul>
  <li class="Bulka">Bulka 🍔: ${userMenu}
  </li>
  <li class="Potato">Potato 🍟: ${userMenuPotato}
  </li>
  <li class="Sauce">Sauce 🧂: ${userMenuSauce}
  </li>
</ul>

<p>Price: ${currentCash}$ </p>  
</div>`)
} else if (userMenuPotato && !userMenuSauce) {
  document.write(`
<div class="price" id="priceBulkaPotato">
  <h2>Your order:</h2>
<ul>
  <li class="Bulka">Bulka 🍔: ${userMenu}
  </li>
  <li class="Potato">Potato 🍟: ${userMenuPotato}
  </li>
</ul>

<p>Price: ${currentCash}$ </p>  
</div>`)
} else if (userMenuSauce && userMenuSauce && !userMenuPotato) {
  document.write(`
<div class="price" id="priceBulkaSauce">
  <h2>Your order:</h2>
<ul>
  <li class="Bulka">Bulka 🍔: ${userMenu}
  </li>
  <li class="Sauce">Sauce 🧂: ${userMenuSauce}
  </li>
</ul>

<p>Price: ${currentCash}$ </p>  
</div>`)
} else {
  document.write(`
<div class="price" id="priceBulka">
  <h2>Your order:</h2>
<ul>
  <li class="Bulka">Bulka 🍔: ${userMenu}
  </li>
</ul>

<p>Price: ${currentCash}$ </p>  
</div>`);
}

