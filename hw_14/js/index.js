const vegetables = [
  {
      name: `tomato`,
      icon: `🍅`,
      price: 2.3
  },
  {
      name: `carrot`,
      icon: `🥕`,
      price: 1.5
  },
  {
      name: `corn`,
      icon: `🌽`,
      price: 2.78,
      season: true
  }
];

let arr = [10,20,30];
arr.push(100,200);

Array.prototype.myPush = function(...args){
    console.log(args); // [300,400]
    console.log(this);
debugger
    for(let i=0; i<args.length; i++){
        this[this.length] = args[i];
    }

    return this.length;
}

arr.myPush(300,400);
