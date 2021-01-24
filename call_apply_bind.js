let name = {
    first: "Kartick",
    last: "Dey",
    printName: function () {
        console.log(this.first + " " + this.last);
    }
}

name.printName();

let name2 = {
    first: "K",
    last: "D"
};

// Function borrowing and application of call() method
name.printName.call(name2);

/**
 * 
 * Another type to use call()
 * 
 */

let name3 = {
    first: "P",
    last: "D"
};

let printFullName = function (hometown, state) {
    console.log(this.first + " " + this.last + " from " + hometown + ", " + state);
}

// Function borrowing using call() method
printFullName.call(name3, "Bankura", "WB");

// function borrowing using apply() method
printFullName.apply(name3, ["Bishnupur", "WB"]);

// function borrowing using bind() method. It's used cache because it call be called later.
let printNameVar = printFullName.bind(name3, "Bankura", "WB");
console.log(printNameVar);
printNameVar();
