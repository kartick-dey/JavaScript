function square(n) {
  return n * n;
}

Array.prototype.calculate = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

const data = [1, 2, 3, 4, 5];
console.log(data.calculate(square));
