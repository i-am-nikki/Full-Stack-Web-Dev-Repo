//trim() method for strings...................
 let strvar= "      Hello    ";
console.log(strvar);
strvar= strvar.trim();
console.log(strvar);
//.toUpperCase() and toLowerCase().........
console.log(strvar.toUpperCase());
console.log(strvar.toLowerCase());
//Methods with Arguments- indexOf - stringMethod...
let msg="  ILoveCoding  ";
console.log(msg.indexOf("Love"));
console.log(msg.indexOf("Z"));
console.log(msg.indexOf("Cod"));
//Method chaining....... 
console.log(msg.toUpperCase().trim());
//Slice Method/.................
let msg1="ILoveJavaoScript";
let msg1NewStr=msg1.slice(5);
console.log(msg1NewStr);
msg1NewStr=msg1.slice(1,5);
console.log(msg1NewStr);
msg1NewStr=msg1.slice(-4);
console.log(msg1NewStr);
//replace..........
console.log(msg1.replace("Love", "do"));
console.log(msg1.replace("o", "x"));
//repeat method................
console.log(msg1.repeat(2));
//practice Questions.............................................................
//PQ1..
let msg2="help";
console.log(msg2.trim().toUpperCase());
//PQ2..
let names= "ApnaCollege";
console.log(names.slice(4,9)); //Colle
console.log(names.indexOf("na"));//2
console.log(names.replace("Apna", "Our"));// OurCollege
//PQ3..
console.log(names.slice(4).replace("l","t").replace("l",'t'));
//Array (Data Structure)..................................................
let students=["nikki", "yug", "kusum", "yogendra"];
console.log(students);
//accessing 1st char of 1st value in students array..... 
console.log(students[0][0]);
//accessing length of a value with the help of square brackets and appropriate index...
console.log(students[0].length);
//arrays are mutable...........
students[0]="nikki malik";
students[6]="anushka";
console.log(students);
//array methods........push, pop,unshift and shift...............
let arr=["yuvi","nikku","yogi","kusu"];
arr.push("anu"); //add to end.
console.log(arr);
arr.pop();//delets from end nd returns it...
console.log(arr); 
arr.unshift("anu"); //add to start..
console.log(arr);
arr.shift(); //deltes from start and returns it... 
console.log(arr);
//Pq....................................
let start=["january","july","march","august"];
// let final=["july","june","march","august"];
start.shift();
start.unshift("july");
start[1]="june";
console.log(start);
//indexOf & includes method-----------------------
let cars=["audi", "rangerover", "toyota", "wagon", "lamborghini"];
let ind= cars.indexOf("rangerover");
console.log(ind);
console.log(cars.includes("rangerover"));
//merge(concat) and reverse methods...........
let primary=["red", "yellow", "blue"];
let secondary=["orange", "green", "violet"];
console.log(primary.concat(secondary)); //red, yellow, blue, orange, green, violet
console.log(primary.reverse()); //blue, yellow, red
//slice method for array....................
let sliarr=["red", "yellow", "blue", "orange", "pink", "white"];
let sliarr1= sliarr.slice(2,5); //blue to pink.. coz 5 is non-inclusive...
console.log(sliarr1);
let sliarr2= sliarr.slice(2); //blue to white.. till array last index means.....
console.log(sliarr2);
let sliarr3 = sliarr.slice(-2); //pink , white..... last 2 index's value..
console.log(sliarr3);
let sliarr4= sliarr.slice(); //all values of array..
console.log(sliarr4);
//splice in array...................
let col=["red","green","blue","yellow"];
console.log("splice in array..............................................")
console.log(col.splice()); //nothing will happen..
console.log(col.splice(2)); //blue, yellow will be removed... 
console.log(col.splice(0,1)); // red will be removed...
console.log(col); //green will be printed.. 
console.log(col.splice(0,1,"black","grey")); // green will be removed 
console.log(col); //black nd grey will be printed.. 
//sort in array........................
let sorting= ["ram","sita","radhe","krishna"];
sorting.sort();
console.log(sorting);
//it doesn't work well with numbers eg......
let number=[13,25,39,450,225];
number.sort();
console.log(number); //coz internally it converts num into string and sorts basis on string...
//pqs...................................................
let start1=['january','july','march','august'];
start1.splice(0,2,"july","june");
console.log(start1);
//pq2..
let indx=['c','c++','html','javascript','python','java','c#',"sql"];
let indxn= indx.reverse().indexOf("javascript");
console.log(indxn);
// let indxnum= indx.indexOf("javascript");
// console.log(indxnum);
//arrays references......................................................................
let arrRef=["a",'b','c','d'];
let arrRef2=arrRef;
console.log(arrRef2);
console.log(arrRef);
arrRef2.pop();
console.log(arrRef);
//const array..........................................
let Arr=[1,2,3];
console.log(Arr);
Arr=[1,3,3];
console.log(Arr); //possible..
//bt if declared as const.. 
const Arr1=[1,2,3];
console.log(Arr1);
// Arr1 = [1,3,3]; //not possible.. TypeError: Assignment to constant variable.

//nested arrays........................................... 
let arr2=[[2,4], [6,8], [10,12]];
console.log(arr2);
//pq........
let tic_tac_toe=[['X', null, 'O'],[null, 'X', null], ['O', null, 'X']];
// console.log(tic_tac_toe);
tic_tac_toe[0][1]='O';
console.log(tic_tac_toe);