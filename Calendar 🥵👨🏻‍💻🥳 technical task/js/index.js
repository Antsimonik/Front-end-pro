// let btn = document.querySelector(`button`);
// console.log(btn.innerHTML);
// formBtn.innerHTML = "<h1>;lsad;l</h1>";
// localStorage.setItem(`by`, `set`);
// console.log(localStorage.getItem(`by`));
let xhr = new XMLHttpRequest();

xhr.open(`GET`, `./files/animals.json`, false);
xhr.send();

let animals = JSON.parse(xhr.response);
console.log(xhr);
console.log(xhr.response);
console.log(animals);
console.log(animals);

let xhrCat = new XMLHttpRequest();

xhrCat.open(`GET`, `./files/cat.json`, false);
xhrCat.send();

let cat = JSON.parse(xhrCat.response);
console.log(xhrCat)
console.log(xhrCat.response)
console.log(cat)
