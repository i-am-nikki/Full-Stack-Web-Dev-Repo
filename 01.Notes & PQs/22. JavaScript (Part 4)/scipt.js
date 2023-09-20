//Qs1. Write a JavaScript program to delete all occurrences of element num
// in a given array. Example: if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2, 
// Result should be arr = [1, 3, 4, 5, 6, 3].

let arr=[1,2,3,4,5,6,2,3];
let num=2;
// let newarr=[];

for(let i=0; i<=arr.length-1; i++){
    if(arr[i]==num){
        // if(arr[i]!==num){
        // newarr.push(arr[i]);
        arr.splice(i, 1);
    }
}
// console.log(newarr);
console.log(arr);

//Qs2. Write a JavaScript program to find the number of digits in a number. 
//Example: if number = 287152, count = 6

let number= 287152;
number= number.toString();
console.log(number.length);

//Qs4. Print the factorial of a number n. [Factorial of a number n is the product 
//of all positive integers less than or equal to a given positive integer and
// denoted by that integer.] Example: 
//- 7! (factorial of 7) = 1 x 2 x 3 x 4 x 5 x 6 x 7 = 5040
//- 5! (factorial of 5) = 1 x 2 x 3 x 4 x 5 = 120
//- 3! (factorial of 3) = 1 x 2 x 3 = 6
//- 0! is always 1.

// let nstr= prompt("Enter the positive integer number for which you want to calculate factorial: ");
// let n=parseInt(nstr);
// let newn=1;
// while(n>1){
//     newn=newn*n;
//     n--;
// }
// console.log(newn);

//Qs5. Find the largest number in an array with only positive numbers.
let arr1=[101,3,5,6,3,1010,6,10,40];
let largestNumber= arr1[0];
for(let i=1; i<=arr1.length-1; i++){
    if(arr1[i]>largestNumber){
        largestNumber = arr1[i];
    }
}
console.log(largestNumber);
