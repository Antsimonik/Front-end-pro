const animals = [
	['🐭','mouse','Jerry'],
	['🐹','hamster','Biscuit'],
	['🐰','rabbit','Bugs'],
	['🦊','fox','Mrs. Fox'],
	['🐻','bear','Paddington']
];

const food = [
	['🍎','apple',10],
	['🍐','pear',12],
	['🍊','tangerine',15],
	['🍋','lemon',5],
	['🍌','banana',7]
];

const universes = [
	['🖤', 'DC', ['Superman', 'Batman', 'Wonder Woman']],
	['❤️', 'Marvel', ['Iron Man', 'the Hulk', 'Black Widow']]
];

// const type = [
// 	[`Animals Info`, animals]
// 	[`Food Info`, food]
// 	[`Universes Info`, universes]
// ];

let list = [animals, food, universes];


let TRs = [],
		TDs = []
		// anim = JSON.parse(JSON.stringify(animals));
function getInfo(type, typeName){
	// let sum = typeName + ' ' + type;
	if(type, typeName){
		for(let i=0; i<type.length; i++){
			let currentArray = type[i];
			TRs.push(`<tr>${type[i]}</tr>`)
			
			for(let j=0; j<currentArray.length; j++){
				TDs.push(`<td>${currentArray[j]}</td>`)
			}

			// console.log(currentArray)
			// console.log(TDs)
		}
		return `<table>
		<caption>${typeName}</caption>
		${TDs.join` `}
		</table>`
	}
}
console.log(getInfo(animals, `Animals`)) 


// for (let k=0; k<list.length; k++){
// 	let listArray = list[k];
// // function getInfo(type, typeName){
// 	for(let i=0; i<listArray.length; i++){
// 		let currentArray = listArray[i]; 
					
// 		let TDs = [];
// 			for(let j=0; j<currentArray.length; j++){
// 			TDs.push(`<td>${currentArray[j]}</td>`)

// 							// let TDs = [];
							
// 							// for(let k=0; k<currentArray.length; k++){
// 							// 	TDs.push(`<td>${currentArray[k]}</td>`)							
// 							// }
// 		};	
// 		console.log(`<tr>${TDs.join(``)}</tr>`);
// 	}
// }

// let animalsAn = JSON.parse(JSON.stringify(animals)),
// 		foodFo = JSON.parse(JSON.stringify(food)),
// 		universesUn = JSON.parse(JSON.stringify(food))


// for(let i=0; i<type.length; i++){}

	// 		`<p style="margin-bottom: 0">*** ${type[i][0]} ***</p>
	// <div>${type[i][1].join(` `)}</div>`
	// let list = JSON.parse(JSON.stringify(animals, food, universes));

// getInfo(food, `Food`), 
// getInfo(universes, `Universes`)
// let TRs = [];
// function getInfo(type, typeName){
// 	// let sum = typeName + ' ' + type;
// 	if(type, typeName){
// 		for(let i=0; i<type.length; i++){
// 			// let currentArray = type[i];
// 			TRs.push(`<tr>${type[i]}</tr>`)
// 			// console.log(currentArray)
// 			// console.log(TDs)
// 		}
// 		return `<table>
// 		<caption>${typeName}</caption>
// 		${TRs.join` `}
// 		</table>`
// 	}
// }

// function sayHi(type, typeName){
//     let fullName = [typeName];
//     if(universes) fullName.push(universes);

//     console.log(`Hello, ${fullName.join(` `)}!`);
// }

// getInfo(animals, `Animals`)
// getInfo(food, `Food`)
// getInfo(universes, `Universes`)

// console.log (getInfo(animals, `Animals`), getInfo(food, `Food`), getInfo(universes, `Universes`))

	// console.log(sum);
	// for(let i=0; i<type; i++){
	// 	let currentArray = type[i];

	// 	for(let j=0; j<currentArray.length; j++){
	// 				TDs.push(`<td>${type[j]}</td>`)
	// }
	// 			return `<table><tr>${typeName.join(``)}</tr></table>`;
	// for(let i=0; i<list.length; i++){
	// 		let currentArray = list[i]; // [`Anna`, `Jack`, `Anton`]
			
	// 		let TDs = [];
	// 		for(let j=0; j<currentArray.length; j++){
	// 				TDs.push(`<li>${currentArray[j]}</li>`)
	// 		};

	// 		document.write(`<ul>${TDs.join(``)}</ul>`);
	// }


// let users = [`Anna`, `Jack`, `Anton`],
//     animals = [`cat`, `dog`, `lion`],
//     list = [users, animals];

// console.log(list);

// for(let i=0; i<list.length; i++){
//     let currentArray = list[i]; // [`Anna`, `Jack`, `Anton`]
    
//     let LIs = [];
//     for(let j=0; j<currentArray.length; j++){
//         LIs.push(`<li>${currentArray[j]}</li>`)
//     };

//     document.write(`<ul>${LIs.join(``)}</ul>`);
// }