const API = `https://633357a1573c03ab0b5c6efb.mockapi.io/api`;
const API2 = `https://61c9d37520ac1c0017ed8eac.mockapi.io`

const controller = async (url, method=`GET`, obj) => {
  let options = {
      method: method,
      headers: {
          "Content-type": "application/json"
      }
  }

  if(obj) options.body = JSON.stringify(obj);

  let request = await fetch(url, options),
      response = request.ok ? request.json() : Promise.reject();

  return response;
}

const createNameHero = document.querySelector(`#createNameHero`);
const createComixHero = document.querySelector(`#createComixHero`);
const createFavouriteHero = document.querySelector(`#createFavouriteHero`);
const createHero = document.querySelector(`#createHero`);
const heroTable = document.querySelector(`#heroTable`);
const taskTableHero = document.querySelector(`#taskTableHero`);

// renderComixHero
const renderHeroAll = async () => {
  let users = await controller(API2+`/heroes`);

    users
      .forEach(hero => renderHero(hero));
}
renderHeroAll();
// renderComixHero

// renderComixHero
const renderComixHero = async () => {
  let users = await controller(API2+`/universes`);

  createComixHero.innerHTML = users
      .map(item => `<option value="${item.name}">${item.name}</option>`)
      .join(``);
}
renderComixHero();
// renderComixHero

// createHero
createHero.addEventListener(`submit`, async e => {
  e.preventDefault();

  try{
      let newHero = {
          name: createNameHero.value,
          comics: createComixHero.value,
          favourite: createFavouriteHero.value,
      };

      let storageHero = await controller(API2+`/heroes`);
      let nameAlreadyBusy = storageHero.find(hero => hero.name === createNameHero.value);

      if(nameAlreadyBusy){
          console.log(`Користувач з таким ім'ям ${createNameHero.value} вже є в базі 🥵.`);
          return;
      }

      let addedHero = await controller(API2+`/heroes`, `POST`, newHero);
      renderHero(addedHero);
      console.log(addedHero)
  } catch(err){
      console.log(`In catch:`, err);
  }
})
// createHero

// renderHero
const renderHero = hero => {

  let tr = document.createElement(`tr`);
  tr.innerHTML = `<td>${hero.name}</td>
  <td>${hero.comics}</td>
  <td>${hero.favourite}</td>`;

  let tdBtn = document.createElement(`td`);
  let heroBtn = document.createElement(`button`);
  heroBtn.innerHTML = `DELETE`;
  heroBtn.addEventListener(`click`, async () => {
    tr.remove();
    let deletedHero = await controller(API2+`/heroes/${hero.id}`, `DELETE`);
    console.log(deletedHero)
  })

  tdBtn.append(heroBtn);

  tr.append(tdBtn);

  heroTable.append(tr);
}
// renderHero

// renderStorageHero
const renderStorageHero = async () => {
  let heros = await controller(API2+`/heroes`);
  heros
      .forEach(hero => renderHero(hero));
}
renderStorageHero();
// renderStorageHero

// renderHeros
const renderHeros = async () => {
  let heros = await controller(API2+`/heroes`);
  heros
      .forEach(hero => renderHero(hero));
}
renderStorageHero();
// renderHeros
