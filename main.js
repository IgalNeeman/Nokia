const scanf = require('scanf');
const create_interfaces = require("./create_interfaces");
const send_to_sys = require('./send_to_system');

module.exports = function main (n)
{
let x,result;

// console.log("enter size number?");
// n = scanf('%d');

x = create_interfaces(n);
console.log(`when n= ${n} the x is: ${x}`);
result = send_to_sys(x);
return result
};