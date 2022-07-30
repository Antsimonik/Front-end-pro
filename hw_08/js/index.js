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

let red = ``;
    orange = ``;
    yellow = ``;
    green = ``;
    lightBlue = ``;
    darkBlue = ``;
    violet = ``;
    circle = [].concat(red, orange, yellow, green, lightBlue, darkBlue, violet);
console.log(circle)

let TDs = '';

for (let j = 0; j < circle.length; j++) {
    TDs+=(`<td>${circle[j]}</td>`);
}

document.write(`<table>
<tr>
${TDs}
</tr>`)

for (j = 0; j < rainbow.length; j++) {
    TDs+=(`<td>${rainbow[j]}</td>`);
}

document.write(`<table>
<tr>
${rainbow.join(` `)}
</tr>`)
