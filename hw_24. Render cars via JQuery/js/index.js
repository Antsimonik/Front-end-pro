const URL = `https://raw.githubusercontent.com/brightestsirius/Front-end-Pro-19/master/lesson_27/tesla.json`;
const API = `<img src="https://mc-astro.github.io/tesla-roadster-colors/img`;

const body = $(`.body`);
const myAuto = $(`.myAuto`);
const imgAuto = $(`.imgAuto`);

let divAuto,
    colorAuto,
    autoKey,
    colorTextAuto,
    divBtns,
    inputBtn;

const renderAuto = () => {
  divAuto = $('<div></div>')
    .addClass(`myAuto ${autoKey.img}`)
    .css(`display`, `none`);
  $(body).prepend(divAuto);

  renderImgAuto();
  renderTextAuto();
}

const renderImgAuto = () => {
  colorAuto = $(API+`/${autoKey.img}.jpg" alt="tesla ${autoKey.title}">`)
    .addClass(`imgAuto`);
    $(divAuto).append(colorAuto);
}

const renderTextAuto = () => {
  colorTextAuto = $(`<div></div>`)
    .text(autoKey.title)
    .addClass(`colorText`);
    $(divAuto).append(colorTextAuto);
}

let divContainerBtns = $(`<div class= "divContainerBtns"></div>`);
$(body).append(divContainerBtns);

const renderBtns =() => {
  divBtns = $(`<div></div>`).addClass(`colorBtns`);
  inputBtn = $(`<input type="button"></input>`)
    .addClass(`colorBtn ${autoKey.img}`)
    .css(`background-color`, `${autoKey.color}`);
      $(divContainerBtns).append(divBtns);
      $(divBtns).append(inputBtn);
}

const activeColorStyle = () => {
  $(`.myAuto.active`).css(`display`, `block`);
}

const changeAuto = () => {
  $(`.myAuto.active`).css(`display`, `block`);
}

const changeColorBtns = () =>{
  const colorBtnsClass = $(`.${autoKey.img}`);
  const titleBtnsClass = $(`.${autoKey.title}`);

  colorBtnsClass.on(`click`, () => {

      $(colorBtnsClass).siblings().removeClass('active');
      $(colorBtnsClass).addClass('active');

      changeAuto()
  })
}

$.ajax({
	url: URL,
	type: "GET",
	dataType: "JSON",
	success: function (data) {
    $.map(data, function(key) {
      autoKey = key;
      renderAuto();
      renderBtns();
      changeColorBtns();
    });
	},
	error: error => {
		console.log(error);
	}
});