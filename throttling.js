let counter = 0;

function fetchData(context, args) {
  console.log('args:', args);
  console.log('context:', context);
  console.log('Fetch Data : ', counter++);
}

const throttling = function (fn, delay) {
  let flag = true;
  return function () {
    if (flag) {
      const context = this,
        args = arguments;
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};

const callThrottling = throttling(fetchData, 2000);

const btn = document.getElementById('btn');
btn.addEventListener('click', (event) => callThrottling(event, 'called'))
