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


let currentCash = 0;
    userMenu = String();
    isTrueMenu = true;

do {
  userMenu = prompt(`${IS_HAMBURGER} or ${IS_CHEESEBURGER}?`, `cheeseburger`);
  if (isTrueMenu) userMenu = userMenu.trim().toLowerCase();
} while (userMenu !== IS_HAMBURGER && userMenu !== IS_CHEESEBURGER);

switch(userMenu){
  case IS_HAMBURGER:
    currentCash += HAMBURGER_CASH;
    break;
  case IS_CHEESEBURGER:
    currentCash += CHEESEBURGER_CASH;
    let userMenuCheeseburger = confirm(`Would you like to add double cheese?`);
    if(userMenuCheeseburger) currentCash += DOUBLE_CHEESE;
}

console.log(`${currentCash} $, ${isTrueMenu}, ${userMenu}`)

let userMenuPotato = confirm(`Would you like potato?`);
if (userMenuPotato){
  userMenuPotato = prompt(`Choose potato size: small/middle/big`, 'small');
  if(userMenuPotato) userMenuPotato = userMenuPotato.trim().toLowerCase();

  switch(userMenuPotato){
    case `middle`:
      currentCash += MIDDLE_POTATO;
      break;
    case `big`:
      currentCash += BIG_POTATO;
      break;
    default:
      currentCash += SMALL_POTATO;
      userMenuPotato = `small`;
  }
}
console.log(`${currentCash} $, ${userMenuPotato}`)

let userMenuSauce = confirm(`Would you like sauce?`, `yes`);
if (userMenuSauce) {
  userMenuSauce = prompt(`Choose sauce: ketchup/mayonnaise`, `ketchup`);
  if (userMenuSauce) userMenuSauce = userMenuSauce.trim().toLowerCase();

  switch(userMenuSauce) {
    case `mayonnaise` :
      currentCash += MAYONNAISE;
      break;
    default:
      currentCash += KETCHUP;
      userMenuSauce = `ketchup`
  }
  console.log(`${currentCash}$, ${userMenu}, ${userMenuPotato}, ${userMenuSauce}`)
}

document.write(`<h2>Your order is:</h2>
    <ol>
        <li>🍔Bun is: ${userMenu};</li>
        ${userMenuPotato ? `<li>🍟Potato size is: ${userMenuPotato};</li>` : ``}
        ${userMenuSauce ? `<li>🧂Sauce is: ${userMenuSauce};</li>` : ``}
    </ol>
    <p>Price is: ${currentCash}.</p>
`);

