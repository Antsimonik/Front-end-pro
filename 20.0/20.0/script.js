//  Drag & Drop

// const block = document.querySelector(`.block`);

// block.addEventListener(`mousedown`, e=>{
//     xStart = e.clientX,
//     yStart = e.clientY;

//     console.log(`down:`, xStart, yStart);

//     block.addEventListener(`mousemove`, blockMoving);
//     document.addEventListener(`mouseup`, mouseUp);
// })

// const blockMoving = e => {
//     xEnd = e.clientX,
//     yEnd = e.clientY;

//     console.log(`up:`, xEnd, yEnd);

//     xDiff = xEnd - xStart;
//     yDiff = yEnd - yStart;

//     block.style.left = !block.style.left ? `${xDiff}px` : `${parseInt(block.style.left) + xDiff}px`;
//     block.style.top = !block.style.top ? `${yDiff}px` : `${parseInt(block.style.top) + yDiff}px`;

//     xStart = xEnd;
//     yStart = yEnd;
// };

// const mouseUp = e => {
//     xEnd = e.clientX,
//     yEnd = e.clientY;

//     console.log(`up:`, xEnd, yEnd);

//     xDiff = xEnd - xStart;
//     yDiff = yEnd - yStart;

//     block.style.left = !block.style.left ? `${xDiff}px` : `${parseInt(block.style.left) + xDiff}px`;
//     block.style.top = !block.style.top ? `${yDiff}px` : `${parseInt(block.style.top) + yDiff}px`;

//     block.removeEventListener(`mousemove`, blockMoving);
//     document.removeEventListener(`mouseup`, mouseUp);
// };

//  mousemove

// const block = document.querySelector(`.block`);

// block.addEventListener(`mouseover`,e=>console.log(e.type, e.target.className));
// block.addEventListener(`mouseout`,e=>console.log(e.type, e.target.className));

// block.addEventListener(`mouseenter`,e=>console.log(e.type));
// block.addEventListener(`mouseleave`,e=>console.log(e.type));

//  mouseover
//  mouseout
//  mouseenter
//  mouseleave

// Bubbling and capturing
// stopPropagation()

// const body = document.querySelector(`body`);
// const block = document.querySelector(`.block`);
// const inner = document.querySelector(`.inner`);
// const paragraph = document.querySelector(`.paragraph`);

// const bodyElements = body.querySelectorAll(`*`);
// console.log(bodyElements);

// bodyElements.forEach(el => {
//     el.addEventListener(`click`, e=>e.stopPropagation());
// })

// body.addEventListener(`click`, ()=>{
//     console.log(`body click!`);
// }, true);

// block.addEventListener(`click`, ()=>{
//     // e.stopPropagation();
//     console.log(`block click!`);
// }, true)

// inner.addEventListener(`click`, ()=>{
//     // e.stopPropagation();
//     console.log(`inner click!`);
// })

// paragraph.addEventListener(`click`, ()=>{
//     // e.stopPropagation();
//     console.log(`paragraph click!`);
// })

// keyboard events
//     onkeydown
//     onkeyup

// const block = document.querySelector(`.block`);
// const STEP = 10;

// const ArrowUpFunc = () => {
//     block.style.top = !block.style.top ? `-${STEP}px` : `${parseInt(block.style.top)-STEP}px`;
// }

// const KEYS = {
//     ArrowUp: ArrowUpFunc,
//     ArrowDown: () => {
//         block.style.top = !block.style.top ? `${STEP}px` : `${parseInt(block.style.top)+STEP}px`;
//     },
//     ArrowRight: () => {
//         block.style.left = !block.style.left ? `${STEP}px` : `${parseInt(block.style.left)+STEP}px`;
//     }
// }

// document.addEventListener(`keydown`, e=>{
//     // if(e.altKey && e.keyCode === 221){
//     //     alert('Hello');
//     // }

//     // console.log(e.key);

//     KEYS[e.key] && KEYS[e.key]();
// });

// preventDefault()

const toGoogle = document.querySelector(`#toGoogle`);

toGoogle.addEventListener(`click`, e => {
    e.preventDefault();

//    let choice = confirm(`Do you wnat to go to ${e.target.href}?`);

    //document.location.href = e.target.dataset.href;
    window.open(e.target.dataset.href, `_target`);

//    if(choice){
//         setTimeout(()=>{
//             window.open(e.target.href, `_target`);
//        }, 2000);
//    } else{
//        alert(`Ok :(`);
//    }
  
})

// change/input