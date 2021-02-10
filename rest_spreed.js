/**
 * Rest parameter =>
 * Rest parameter is help to handle function parameter in a easy way.
 * No metter how much arguments is passed in a func call
 * it will store all the arguments in a array parameter. * 
 */
function add (...restParams) {
    console.log(restParams.reduce((a,b) => a + b));
    console.log(typeof restParams);
    console.log(restParams);
}

// add(1,2,3, 'KD', 2.5);

/**
 * Spread operator replaced apply(), copy() and concat()
 */

 function sum(a, b, c) {
     console.log(a+b+c);
 }

 let arr = [1, 2, 3];
//  sum.apply(this, arr);
sum(...arr);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

// arr1 = arr1.concat(arr2);
// arr1 = arr1.concat(arr3);

let arr4 = [...arr1, ...arr2, ...arr3];
console.log(arr4);

