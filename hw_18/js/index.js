const body = document.querySelector(`body`);
body.style.height = `100vh`;
body.style.width = `100vw`;
console.dir(body)

const clientHeight = document.body.clientHeight;
const clientWidth = document.body.clientWidth;
console.log(clientHeight)
console.log(clientWidth)

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function convertPXToVW(px) {
	return px * (100 / document.documentElement.clientWidth);
}

const block = document.querySelector(`.block`);
block.style = `background-color: rgb(255, 0, 0);`;
block.style.left = 0;
block.style.top = 0;

const changeColor = setInterval(() => {
  let colorInterval = getRandomIntInclusive(0, 255);
  block.style = `background-color: rgb(${colorInterval}, ${colorInterval + 10}, ${colorInterval + 40})`;
}, 5000);

const movingBlock = setInterval(() => {
  let viewHeight = clientHeight - 100;
  let viewWidth = clientWidth - 100;
  let blockInterval = getRandomIntInclusive(0, viewHeight);
  if((parseInt(block.style.left) + blockInterval) < viewHeight){
    block.style.left = (parseInt(block.style.left) + blockInterval) + `px`;
    block.style.top = (parseInt(block.style.top) + blockInterval) + `px`;
    console.log(block.style.left)
  } else if ((parseInt(block.style.left) + blockInterval) > viewHeight) {
    block.style.left = (Math.abs((parseInt(block.style.left) - blockInterval))) + `px`;
    block.style.top = (Math.abs((parseInt(block.style.top) - blockInterval))) + `px`;
    console.log(block.style.left)
  } else {
    block.style.top = 0;
    block.style.left = 0;
  }
}, 1000);
