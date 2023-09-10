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

// app.use((req, res) =>{ //express create req and res callback by default.
//     console.log("request recieved.."); // callback is printing this.

    //res.send is used to send the response from our server... e.g..

    // res.send("this is a basic response..."); //This is html response
    // res.send({
    //     name: "Nikki",
    //     favColor: "Blue",
    //     //express will convert this object into json format. 
    // });

    //let's send html response..
//     res.send("<h1>This is html basic response.</h1>");
// });
//Routing
//--app.use listen all the request, while app.get listen the request of the path we 
//defined explicitly. IT takes 2 args 1. path and 2. callback..

//Note- We can send only one response for the same path at a time.

// app.get("/", (req,res) =>{
//     res.send("you contacted root path.");
// });

// app.get("/search", (req,res) =>{
//     res.send("you contacted search path.");
// });

// app.get("/help", (req,res) =>{
//     res.send("you contacted help path.");
// });

//to send the msg to user if he enters wrong path which is defined in app.get.
//here we can use * (star), which is a wildcard, if the path is correct then it won't send msg, but
//it the path is not matching above path it will throw msg written inside it.

// app.get("*", (req,res) =>{
//     res.send("This path doesn't exist, You requested wrong path.")
// })

//post request..
// app.post("/", (req,res)=>{
//     res.send("You sent a post request to root.");
// })

//Path Parameters...................................................
app.get("/", (req,res) =>{
    res.send("you contacted root path.");
});
//: colon will be used to set a variable.
app.get("/:username/:id", (req,res) =>{
    //req.params shows the parameters of our requests.
    
    //saving the params in variables.
    let {username, id} = req.params;
    console.log(req.params);
    let htmlStr= `<h1>Welcome to the page of @${username}.</h1>`
    res.send(htmlStr);
});

//Query Results
//the additional info which we passed to parameters in the form of strings used to store in 
//req object and stores into the query paramter of req object. 
app.get("/search", (req, res) =>{
    // console.log(req.query);
    let {q, color}= req.query;
    if (!(q || color)){
        res.send("<h1>nothing searched.</h1>");
    }
    res.send(`<h1>search results for query : ${q}, & color: ${color}.</h1>`);
});