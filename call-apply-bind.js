function getName(city, state) {
  console.log(`${this.fname} ${this.lname} is from ${city} in state ${state}`);
}

const user = {
  fname: 'Kartick',
  lname: 'Dey',
};

// call and apply called immediately there and then
getName.call(user, 'Bankura', 'WB');
getName.apply(user, ['Bangalore', 'karnataka']);

// but bind will call whenever user want
// const handler = getName.bind(user, 'Bishnupur', 'WB');

// handler()

// bind this getName function with event listner

const btn123 = document.querySelector('button');
btn123.addEventListener('click', getName.bind(user, 'Bishnupur', 'WB'));
