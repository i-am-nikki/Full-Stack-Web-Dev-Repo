// JavaScript (Part 8)....................................................................
// let arr=[1,2,3,4,5];

//Via passing function def directly.......................................
// arr.forEach(function(el){
//     console.log(el);
// });

//Declarative Function...................................................
// function print(el){
//     console.log(el);
// }
// arr.forEach(print);

//Function Expression....................................................
// let print = function(el){
//     console.log(el);
// }
// arr.forEach(print);

//Arrow Function...............................................
// let print = (el) =>{
//     console.log(el);
// }
// arr.forEach(print);

//OR......................................................
// arr.forEach((el)=> {
//     console.log(el);
// });

// WE CAN USE FOREACH METHOD FOR OUR OBJECTS....................
//Creating array of objects...

// let arr= [{
//    name: "Nikki",
//    marks: 88,
// },
//{
//     name: "Yug",
//     marks: 87,
// },
// {
//     name: "Yogendra",
//     marks: 89,
// }];

// arr.forEach((student)=>{
//    console.log(student.marks);
// })

//Map Function......................................................
// let arr = [1,3,4,5,35];
// console.log(arr);
// let square = arr.map((el)=> {
//     return el*el;
// });
// console.log(square);

// let arr0= [{
//     name: "Nikki",
//     marks: 88,
// },
// {
//     name: "Yug",
//     marks: 87,
// },
// {
//     name: "Yogendra",
//     marks: 89,
// }];

// let gpa= arr0.map((el)=>{
//     return el.marks/10;
// });
// console.log(gpa);

//Filter Method..............................................................
// let nums=[2,4,1,5,6,2,7,8,9];
// console.log("OLD array =>", nums);
// let even= nums.filter((el) => (el%2==0));
// console.log("NEW array elements which are divided by 2 (filtered by ''filter'' method) =>", even);

//Every Method.............................................................
// let numbers= [1,2,3,4,5,6,7,8,9.10];

// let isNumDivBy2= numbers.every((el)=> (el%2==0));
// console.log(isNumDivBy2);

// let numbers0= [2,4,6,8,10];
// isNumDivBy2= numbers0.every((el)=> (el%2==0));
// console.log(isNumDivBy2);

//some Method...............................................................
// let numbers= [1,2,3,4,5,6,7,8,9,10];

// let isSomeNumDivBy2= numbers.some((el) => el%2==0);
// console.log(isSomeNumDivBy2);

// let numbers0= [1,3,5,7,9];
// isSomeNumDivBy2= numbers0.some((el) => el%2==0);
// console.log(isSomeNumDivBy2);

//Reduce method............................................................
// let num = [1,2,3,4];
// let result= num.reduce((res,el) => {
//     // console.log(res);
//     return (res+el);
// });
// console.log(result);

//Calculating Maximum in array  using Reduce method
// let num=[1,2,3,1,55,2624,3,5234];
// let result= num.reduce((res, el) => {
//     if(res>el){
//         return res;
//     }else{
//         return el;
//     }
// });
// console.log(result);

//PQ1.Check if all the numbers in our array are multiples of 10 or not...
//PQ2.Create the function to find the min number of an array.

// let arr= [100, 200, 1000];

// let isMulOf10 = arr.every((el) => {
//     if(el%10==0){
//         return true;
//     } else{
//         return false;
//     }
// });
// console.log(isMulOf10);

// let minArr= arr.reduce((min, el)=>{
//     if(min>el){
//         return el;
//     }else {
//         return min;
//     }
// }, arr[0]); //initialization of first min value, btw it takes first arr value by default so it is not necessary to write it over there. 

// console.log(minArr);

//Default Parameters..................................................

// function func(a, b=3){ //Always use default parameters at the end of parameters
//     return a+b;
// }
// console.log(func(5));

//Spread Function.............................................
// let arr=[1,3,5,3,234];
// console.log(...arr); //1,3,5,3,234;
// console.log(Math.min(...arr));
// console.log(..."Nikki Malik");

//Spread Function with Array Literals.............................
// let arr=[123,3,523,234];
// let newArr= [...arr];
// console.log(newArr); //copy of arr is printed.. if you will make changes here, it will not reflect in arr..
// //otherwise if you would use like newArr = arr; it would reference the same memory and changes in 1
// //would reflect both.. 
// newArr.push(10);
// console.log(arr);// will print without changes.. 

// let newArr1= arr;
// console.log(newArr1); //same output as arr..
// newArr1.push(14);
// console.log(arr); //will reflect changes with 14 in arr as well 


// let str= [..."hello"];
// let newStr= [...str];
// console.log(newStr);

// let even= [2,4,6,8];
// let odd= [1,3,5,7];

// let allnum= [...even, ...odd]; // it will combine both even and odd array in one single array..
// console.log(allnum); //[2,4,6,8,1,3,5,7] will be printed accn to given order.

//Spread with object literals..............................................
// let data = {
//     email: "nikkimalik355@gmail.com",
//     password: "abcd",
// };
// let dataCopy = {
//     ...data, id:12, country: "India",
// };
// console.log(data);
// console.log(dataCopy);

// let arr= [1,2,3,4];

// console.log(newArr={
//     ...arr,
// });

// newArr.name="nikki";
// console.log(newArr);
// let str="Nikki"
// console.log({
//     ...str,
// });

// let abc={
//     ..."Hello",
// }
// console.log(abc);

//Rest Function..........................................................
// let a= function(...args){
//     return args.reduce((sum,el) => sum+el);
// }
// console.log(a(1,2,3));

// function min(msg, ...args){
//     console.log(msg);
//     return args.reduce((min, el) => {
//         if(min>el){
//             return el;
//         }else{
//             return min;
//         }
//     });
// };

// console.log(min("Min of the array are " , 10, 35,352,52,6,34,2));

//Destructuring ---storing values of array into multiple variables...

// let names= ["tony", "bruce", "steve", "ironman"];

// let winner = names[2];
// let [winner, secWinner, ...others] = names; //others using the rest concept here..
// //it is collecting other elements and storing them in an array. 
// console.log(winner,"," , secWinner, others);
// console.log(names); //although original array will be as it is. 

//Destructuring with Objects................................
// let student={
//     name: "karan",
//     class: 9,
//     age: 14,
//     subjects: ["hindi", "english", "maths", "science", "social studies"],
//     username: "karan123",
//     password: 1234,
//     city: "Pune",
// };

// const {username, password}=student;
// console.log(username);
// const { username: user, password: pass, city: place= "Mumbai"}= student; //student city will have higher preference here, i.e Pune...
// console.log(user,place);
