/* Qs1. Square and sum the array elements using the arrow function, 
and then find the average of the array. */

let arr = [50, 20, 40, 50];

let sqNdSum = (el) => {
    let sq = el.map(e => e * e);

    let sum = sq.reduce((acc, val) => acc + val);
    console.log(sum);

    console.log(sq);

    return sum / sq.length;
}
console.log(sqNdSum(arr));

/* Qs2. Create a new array using the `map` function whose each element is equal
 to the original element plus 5. */

let arr0 = [1, 2, 3];

let newArr0 = (el) => {
    return el.map(e => e + 5);
}
console.log(newArr0(arr0));

//Qs3. Create a new array whose elements are in uppercase of words present
// in the original array.

let arr1 = ["nikki", "yug", "Yogendra", "kusum"];

let newArr1 = arr1.map((el) => {
    return el.toUpperCase();

});

console.log(newArr1);

/* Qs4. Write a function called `doubleAndReturnArgs` which accepts an array 
and a variable number of arguments. The function should return a new array
with the original array values and all of the additional arguments doubled. */

let arr2 = [1, 2, 3, 4, 5];
let num = [25, 2, 4, 6];
function doubleAndReturnArgs(arr, ...args) {
    let newArr2 = arr.map(el => el);
    console.log(newArr2);
    let num1 = args.map(el => el * 2);
    let ans = newArr2.concat(num1);
    return ans;
}

console.log(doubleAndReturnArgs(arr2, ...num));

/* Qs5. Write a function called `mergeObjects` that accepts two objects and 
returns a new object which contains all the keys and values of the first object
and second object. */

let person1 = {
    name: "nikki",
    age: 22,
};

let person2 = {
    name1: "yug",
    age1: 12,
};

let mergeObjects = (p1, p2) => {
    return { ...p1, ...p2 };
};
console.log(mergeObjects(person1, person2));