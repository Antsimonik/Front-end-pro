const checkedFigureClass = document.querySelector(`#figureClass`);
const figureRender = document.querySelector(`#figureRender`);
const element = document.querySelector(`#element`);
const figureForm = document.querySelector(`#figureForm`)

figureForm.addEventListener(`submit`, event => {

  event.preventDefault();

  let variant = checkedFigureClass.value;
  let colors = [...document.querySelectorAll(`input[name="figureColor"]`)].map(item => item.value);

  let figure = {
      variant: variant,
      colors: colors
  }

  if(figure.colors) {
    element.style.background = figure.colors;
  }

  switch (figure.variant) {
    case `square`:
      element.classList.add(`square`);
      break;
    case `rectangle`:
      element.classList.add(`rectangle`);
      break;
    case `circle`:
      element.classList.add(`circle`);
      break;  
  };
  console.log(figure);
  console.log(JSON.stringify(figure));
})
