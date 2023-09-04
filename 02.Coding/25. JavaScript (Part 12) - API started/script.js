/*async function greet() {
    // throw "404 page not found";
    return "hello world";
}

console.log(greet());

greet()
    .then((result) => {
        console.log("Promise was fulfilled");
        console.log("Result was: ", result);
    })
    .catch((err) => {
        console.log("Promise was rejected.", err);
    });

//Making arrow function async.........
let hello = async () => {
    return 5;
}; 

console.log(hello());


function getNum(){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random() *10)+1;
            console.log(num);
            resolve();
        },1000);
    });
}

async function waitFnx(){
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    getNum();
}

waitFnx();
*/

/*
let h1 = document.querySelector('h1');

function colorChange(color, delay){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            let num = Math.floor(Math.random() *5 )+1;
            if(num>3){
                reject("Promise Rejected");
            }
            h1.style.color= color;
            console.log(`color has changed to ${color}`);
            resolve("color changed");
        }, delay);
    })
}

async function colorName(){
    //Handling Rejection
    try{
        await colorChange("red", 1000);
        await colorChange("violet", 1000);
        await colorChange("maroon", 1000);
    }catch(err){
        console.log("Error caught:", err);
        
    }
  
    //This will still run if promise is rejected..
    let a =5;
    console.log(a+5);
}

colorName();
*/

/*
let jsonRes =
 '{"fact":"Unlike other cats, lions have a tuft of hair at the end of their tails.","length":71}';
 
let validRes = JSON.parse(jsonRes);
console.log(validRes);

console.log(validRes.fact);

let stringifyRes = JSON.stringify(validRes);
console.log(stringifyRes);
*/

let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((response) =>{
//     console.log(response);
//     return response.json();
//     })
//     .then((data) =>{
//         console.log(data.fact);
//         return fetch(url);
//     })
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data2)=>{
//         console.log(data2.fact);

//     })
// .catch((err) => {
//     console.log("Error: ", err);
// });

//Using Fetch with Async and Await....................................

async function getFacts(){
    try{
        let res= await fetch(url);
        let data = await res.json(); //using await here as well coz it is also asynchronous func so its nec
        //essary to wait for this as well.
        console.log(data.fact);

        //Chaining..
        let res2= await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
    }
    catch(err){
        console.log("Error - ", err);
    }
    console.log("code execution doesn't stop if error occured or not.")
}

getFacts();