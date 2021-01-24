let name = {
    first: "Kartick",
    last: "Dey"
};

let printName = function (hometown, state, pin) {
    console.log(this.first + " " + this.last + " from " + hometown + ", " + state + " " + pin);
};

let printAny = function (hometown) {
    console.log("I am from printAny");
};

let printMyName = printName.bind(name, "Bankura");
printMyName();

let name2 = {
    first: "KD",
    last: "PD"
};

// This myBind() is similar to bind() method. This is the polyfill
Function.prototype.myBind = function (param1, ...otherParams) {
    let obj = this;
    return function (...args) {
        obj.apply(param1, [...otherParams, ...args]);
    }
};

let printMyName2 = printName.myBind(name2, "Bisnhunpur", "Puncha");
// let printMyName2 = printAny.myBind(name2, "Bisnhunpur");
printMyName2("WB", 722144);