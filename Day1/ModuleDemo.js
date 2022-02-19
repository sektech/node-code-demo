//import c1 from "./Operations";
const c1 = require("./Operations");
//const calc = new c1();
const c2 = require("./ExportOperation");

console.log(c1.add(2, 45));

const { add, sub, mult } = require("./ExportOperation");
console.log(add(2, 5));
console.log(sub(2, 5));
console.log(mult(2, 5));
