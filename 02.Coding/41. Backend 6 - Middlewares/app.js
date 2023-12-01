const express = require("express");
const ExpressError = require("./ExpressError");
const app = express();


// Middleware -> Response send here itself so (/)route will not execute - stopping chaining
// app.use((req, res, next) => {
//     console.log("Hi, I am 1st middleware");
//     return next();
// });

// app.use((req, res, next) => {
//     console.log("Hi, I am 2nd middleware");
//     return next();
// });

//Utility Middleware - //logger -//morgan is one popular middleware do the same work written below:
// app.use((req, res, next) =>{
//     req.time = new Date (Date.now()).toString();
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// }); 

app.get("/", (req, res) =>{
    res.send("Hi, I am root.")
});

app.get("/random", (req,res) =>{
    res.send("This is random page.")
});

// app.use("/api", (req, res, next) =>{
//     let {token} = req.query;
//     if (token === "giveaccess"){
//         next();
//     } 
//     res.send("ACCESS DENIED!!!");
// });

// app.get("/api", (req,res) =>{
//     res.send("This is the data which can only access after entering access token. And you are welcomed here.");
// });

// second way of writing 30-40 lines 
const checkToken = ("/api", (req, res, next) =>{
    let {token} = req.query;
    if (token === "giveaccess"){
        next();
    } 
    // res.send("ACCESS DENIED!!!");
    throw new ExpressError(401, "ACCESS DENIED!!!");
});

app.get("/api", checkToken, (req,res) =>{ //similary can pass in diff routes to use it in multiple place.
    res.send("This is the data which can only be access after entering access token. And you are welcomed here.");
});

app.get("/err" , (req,res) =>{
    abcd = abcd;
});


app.get("/admin", (req,res) =>{
    // xyz = xyz;
    throw new ExpressError(403, "Access to non-admin is Forbidden")
});


app.use((err, req, res, next) =>{
    let {status = 500, message="Some Error Occurred" } = err;
    res.status(status).send(message);
});

app.use((err, req, res, next) =>{
    console.log("----- ERROR2 -----");
    next(err);
});

//for 404 err
app.use((req,res) =>{
    res.status(404).send("Page Not Found! 404 ERROR")
});

app.listen(8080, () =>{
    console.log("server is listening");
});