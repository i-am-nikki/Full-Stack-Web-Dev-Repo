// let n = 5;

// for (let i=0; i<=n ; i++){
//     console.log("hello,", i);
// }

// console.log(process.argv);
//by default process.argv has 2 values(exe file of node & current file path) without argument.
/*We can pass arguments like node script.js arg1 arg2 arg3 .... 
then it will come along with those 2 values. and we can use those arguments now.*/
//e.g

// let args= process.argv;
// for(let i=2; i<args.length; i++){
// //starting loop with initialization of 2 to ignore default 2 values. 
// console.log("Hello", args[i]);
// }

// const somevalue = require("./math");
// console.log(somevalue);

// const math = require("./math");
// console.log(math);
// console.log(math.sum(2,3));
// console.log(math.mul(3,3));

//Acquiring all the info of Fruits named directory here..

// const info = require("./Fruits");
// console.log(info);
// console.log("0th index file with name var-->", info[0].name);

// const figlet = require("figlet");

// //copied the below code from
// //https://www.npmjs.com/package/figlet
// figlet("NIKKI MALIK", function (err, data) {
//     if (err) {
//       console.log("Something went wrong...");
//       console.dir(err);
//       return;
//     }
//     console.log(data);  
//   });


//Importing the math.js instead or requiring....
import {sum,mul,PI,g} from "./math.js"

console.log(sum(1,2), mul(2,4), PI, g);
import { generate, count } from "random-words";
console.log(generate());