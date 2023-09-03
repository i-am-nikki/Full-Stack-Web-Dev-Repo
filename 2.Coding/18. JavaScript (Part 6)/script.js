function hello() {
    console.log("hello");
}
hello();
hello();

function printName() {
    console.log("Nikki Malik");
}
printName();

function print1to5() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
print1to5();

//Create a function that prints a poem.

function poem() {
    console.log("Twinkle Twinkle, little star\nhow I wonder what you are \nup above the world so high \nlike a diamond in the sky!");
}
poem();

//create a function to roll a dice and always display the value between 1 to 6

function rollDice() {
    let value = Math.floor(Math.random() * 6) + 1;
    console.log(value);
}
rollDice();

//functions with arguments..
function printName(name, age) {
    console.log(name, age);
}
printName("Nikki Malik");

//2
function summ(a, b) {
    let addition = a + b;
    console.log(addition);
}
let result = summ(7, 7);
console.log(result);

//3
//Create a function that gives us the average of 3 numbers. 
function averageOf3Num(a, b, c) {
    let average = (a + b + c) / 3;
    average = Math.floor(average);
    console.log(average);
}
averageOf3Num(100, 50, 100);

//4
//Create a function that prints the multiplication table of given number
function printTable(num) {
    for (let i = 1; i <= 10; i++) {
        let table = num * i;
        console.log(`${num} * ${i} = ${table}`);
    }
}
printTable(2);

//return keyword

function returnKeyword(a, b, c) {
    return a + b + c;
}
// console.log(returnKeyword(4,5));
console.log(returnKeyword(returnKeyword(1, 1, 1), returnKeyword(1, 1, 1), 3));

//Create a function that returns the sum of numbers from 1 to n
function calcSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(calcSum(5));

//Create a function that returns the concatenation of all strings in an array.
let arr = ["hello", "hi", "bye", "!"];
function concat(arr) {
    let str = "";
    for (let i = 0; i <= arr.length - 1; i++) {
        str = str + arr[i];
    }
    return str;
}
console.log(concat(arr));

//Scope
let sum = 54; //Global scope

function abc(a, b, c){
    let sum1= a+b+c; //function scope
    console.log(sum1);
}

abc(1,2,3);

{
    var blockScope= 54;
}
console.log(blockScope); //Error: blockScope is not defined in case of let and const keyword

//Lexical Scope
console.log("---------------------")
function outerfunc(){
    function innerfunc(){
        console.log(a); //Accessible coz of hoisting in js
        console.log(b); //Accessible coz of hoisting in js
    }
    let a=10;
    let b=20;
    innerfunc();
    //in lexical scope outer var will be accessible inside nested func bt not vice-versa.
}
outerfunc();

//pq
let greet = "hello";
function changeGreet() { 
    let greet = "namaste"; 
    console.log(greet); //namaste
    function innerGreen () { 
        console.log(greet); //nothing coz it is not called
}
}
console.log(greet); //hello
changeGreet();

//function expressions... or nameless function
const sum1= function(a,b){
    return a+b;
}
let s= sum1(2,3);
console.log(s);

//higher order functions...
function greetFunc(func,count){ //higher order function
    for(let i=1; i<=count; i++){
        func()
    }
}
let greett= function() {
    console.log("hello");
}
// greetFunc(greett, 2); //func definition is passed without ()braces.
greetFunc(function() { console.log("namaste" ) }, 2);

//.................yuvi ask compounding question-----
let totalSum=1;
let endingDay=2;
console.log(`Day #1: 1`);
for(let i= 1; i<endingDay; i++){
    totalSum = totalSum + totalSum;
    console.log(`Day #${i+1}: ${totalSum}`);
}


console.log("-------------------------------------------------");
//Higher order functions (Returns)
let odd= function(n){
    console.log(n%2!=0);
}
let even= function(n){
    console.log(n%2==0);
}

function oddEvenTest(request){
    if(request=="odd"){
        return function(n){
            console.log(n%2!=0);
        }
        
    } else if(request == 'even'){
          return function(n){
                console.log(n%2==0);
            }
            
        }else{
            console.log("wrong request");
        }
         }
    let request = "odd";
    let func= oddEvenTest(request);
    console.log(func(3));

    //Methods, actions that can be perform on an object.
    const calculator= {
        add: function(a,b){
            return a+b;
        },
        sub: function(a,b){
            return a-b;
        },
        mul: function(a,b ){
            return a*b;
        }
    };

    console.log(calculator.add(1,3));

    //Shorhand for Methods in objects..
    const calculator1={
        add(a,b){
            return a+b;
        },
        sub(a,b){
            return a*b;
        }
    };

    console.log(calculator1.add(1,2));