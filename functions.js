/**
 * What is the difference between function statement and expression ?
 * 
 * Ans: The diffenece is in hoisting. 
 */

// What happens if I call those function before defination thats called hoisting.
a(); // In memory creation phase - a : will be store whole function code because its pure function. 
// b(); // In memory creation phase - b : will be treat as any other varibles and stored undefined as a value.

// What is function Statement. Func statement and func declaration both are same.
function a() {
    console.log("a called");
}

// what is function Expression

var b = function () {
    console.log("b called");
}

/**
 * What is anonymous function ?
 * 
 * Ans: A function without name and also do'nt have indentity is called anonymous func. Looks like a function statement.
 * Ex: function () {
 * console.log("Anonymous function")
 * } --- If it will run then it will give an syntexerror. 
 * Usage: Anonymous function is used in a place where functions is used as a value.
 */

// What is named function expression ?

var c  = function d () {
    console.log("c called");
}

/**
 * What is first class function ?
 * 
 * Ans: The ability of functions to be used as value and passed to another functions as an argument and also can be returned the function as well.
 */


 function x(param) {
     console.log(param);
     return param;
 }

 var z = x(function () {
     console.log("Passed anonymous function as a argument")
 })

 z();