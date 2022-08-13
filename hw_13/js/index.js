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
  convert(){
    let  newObj = {};
    delete this.inner && delete this.foo2;
    newObj = Object.assign(obj, inner, foo2);
    newObj = obj;
    return obj;
  }
} 
const inner = obj.inner;
const foo2 = obj.foo2;
console.log(obj.convert())
