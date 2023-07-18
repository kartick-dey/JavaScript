let couter = 0;

function getData() {
  console.log('fetch data...' + couter++);
}

const debounce = function (fn, delay) {
  let timer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
};

const debounce1 = debounce(getData, 1000);
