//Qs1. Write a JavaScript program to get the first n elements of an array. 
//(n can be any positive number). For example: for array [7, 9, 0, -2[ and n = 3, print [7, 9, 0].

let arr=[7,9,0,-2];
let n= arr.slice(0,3);
console.log(n);

//Qs2. Write a JavaScript program to get the last n elements of an array.
// n can be any positive number. For example, for the array [7, 9, 0, -2] and n = 3, print [9, 0, -2].

n= arr.slice(-3);
console.log(n);

//Qs3. Write a JavaScript program to check whether a string is blank or not.
let str="        ";
if(str.trim()===""){
    console.log("string is blank");
} else{
    console.log("string is not blank!");
}

//Qs4. Write a JavaScript program to test whether the character at the given (character) index is lowercase.
let str1= "   Nikki  ";
let index= 0;
if(str1[index]===str1[index].toLowerCase()){
    console.log("character is lowercase");
} else{
    console.log("character is uppercase");
}

//Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.

console.log(str1.trim());

//Qs6. Write a JavaScript program to check if an element exists in an array or not.
let element=9;
if(arr.indexOf(element)!==-1){
    console.log("element exist in the array!") ;
} else{
    console.log("element doesn't exist in the array!") ;
}