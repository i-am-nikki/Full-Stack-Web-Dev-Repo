console.log("Hello World from 'NIKKI'! ");
let a = 10;
let b = 20;
console.log("Sum of a and b are: ", a+b );

let pencilPrice=10;
let erasorPrice=5;
let str = "\u20AC" ;
// let output= "The total price is: " + (pencilPrice+ erasorPrice)+ " " +str ;

// using template literals using backtick template literal................................. 

let output= `The total price is: ${pencilPrice+erasorPrice} ${str}`;
console.log(output);


//Arithmetic Operators
console.log("Arithmetic Operators........................");
console.log(`5 + 5 are: ${5+5}`);
console.log(`5 - 5 are: ${5-5}`);
console.log(`5 * 5 are: ${5*5}`);
console.log(`5 / 5 are: ${5/5}`);
console.log(`5 % 5 are: ${5%5}`);
console.log(`3 ** 3 are: ${3**3}`);
console.log(`unary operator ${a++}`); //10
console.log(a);//11
console.log(`pre unary operator ${--b}`);//19
console.log(b);//19

// comparison operators.......................................... 

let age=18;
console.log(age>=18);

//traffic light system...........................
let color= 'red';
if(color=='red'){
    console.log("stop..");
}
if(color=='yellow'){
    console.log("slow down..");
}
if(color=='green'){
    console.log("Go.");
}

//PQs.......................................................

let size='XL';
if(size=='XL'){
    console.log('Price is RS.250');
} else if(size=='L'){
    console.log('Price is RS.200');
} else if(size== 'M'){
    console.log('Price is RS.100');
} else if(size=='S'){
    console.log('Price is RS.50')
} else{
    console.log('You entered wrong size! This size is not available.')
}

//nested if-else............................................
let marks= 80;
if (!(marks<32)){
    console.log("Pass");

    if(marks>=80){
        console.log("Grade: A+");
    }else if(marks<=80 && marks>=60){
        console.log("Grade: A")
    }
}else{
    console.log("Better luck next time!")
}

//pqs.................................................................
let num=12;
if((num%3===0) && ((num+1==15) || (num-1==11))){
    console.log("safe");
} else{
    console.log("unsafe");
}

let str1= "AKKI";
if(str1.length>3 && (str1[0]=='a' || str1[0]=='A')){
    console.log("Good String");
} else{
    console.log("Not Good String");
}

if(""){
    console.log("it has true value ");
} else{
    console.log("it doesn't have true value");
}

//Switch statements..................................................... 

let colour="yellow";
switch(colour){
    case "red":
        console.log("stop.... ");
        break;
    case "yellow":
        console.log("slow down........ ");
        break;
    case "green":
        console.log("GO... ");
        break;
    default:
        console.log("Broken Light... ") ;  
        
}

// PQ.................................................................................... 

let day=4;
switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("not a valid week day number... ");
}

// alert("something is wrong!");
// console.log("This is simple log.");
// console.error("This is error msg.. ");
// console.warn("This is warn msg.. ");

let firstName= prompt("Please enter you name: ");
console.log(firstName);
let lastName= prompt("Please enter your last name: ");
console.log(lastName);
let msg= "welcome " +firstName+ " " + lastName;
alert(msg);
