const obj = {
  x: 10,
  y: 20,
  inner: {
      x: 20,
      z: 30
  },
  foo2: {
      k: 23,
      p: 13
  },
  convert() {
    let newObj = {};
  
    for(let key in this){
      let objKey = this[key];
  
      if(typeof objKey === `object`) {
  
        for(let key in objKey){
          newObj[key] = objKey[key];
        }
  
      } else if (typeof objKey != `object`) {
        newObj[key] = objKey;
      }
    }
    return newObj;
  }
};

console.log (obj.convert())

