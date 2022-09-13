const checkedFigureClass = document.querySelector(`#figureClass`);
const figureColors = document.querySelector(`input[name="figureColor"]`);
const element = document.querySelector(`#element`);
const figureForm = document.querySelector(`#figureForm`);

figureForm.addEventListener(`submit`, event => {

	event.preventDefault();

	element.style.background = figureColors.value;
	element.classList = checkedFigureClass.value;
  console.log(figureRender.value, checkedFigureClass.value)
});