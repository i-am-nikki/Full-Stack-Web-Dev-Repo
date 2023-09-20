//Qs1. Write a JavaScript function that returns array elements larger than a number.

let arr=[1,5,8,10,"hello", 15];
let arr2=[];
function returnArray(num){
    for(let i=0; i<=arr.length-1; i++){
        if((arr[i]>num) && (typeof arr[i]=== "number")){
        arr2.push(arr[i]);
         
        }
    }
    console.log(arr2);
}

returnArray(1);

//Qs2. Write a JavaScript function to extract unique characters from a string.
// Example: str = "abcdabcdefgggh" ans = "abcdefgh"

let str="abcdabcdefgggh"
function uniqueChars(str){
    let uniqueStr="";
    for(let i=0; i<=str.length-1; i++){
        if(uniqueStr.indexOf(str[i])=== -1){
            uniqueStr+=str[i];
        }
    }
    return uniqueStr;
}
// let ans= uniqueChars(str);
// console.log(ans);
console.log(uniqueChars(str));

//Qs3. Write a JavaScript function that accepts a list of country names as input 
//and returns the longest country name as output. Example: country = ["Australia", 
//"Germany", "UnitedStatesofAmerica"] output: "UnitedStatesofAmerica"

let country= ["Australia", "Germany", "United States of America"];
function longestCountryName(country){
    let count=0;
    let larCountry="";
    for(let i=0; i<=country.length-1; i++){
        if(country[i].length>count){
            count= country[i].length;
            larCountry= country[i];
        }
        
    }
    return larCountry;
}

console.log(longestCountryName(country));

//Qs4. Write a JavaScript function to count the number of vowels in a String argument.

let str2 = "Nikki";

function countVowels(str2) {
    let count = 0;
    for (let i = 0; i <= str2.length - 1; i++) {
        let char = str2[i].toLowerCase();
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || 
        char === 'u') {
            count += 1;
        }
    }
    return count;
}

console.log(countVowels(str2));

//Qs5. Write a JavaScript function to generate a random number within a range (start, end).
function generateRanNum(startnum, endnum){
    let diff= endnum-startnum;
    return Math.floor(Math.random() * diff) +startnum;
}

console.log(generateRanNum(100,200));