const root = document.querySelector(`ul#root`)
const setFirstItemClassBYLevel = (ul, level) => {
  level--;

  if(level>0){
    const LIs = [...ul.children];
    console.log(LIs);

  LIs.forEach(li => {
    // console.dir(li);

    let InnerULs = [...li.children];
    // console.log(InnerULs);

    InnerULs.forEach(innerUl => setFirstItemClassBYLevel(innerUl, level));
  })  
  } else {
    let LiFirst = ul.querySelector(`li:first-of-type`);
    LiFirst.classList.add(`first`);
  }
}

setFirstItemClassBYLevel(root, 2);