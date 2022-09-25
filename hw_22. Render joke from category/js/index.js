const API = `https://api.chucknorris.io/jokes`;

const jokesForm = document.querySelector(`#jokesForm`);
const jokesCategories = document.querySelector(`#jokesCategories`);
const jokesList = document.querySelector(`#jokesList`);

const getData = url => fetch(url)
  .then(data => data.ok ? data.json() : Promise.reject(data.statusText))
  .catch(err => console.log(`In catch: ${err}`));

const renderJokesCategories = () => {
  let cats = getData(API + `/categories`)
  .then(cats => jokesCategories.innerHTML = cats
    .map(cat => `<option name="jokeCat" value="${cat}">${cat}</option>`)
    .join()
  )  
}
renderJokesCategories();

jokesForm.addEventListener(`change`, e=>{
  e.preventDefault();

  let jokeUrl = API;
  
  let selectValue = jokesCategories.options[jokesCategories.selectedIndex].value;
  jokeUrl += `/random?category=${selectValue}`;

  getData(jokeUrl)
    .then(data => renderJoke(data))
})

const select = document.querySelector(`select`);
select.addEventListener(`change`, e => {
    let selectedOption = e.target.value; // select.value;

    let option = select.querySelector(`option[value="${selectedOption}"]`);
    // option.disabled = true;   
    option.setAttribute(`disabled`, true);
});

const renderJoke = joke => {
  const li = document.createElement(`li`);
  li.className = `joke__block`;
  li.innerHTML = `<p>Category: <b>${joke.categories[0]}</b></p>
  <p>${joke.value}</p>`;

  const removeBtn = document.createElement(`button`);
  removeBtn.className = `joke__block--remove`;
  removeBtn.innerHTML = `Remove joke`;
  
  removeBtn.addEventListener(`click`, () => {
    // console.log(joke.id)
    li.remove();

      select.addEventListener(`change`, e => {
        let selectedOption = e.target.value; // select.value;
    
        let option = select.querySelector(`option[value="${selectedOption}"]`);

        option.setAttribute(`disabled`, false);
    });
  })

  li.append(removeBtn);

  jokesList.append(li);
}


  

