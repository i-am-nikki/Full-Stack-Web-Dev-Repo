//This is not efficient way to write, if obj has same name of keys.
const student1 = {
    name: 'nikki',
    age: 22,
    marks: 89,
};

const student2 = {
    name: 'yug',
    age: 12,
    marks: 99,
};

const student3 = {
    name: 'kusum',
    age: 42,
    marks: 79,
};

let arr = [1, 2, 3];
arr.sayHello = () => {
    console.log("hello, I am arr.")
};
let arr2 = [1, 2, 3];
//Below function will change push property for all arrays.
//This function won't add values in arr but will just print that value.
arr.__proto__.push = (n) => {
    console.log("Pushing number:", n);
}
//Note - It is generally not recommended to modify the properties of built-in objects in JS.


//Factory Functions -- this will create multiple persons here itself.
// function PersonMaker(name, age){
//     const person={
//         age:age,
//         name:name,
//         talk:function(){
//             console.log(`Hi, My name is ${this.name}`);
//         }
//     }
//     return person;
// }
// let p1= PersonMaker("nikki",22); //copy of all methods of person,i.e p1.talk === p2.talkl will give false.
// let p2= PersonMaker("yug",22); //so, this is efficient way but not that much better than thsi exist i.e from new Operator.
// console.log(p1);
// console.log(p1.talk());

//Constructors- are the special type of function in js which doesn't return anything 
//& start with capital letters.
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function () {
//     console.log(`Hi, my name is ${this.name}`);
// }

// let p1 = new Person("nikki", 22);
// let p2 = new Person("yug", 12);

//It was the efficient way coz p1 and p2 will not create separate copy of functions.
//It will refer same copy. 
//Although, more better way also exist to do same work that is from classes syntax :), Let's explore it below:

//Classes......................................................
class Person{
    constructor(name,age){
        console.log("calling person class constructor (Parent class[base class])")
        this.name=name;
        this.age=age;
    }

    talk(){
        console.log(`Hi, my name is ${this.name}`); //this is the benefit of classes that we don't need to create prototype to create such functions 
    }
}

// let p1 = new Person("nikki" , 22);
// let p2 = new Person("yug" , 12);


//Inheritance...........................................................
class Students extends Person{ //extends keyword is used to inherit the parent properties.
constructor(name,age,marks){
    console.log("Calling students class constructor")
    super(name,age); //calling parent class constructor via writing super keyword here inside constructor.
    this.marks = marks;
}
greet(){
    return "Hello";
}
}

let s1= new Students("adam", 25, 95);
console.log(s1); // all the properties and function will be inherited



class Teachers extends Person{
    constructor(name,age,subjects){
        console.log("calling teachers class constructor")
        super(name,age);
        this.subjects = subjects;
    }
}

let t1 = new Teachers("eve", 35, "english");
console.log(t1);

class Mammals{ //base class / parent class
    constructor(names){
        this.names = names;
        this.type = "warm-blooded";
    }

    eat(){
        console.log("I can eat");
    }
}

class Dogs extends Mammals{ //child class
    constructor(names){
        super(names);
    }
    bark(){
        console.log("I can bark... wooff wooff...........");
    }

    eat(){//Overriding
        console.log("I eat bones."); //this function will override the parent class mammals function def here.
    }
}
let dog1 = new Dogs("tuffy");

class Cats extends Mammals{ //child class
    constructor(names){
        super(names);
    }
    meow(){
        console.log("I can say... meow meow...........");
    }
}

let cat1 = new Cats("catty");
