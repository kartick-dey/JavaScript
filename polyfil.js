function getName(vill, po) {
  console.log(`${this.fname} ${this.lname} from Vill: ${vill} and P.O.: ${po}`);
}

const user = {
  fname: 'kartick',
  lname: 'Dey',
};

const getNameBind = getName.bind(user, 'Puncha');
getNameBind('Teliberia');

Function.prototype.myBind = function (...args) {
  const obj = this;
  return function (...args2) {
    obj.apply(args[0], [...args.slice(1), ...args2]);
  };
};

const getNameBind2 = getName.myBind(user, 'Puncha');
getNameBind2('Teliberia');
