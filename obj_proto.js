const obj = {
    name: "KD",
    last: "DE",
    getFun: () => {
        console.log("Obj");
    }
};

const obj1 = {
    name: "DK"
};

obj1.__proto__ = obj;

console.log(obj1.__proto__);