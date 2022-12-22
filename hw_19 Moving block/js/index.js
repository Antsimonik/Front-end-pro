const block = document.querySelector(".block");

const maxWidth = window.innerWidth-block.offsetWidth;
const maxHeight = window.innerHeight-block.offsetHeight;

const STOP = (newBg=`yodaBoom`) => {
	const bg = block.style.backgroundImage;
	block.style.backgroundImage = `url(yoda/${newBg}.gif)`;
	setTimeout(() => block.style.backgroundImage = bg, 1000);
}

const STEP = 10;

const KEYS = {
	37: () => {
		// ArrowLeft
		let deadline = block.offsetLeft - STEP;

		if(deadline<0){
			STOP();
			block.style.left = `${parseInt(block.style.left)+STEP}px`;
		} else{
			block.style.left = !block.style.left ? `-${STEP}px` : `${parseInt(block.style.left)-STEP}px`;
		}
	},
	38: () => {
		// ArrowTop
		let deadline = block.offsetTop - STEP;

		if(deadline<0){
			STOP();
			block.style.top = `${parseInt(block.style.top)+STEP}px`;
		} else{
			block.style.top = !block.style.top ? `-${STEP}px` : `${parseInt(block.style.top)-STEP}px`;
		}
	},
	39: () => {
		// ArrowRight
		let deadline = block.offsetLeft + STEP;

		if(deadline>maxWidth){
			STOP();
			block.style.left = `${parseInt(block.style.left)-STEP}px`;
		} else{
			block.style.left = !block.style.left ? `${STEP}px` : `${parseInt(block.style.left)+STEP}px`;
		}
	},
	40: () => {
		// ArrowBottom
		let deadline = block.offsetTop + STEP;

		if(deadline>maxHeight){
			STOP();
			block.style.top = `${parseInt(block.style.top)-STEP}px`;
		} else{
			block.style.top = !block.style.top ? `${STEP}px` : `${parseInt(block.style.top)+STEP}px`;
		}
	},
	32: () => {
		// Space
		STOP(`yodaSpace`);
		block.style.transform+="translateY(-50px)"
		setTimeout( ()=>block.style.transform+="translateY(+50px)", 400);
	},
	17: () => {
		// Control
		STOP(`yodaControl`);
		block.style.transform = `scaleY(0.5)`;
		setTimeout( ()=>block.style.transform = ``, 400);
 	} 	
}

document.addEventListener(`keydown`, event => {
	if(event.keyCode === 32 && event.repeat) // remove repeating move for Space button
		return;

	KEYS[event.keyCode] && KEYS[event.keyCode]();
});

// const body = document.querySelector(`body`);
// body.style.height = `100vh`;
// body.style.width = `100vw`;

// const clientHeight = document.body.clientHeight;
// const clientWidth = document.body.clientWidth;

// const block = document.querySelector(`#block`);
// console.dir(block);
// block.style.left = 0;
// block.style.top = 0;

// let activeBlock,
//     posY,
//     posX;

// // block.addEventListener(`click`, () => activeBlock = block);

// let viewHeight = clientHeight - 100;
// let viewWidth = clientWidth - 100;

// const blockBems = document.querySelector(`#block-bems`) ;

// blockBems.remove();

// function getBems (){
//   setTimeout(()=>block.prepend((blockBems)));
//   setTimeout(()=>blockBems.remove(), 2000);
// }

// const p = document.querySelector(`p`);

// const movingUp = block => {
//   if (posX <= 1) {
//     block.style.top = (parseInt(block.style.top) + 20) + `px`;
//     getBems();
//   } else {
//     block.style.top = (parseInt(block.style.top) - 10) + `px`;
//   }
// }

// const movingRight = block => {
//   if (posY >= viewWidth) {
//     block.style.left = (parseInt(block.style.left) - 20) + `px`;
//     getBems();
//   } else {
//     block.style.left = (parseInt(block.style.left) + 10) + `px`;
//   }
// }
// const movingDown = block => {
//   if (posX >= viewHeight) {
//     block.style.top = (parseInt(block.style.top) - 20) + `px`;
//     getBems();
//   } else {
//     block.style.top = (parseInt(block.style.top) + 10) + `px`;
//   }
// }
// const movingLeft = block => {
//   if (posY <= 0) {
//     block.style.left = (parseInt(block.style.left) + 20) + `px`;
//     getBems();
//   } else {
//     block.style.left = (parseInt(block.style.left) - 10) + `px`;
//   }
// }

// const jumpsUp = block => {
//   setTimeout(()=>movingUp(block));
//   block.style.transition = `1s`
//   setTimeout(()=>block.style.transition = "", 1000);
//   setTimeout(()=>movingDown(block), 500);
// }

// const sitDown = block => {
//   const clientHeightBlock = block.clientHeight,
//         clientWidthBlock = block.clientWidth;

//   function getProc (x){
//     return clientHeightBlock / 100 * x;
//   }

//   function heigtWidthBlockDown () {
//     block.style.height = getProc(40) + `px`;
//     block.style.width = getProc(125) + `px`;
//   };

//   function heigtWidthBlockUp () {  
//     block.style.height = clientHeightBlock + `px`;
//     block.style.width = clientWidthBlock + `px`;
//   }   

//   setTimeout(()=> heigtWidthBlockDown(block),);
//   block.style.transition = `1s`
//   setTimeout(()=>block.style.transition = "", 1000);
//   setTimeout(()=> heigtWidthBlockUp(block), 1000);
// }

// const EVENTS = {
//   37: block => movingLeft(block),
//   38: block => movingUp(block),
//   39: block => movingRight(block),
//   40: block => movingDown(block),
//   32: block => jumpsUp(block),
//   17: block => sitDown(block)
// }

// document.addEventListener(`keydown`, event => {
//   EVENTS[event.keyCode] && EVENTS[event.keyCode](block); 
//   posX = block.offsetTop;  // верхний отступ эл-та от родителя
//   posY = block.offsetLeft; // левый отступ эл-та от родителя
//   console.log(event.type, posX, posY);
// })