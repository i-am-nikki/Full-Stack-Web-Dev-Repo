//This index.js file will act as a server.

const express = require('express'); //here this express is a function, which we'll execute.
const app = express(); //Storing the value given by express() in app variable. 
//and this var will help us to create server side app. 
//This app actually is an object.

//Printing this obj
// console.dir(app);

/* app.listen is a function which listen for incoming events or make a web server
 which is express.js first work. It takes two arg
1.) Port and 2.) a callback */

let port = 3000; //3000, 8080 used to build custom servers.
app.listen(port, () =>{
    console.log("app is listening port");
})

//Whatever req will come on port app.use will print/execute that request. 
//This will listen the request and will give confirmation msg.

app.use((req, res) =>{ //express create req and res callback by default.
    console.log("request recieved.."); // callback is printing this.

    //res.send is used to send the response from our server... e.g..

    // res.send("this is a basic response..."); //This is html response
    // res.send({
    //     name: "Nikki",
    //     favColor: "Blue",
    //     //express will convert this object into json format. 
    // });

    //let's send html response..
    res.send("<h1>This is html basic response.</h1>")
});


