let arr = [];
    randomValue = Math.round(Math.random()*10);
    result = 1;

do {
    let userLength = +prompt(`Enter number of lenghts 2 - 10`);
    userLength = Math.abs(userLength);
    userLength = Math.round(userLength);
    arr.length = userLength;

    for (let i = 0; i<=userLength -1; i++){
        arr[i] = randomValue;
        result = result * arr[i];
    }

} while (!arr.length || arr.length < 2 || arr.length >10);

console.log(arr);
console.log(result);