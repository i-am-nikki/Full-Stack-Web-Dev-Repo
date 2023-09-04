//Qs1. Write an arrow function named arrayAverage that accepts an array of 
//numbers and returns the average of those numbers.

const arrayAverage = () => {
    let arr = [100, 50, 100, 50];
    let sum = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        sum += arr[i];
    }
    let avg = sum / arr.length;
    return avg;
}
console.log(arrayAverage());

//Qs2. Write an arrow function named isEven() that takes a single number 
//as an argument and returns if it is even or not.

const evenOrNot = (n) => {
    if (n % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(evenOrNot(4));
console.log("PQ3..............")
//Qs3. What is the output of the following code:
const object = {
    message: 'Hello, World!',
    logMessage() {
        console.log(this.message); //undefined 
        /*When using setTimeout(object.logMessage, 1000);, the this context inside 
        the logMessage function will indeed refer to the global object (window in 
        the browser environment) when the function is called. However, the message
        property is not defined in the global object. Instead, it will result 
        in undefined for this.message.*/
    }
};
setTimeout(object.logMessage, 1000); 

console.log("-------------PQ4")
//Qs4. What is the output of the following code:

let length = 4;
function callback() {
  console.log(this.length);
}
const object1 = {
  length: 5,
  method(callback) {
    callback();
  },
};
object1.method(callback, 1, 2);

