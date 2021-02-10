class Employees{
    constructor(myname, age, desig) {
        this.myname = myname;
        this.age = age;
        this.desig = desig;
    }

    biodata() {
        console.log(`Hi, I am ${this.myname} from biodata() in Employees class`)
    }
}

class Programmer extends Employees{
    constructor(myname, age, desig,game) {
        super(myname, age, desig);
        this.game = game;
    }
}

let obj = new Programmer('Kartick', 26, 'SW');
obj.biodata();