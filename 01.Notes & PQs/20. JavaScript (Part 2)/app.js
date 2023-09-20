// Qs1.Create a number variable num with some value. Now,print “good” if the number is divisible by 10 and 
//print “bad” if it is not

let num=20;
if(num%10==0){
    console.log("good");
} else{
    console.log("bad");
}

//Qs2.Take the user's name&age as input using prompts. Then return back the following statement to the 
//user as an alert(by substituting their name&age): name is age years old.
//[Use template Literals to print this sentence]

// let names= prompt("Enter your name: ");
// let age= prompt("Enter your age: ");
// let sent= (`${names} is ${age} years old.`)

// alert(sent);

//Qs3.Write a switch statement to print the months in a quarter.
//Months in Quarter1: January,February,March 
//MonthsinQuarter2:April,May,June 
//MonthsinQuarter3: July,August,September
//MonthsinQuarter4:October,November,December
//[Use the number as the case value in switch]

let quarter = 4;
switch(quarter){
    case 1:
        console.log("January, February, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("October, November, December");
        break;
    default:
        console.log("not a quarter");
}

//Qs4.A string is a golden string if it starts with the character‘A’or‘a’ and has a total length greater 
//than 5. For a given string print if it is golden or not.

let str= "Apple";

if( (str[0]=='A' || str[0]=='a') && (str.length>5)){
    console.log("golden string");
} else{
    console.log("not a golden string");
}

//Qs5. Write a program to find the largest of 3 numbers.
let num1=18; let num2=31; let num3= 21;

if(num1>num2 && num1 > num3){
    console.log(num1);
} else if(num2>num3){
    console.log(num2);
} else{
    console.log(num3);
}

//Qs6(Bonus). Write a program to check if 2 numbers have the same last digit.
//Eg:32 and 47852 have the same lastdigit i.e.2
// let numb1=32;
// let numb2= 47852;

// let numb1LastDigit= 32%10;
// let numb2LastDigit = 47852%10;

// if(numb1LastDigit==numb2LastDigit){
//     console.log(`${numb1} and ${numb2} has same last digit number`);
// } else{
//     console.log(`${numb1} and ${numb2} not having same last digit number.`);
// }

function lastdigitnumb(num1, num2){
    //get the last digit of number
    const num1ld=num1%10;
    const num2ld= num2%10;

    //check if the last digit are equal;
    if(num1ld === num2ld){
        return true;
    } else{
        return false;
    }
}

const numb1= 32;
const numb2= 32354;

if(lastdigitnumb(numb1, numb2)){
    console.log(`${numb1} and ${numb2} has same last digit number.`);
} else{
    console.log(`${numb1} and ${numb2} doesn't have same last digit number.`);
}   