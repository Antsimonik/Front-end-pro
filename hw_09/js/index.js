let sports = [
	['skier','⛷'],
	['snowboarder','🏂'],
	['apple','🍎'],
	['hockey','🏒'],
	['ice skate','⛸'],
	['swimmer','🏊'],
	['surfer','🏄‍'],
	['watermelon','🍉'],
	['lemon','🍋'],
	['rowboat','🚣'],
	['bicyclist','🚴‍']
];

let summerSports = sports.slice(5)
let winterSports = sports.slice(0,5);
let fruitSummer = summerSports.splice(2,2);
let fruitWinter = winterSports.splice(2,1);
let fruits = [].concat(fruitSummer, fruitWinter);
let summerArray = [];
		winterArray = [];
		fruitsArray = [];
		seasons = [`Winter sports`, `Summer sports`, `Fruits`];

for(let k=0; k<winterSports.length; k++){
	winterArray.push(`<div>${winterSports[k].join(`: `)}</div>`)
}

for(let h=0; h<summerSports.length; h++){
	summerArray.push(`<div>${summerSports[h].join(`: `)}</div>`)
}

for(let l=0; l<fruits.length; l++){
	fruitsArray.push(`<div>${fruits[l].join(`: `)}</div>`)
}

document.write(`<p style="margin-bottom: 0">*** ${seasons[0]} ***</p>
<div>${winterArray.join(``)}</div>
<p style="margin-bottom: 0">*** ${seasons[1]} ***</p>
<div>${summerArray.join(``)}</div>
<p style="margin-bottom: 0">*** ${seasons[2]} ***</p>
<div>${fruitsArray.join(``)}</div>`)

console.log(summerSports)
console.log(winterSports)
console.log(fruits)