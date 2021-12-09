// !MODULE
const names = require("./4-name");
const sayHi = require("./5-utils");

const persons = require("./6-alternative-module-export-method");

require("./7-mind-granade");
console.log(names);

sayHi(`${names.john}`);
sayHi(`${names.peter}`);

console.log(persons);
