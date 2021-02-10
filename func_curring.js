/**
 * Function curring using bind() method
 */

let multiply = function(x, y) {
    console.log(x * y);
}

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3);

/**
 * Function curring uaing closure.
 */

let addition = function (a) {
    return function(b) {
        console.log(a + b);
    }
}

let add = addition(5);
add(8);




// Function curring
// Using bind method
function multi(a, b) {
    console.log(a * b);
}
const multiply1 = multi.bind(this, 5);
multiply1(8)

// Using closure

const add1 = (a) => {
    return (b) => {
        console.log(a + b);
    }
}

const addition1 = add1(2);
addition1(8);