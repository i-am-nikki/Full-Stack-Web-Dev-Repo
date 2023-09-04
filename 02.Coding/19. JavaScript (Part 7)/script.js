//this keyword....

let student = {
    name: "nikki",
    age: 22,
    eng: 80,
    math: 50,
    phy: 80,
    getavg() {
        console.log(this); //will print student object
        console.log((this.eng + this.math + this.phy) / 3); //avg of eng,math & phy                               
    }
}
student.getavg();

function getavg() {
    console.log(this); //will print window object, Refer Pg,109 in Notes.
}
getavg();

//try & catch statement....

// let a=5;
try {
    console.log(a);
} catch (error) {
    console.log(error);
    console.log("Caught Error: a is not defined...");
}
console.log("hello");

//Arrow Functions....

const sum = (a, b, c) => {
    console.log(a + b + c);
};
sum(1, 2, 3);

//example2 ...

const cube = n => {
    return n * n * n;
};

console.log(cube(5));

const power = (a, b) => {
    // return a**b;
    return Math.pow(a, b);
};
console.log(power(2, 3));

//Arrow Functions Implicit Returns....

const add = (a, b) => a + b; //as it is returning single value so, () parenthesis
//also not needed in arrow functions case..
console.log(add(1, 3));

//SetTimeout Function....
// console.log("Hi there!");

// setTimeout(() => {
// console.log("Apna College");
// }, 1000);

// console.log("Welcome to");

//SetInterval Function....
// console.log("Hi Guys!");

// let id= setInterval(() => {
//     console.log("Nikki");
//     clearInterval(id); //it will stop the repetition...
// }, 1000);
// console.log("My name is");

//this with Arrow functions........

const student2 = {
    name: "Yuvi",
    age: 12,
    prop: this, //this will be window object for student 2 and it is global scope.
    getName: function () {
        console.log(this); //student2 is this here, for function calling object 
        return this.name;// is this keyword..

    },

    getAge: () => {
        console.log(this); //parent's scope- for this student2 is the scope and for student2 scope is global (window)
        console.log(this.age); //undefined
    },

    getName2: function () {
        setTimeout(() => {
            console.log(this); //arrowfunc-> setTimeout-> window() -> outer function()-> student2 
        })
    },

    getAge2: function () {
        setTimeout(function () {
            console.log(this); //function() -> student2 -> setTimeout() -> window scope
        })
    }
}
// student2.getName();
// console.log(student2.name);
// student2.getAge();
// console.log(student2);
// console.log("----------------");
// student2.getName2();
// student2.getAge2();


console.log("PQs...............................      ");
//Write an arrow function that returns the square of a number 'n'

const sq = n => {
    return n * n;
}
console.log(sq(3));

//write a function that prints "Hello World" 5 times at intervals of 2s each.


const id = setInterval(() => {
    console.log("Hello World");
}, 2000);

setTimeout(() => {
    clearInterval(id);
}, 10000);