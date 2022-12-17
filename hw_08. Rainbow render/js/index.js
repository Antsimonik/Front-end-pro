let hero = ['Ivan'];
    native = ['York','Of'];
    destination = ['Poltava','In'];
    rainbow = []
    .concat(hero, native, destination)
    .reverse()
    rainbow.splice(0, 2, 'Richard');
    rainbow.pop();
    rainbow.push('Gave','Battle','In','Vain');


console.log(rainbow);

let circle = ['red', 'orange', 'yellow', 'green', 'lightBlue', 'darkBlue', 'violet'];
console.log(circle)

let final = [];

for (let j = 0; j < circle.length; j++) {
    final.push(`<div> 
    <div class="circle" style="background-color: ${circle[j]}"></div>
    <p>${rainbow[j]}</p></div>`)
}    

document.write(`<div class="container">${final.join('')}</div>`)