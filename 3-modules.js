// CommonJS - every file is module (By Default)
// Modules - Encapsulated Code (Only Share Minimun)
// Dividing code into modules
// const names = require('./4-names')
const {john,peter} = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
const sum = require('./my-modules/sum')
const sums = require('./my-modules/sums');
const mydata = require('./my-modules/data')
require('./7-mind-grenade')

// sayHi("susan");
// sayHi(names.john)
// sayHi(names.peter)
// sayHi(john);
// sayHi(peter);
// console.log(data);

// console.log(names);

// console.log(sum(1,2));
// console.log(sums.sums(1,2,3,4));
console.log(mydata);