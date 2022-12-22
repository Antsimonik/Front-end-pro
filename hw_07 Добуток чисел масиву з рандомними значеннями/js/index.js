let arr = [], arrLng, mul = 1;

do {
    arrLng = +prompt(`Please, enter array lenght`);
    if(arrLng) arrLng = Math.round(Math.abs(arrLng));
} while (!arrLng || arrLng > 10 || arrLng < 2)

for(let i = 0; i < arrLng; i++) {
    arr[i] = Math.round(Math.random()*10); 
    mul *= arr[i];
}

console.log(arr);
console.log(mul);