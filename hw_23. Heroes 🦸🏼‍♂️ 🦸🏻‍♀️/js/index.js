const API = `https://61c9d37520ac1c0017ed8eac.mockapi.io`

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
const heroTableTbody = document.querySelector(`#heroTable tbody`);

const renderComixHero = async () => {
  let users = await controller(API+`/universes`);

  createComixHero.innerHTML = users
      .map(item => `<option value="${item.name}">${item.name}</option>`)
      .join(``);
}
renderComixHero();

createHero.addEventListener(`submit`, async e => {
  e.preventDefault();

  try{
      let newHero = {
          name: createNameHero.value,
          comics: createComixHero.value,
          favourite: createFavouriteHero.checked,
      };

      let storageHero = await controller(API+`/heroes`);
      let nameAlreadyBusy = storageHero.find(hero => hero.name === createNameHero.value);

      if(nameAlreadyBusy){
          console.log(`Користувач з таким ім'ям ${createNameHero.value} вже є в базі 🥵.`);
          return;
      }

      let addedHero = await controller(API+`/heroes`, `POST`, newHero);
      renderHero(addedHero);
      console.log(addedHero)
  } catch(err){
      console.log(`In catch:`, err);
  }
})

const renderHero = hero => {
  let tr = document.createElement(`tr`);
  tr.innerHTML = `<td>${hero.name}</td>
  <td>${hero.comics}</td>`;

  let tdFav = document.createElement(`td`);
  let favInput = document.createElement(`input`);
  favInput.type = `checkbox`;
  favInput.checked = hero.favourite;
  favInput.addEventListener(`change`, async e => {
    await controller(API+`/heroes/${hero.id}`, `PUT`, {favourite: e.target.checked});
  })

  tdFav.append(favInput);

  let tdBtn = document.createElement(`td`);
  let heroBtn = document.createElement(`button`);
  heroBtn.innerHTML = `DELETE`;
  heroBtn.addEventListener(`click`, async () => {
    let deletedHero = await controller(API+`/heroes/${hero.id}`, `DELETE`);
    console.log(deletedHero);
    tr.remove();
  })

  tdBtn.append(heroBtn);

  tr.append(tdFav, tdBtn);

  heroTableTbody.append(tr);
}

const renderStorageHero = async () => {
  let heros = await controller(API+`/heroes`);
  heros
      .forEach(hero => renderHero(hero));
}
renderStorageHero();

