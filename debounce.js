let counter = 0;
const getData = () => {
    // Do some api calls
    console.log("fetching data.....", counter++);
}

let debouncing = function (fn, delay) {
    let timer;
    return function() {
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        },delay)
    }
}

let fetchSuggestions = debouncing(getData, 300);
// fetchSuggestions("data")