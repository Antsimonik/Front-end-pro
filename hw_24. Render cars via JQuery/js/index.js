const URL = `https://raw.githubusercontent.com/brightestsirius/Front-end-Pro-19/master/lesson_27/tesla.json`;

const body = $(`.body`);

let carImg = $(`<img>`)
  .addClass(`carImg`);
$(body).append(carImg);

let carImgTitle = $(`<div>`)
  .addClass(`carImgTitle`);
$(body).append(carImgTitle);

const renderCar = (item) => {
  carImg.attr(
    `src`,
    `https://mc-astro.github.io/tesla-roadster-colors/img/${item.img}.jpg`
  );
  carImg.attr(`alt`, item.title);

  carImgTitle.html(item.title);
  carImgTitle.css(`color`, item.color);
};

let divContainerBtns = $(`<div>`)
  .addClass(`divContainerBtns`);
$(body).append(divContainerBtns);

const renderColorBtns = (data) => {
  $(data).each((index, item) => {
    let btn = $(
      `<button class="dot" style="background-color: ${item.color}"></button>`
    );
    btn.on(`click`, () => renderCar(item));
    divContainerBtns.append(btn);
  });
};

$.ajax({
  url: URL,
  type: "GET",
  dataType: "JSON",
  success: function (data) {
    renderColorBtns(data);
    renderCar(data[0]);
  },
  error: error => {
    console.log(error);
  }
});