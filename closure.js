/**
 * Constructor function with closure.
 * 
 * what is closure ?
 * 
 * Ans: Closure is the combination of function and it's lexical scope or environment bundle together 
 * and also consider below comment as a closure.
 */

function Counter() {
    var count = 0;
    this.incremenCCounter = () => {
        count++;
        console.log(count);
    };

    this.decrementCounter = () => {
        count--;
        console.log(count);
    }
}

var counter1 = new Counter();
counter1.incremenCCounter();
counter1.decrementCounter()
var counter2 = new Counter();
counter2.incremenCCounter();
counter2.decrementCounter();

/**
 * Even the function is call in another scope it still remember its lexical scope where the function is originally present.
 * this means that th fucntion can access the varibales, parameters and functions of it's parent func even its call from another scope.
 */

function outer(b) {
    const a = 10;
    function inner() {
        console.log(a, b);
    };

    return inner;
}

var close = outer("Kartick"); // It return the inner function to the func variable.
close(); // or we can write in one line like outer()();

function outest() {
    var c = 20;
    function outer(b) {
        let a = 10;
        function inner() {
            console.log(a, b, c);
        };
    
        return inner;
    }

    return outer;
}
let a = 100;
var close1 = outest()("Kartick");
close1();

// If a varibale can cont find in scope chain then it will through a reference error.

/**
 * Use or advantages and dissadvantages of closure ?
 * 
 * Ans: It is very beautiful feature in JS.
 * Advantages:
 * 1. It's used in module pattern.
 * 2. use in function curring.
 * 3. use in some hierwall function like once and memoize
 * 4. most importantly used in data hiding to impelement Encapsulation in JS.
 * 
 * Disadvantage:
 * 1. Every time when we create closure it will consumes memory and those closed over varibale are not gurbage collected.
 * and also if it is not handdle properly it will leak memory.
 */

 /**
  * What is gurbage collector ?
  * 
  * Ans: Gurbage collector is a program in JS engine or browser which helps to freeze the used memory.
  */

