const student={
    name: "Nikki",
    age: 22,
    marks: 8.8,
    city: "Shamli"
};
// console.log(student);
//Add/Update Value......................
student.marks='A';
student.gender= "Female";
student.city="Muzaffarnagar";
delete student.gender;
console.log(student);
//Create an object literal for the properties of thread/ Twitter post which includes-
//username,
//content
//likes
//reposts
//tags

const thread={
    username: "@nikkimalik355",
    content: "This is a #technology post!",
    likes: 400,
    reposts: 200,
    tags: ["@yuvimalik", "@kusummalik"],
    1: "num key r automatically converted to strings!" //similarly, with true, null, undefined or any predefined keywords!
};
console.log(thread);
console.log(thread["username"]);
console.log(thread.content);
console.log(thread.tags[0]);
console.log(thread[1]); //1 key will be converted to strings nd can be access without " "

//nested objects (object of objects)...........
const classInfo={
    nikki: {
        grade: 8.8,
        city: "Shamli"
    },
    yuvi: {
        grade:8.5,
        city:"MuzaffarNagar"
    },
    yogendra: {
        grade: 7,
        city:"Delhi"
    }
}
console.log(classInfo);
console.log(classInfo.nikki);
console.log(classInfo.nikki.grade);
console.log(classInfo["nikki"]["city"]);

//Array of objects...........
console.log("Array of objects...............");
let classInfo1= [
    {
        name:"Nikki",
        grade: 8.8,
        city:"Shamli"
    },
    {
        name:"Yuvi",
        grade: 8.5,
        city:"MuzaffarNagar"
    },
    {
        name: "Yogendra",
        grade: 7,
        city:"Delhi"
    }
]
console.log(classInfo1);
console.log(classInfo1[1]); //Yuvi details
console.log(classInfo1[0].grade); //8.8

//Math Object..............................
let a=5;
console.log(Math.pow(a,2));

//generating random integers... 
let b= Math.random();
console.log("random num without multiplication: ",b);
let randomInteger= b*10;
console.log("random number with multiplication: ", randomInteger);
randomInteger=Math.floor(randomInteger)+1;
console.log("random num after round off: " ,randomInteger);
//OR-     Math.floor(Math.random() * 10 ) + 1;
console.log("Generating a random number from 1 to 100");
console.log(Math.floor(Math.random() * 100) + 1);
console.log("Generating a random number from 1 to 5");
console.log(Math.floor(Math.random() * 5) +1 );
console.log("Generating a random number from 91 to 100");
console.log(Math.floor(Math.random() * 10) + 91);

//Guessing Game...
console.log("Guessing Game");
let maxNum= prompt("Enter the max number: ");
const randomNum = Math.floor(Math.random() * maxNum)+1;

let guess= prompt("Guess the random number: ");
while(true){
    if(guess=="quit"){
        console.log("You quitted, ThankYou for playing!");
        break;
    }
    else if(guess< randomNum){
        guess= prompt("hint: Your guess is too small. Please try again");
    } else if(guess> randomNum){
        guess= prompt("hint: Your guess is too large! Please try Again!")
    }
    else{
    console.log("Yeah, You got it. Congratulations!");
    break;
    }
}