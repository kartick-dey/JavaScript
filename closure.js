function grandParent() {
  let a = 9;
  return function parent() {
    let b = 10;
    return function child() {
      let c = 8;
      console.log(a * b * c);
    };
  };
}

const call = grandParent()();
call();
