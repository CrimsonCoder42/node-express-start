//Commonjs is a module formatting system. It is a standard for structuring and organizing JavaScript code. CJS assists in the server-side development of apps and it’s format has heavily influenced NodeJS’s module management.

// Modules in Node. js is a simple or complex functionality organized in single or multiple JavaScript files which can be reused throughout the Node. js application.

const {john, peter} = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require("./7-mind-grenade");

// console.log(data)
// sayHi("Susan");
// sayHi(john);
// sayHi(peter);