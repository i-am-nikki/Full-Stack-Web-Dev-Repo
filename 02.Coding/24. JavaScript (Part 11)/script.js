/*
function one(){
    return 1;
}

function two(){
    return one() + one();
}

function three(){
    let ans= two() + one();
    console.log(ans);
}

three();
*/

h1= document.querySelector('h1');

function changeColor(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("color changed");
        },delay)
    })
   
}

changeColor('orange', 1000)
.then(()=>{
    console.log("orange color was completed.");
    return changeColor('maroon',1000); //it will return a promise...
})
.then(()=>{
    console.log("maroon color was completed.");
    return changeColor("olive",1000);
})
.then(()=>{
    console.log("olive color was completed.");
    return changeColor("gold", 1000);
})
.then(()=>{
    console.log("gold color was completed.");
})

/*
//Callback Nesting - Also known as Callback hell in JS.
changeColor('red', 1000, ()=>{
    changeColor('orange',1000, ()=>{
        changeColor('maroon', 1000);
        })
    });
*/    

/*
function savetoDB(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
        success();
    } else {
        failure()
    }
}

savetoDB("Nikki Malik", () => {
    console.log("success: saved first data. ");
    savetoDB("Yug Malik", () => {
        console.log("success: saved second data.");
        savetoDB("Kusum Malik", () => {
            console.log("success: saved third data");
        }, () => {
            console.log("failure: weak connection!");
        }
        );
    }, () => {
        console.log("failure: weak connection!");
    }
    )
},
    () => {
        console.log("failure: weak connection!");
    }
);
*/

// function savetoDB(data) {
//     return new Promise((resolve, reject) =>{
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve("successful");
//         } else {
//             reject("failed");
//         }
//     });
// }


// savetoDB("Nikki Malik")
// .then(()=>{
//     console.log("Promise was resolved. ");
// })
// .catch(()=>{
//     console.log("Promise was rejected");
// });


//Promise Chaining ------- Improved Version

// savetoDB("Nikki Malik")
// .then((result)=>{
//     console.log("data1 saved---");
//     console.log(result);
//     return savetoDB("Yug Malik");
// })
// .then((result)=>{
//     console.log("data 2 saved...");
//     console.log(result);
// })
// .catch((error)=>{
//     console.log("promise was rejected.");
//     console.log(error);
// });