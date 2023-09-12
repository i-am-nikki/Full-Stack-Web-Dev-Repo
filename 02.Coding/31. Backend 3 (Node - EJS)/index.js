const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

// app.use(express.static("public"));

//to run index.js from any directory.... 
app.use(express.static(path.join(__dirname, "/public/js")));
app.use(express.static(path.join(__dirname, "/public/css")));
app.listen( port, () =>{
    console.log(`listening on port: ${port}`);
});
//express automatically requrie ejs package internally, so we don't need to do.
//using ejs here directly.

//app.set is used to set many things, one thing is view engine, view means templates,
//temp engine(ejs) is thing/package that will help to create/view our temp or render.
app.set("view engine", "ejs");
app.set("views" , path.join(__dirname, "/views"));

app.get("/", (req,res) =>{
    //using ejs we don't send the responses, but do render them means sending big files.
    //in res.send we can send string, array, boolean, objects, html.
    
    //view engine(ejs) expect that all the files/templates are present in views folder by default. 
    res.render("home.ejs");//express will by default will look for views folder and inside of that it will look for the file we gave here.
    //views will render only if we run the nodemon index.js inside the present directory. to run it from parent directory
    //write the path.join vala function as written in 12th line and path package required in 3rd line. 
});
//2nd get request
app.get("/home", (req,res) =>{
    res.send("hello...");
});

app.get("/rolldice", (req, res) =>{
    //ASsuming data is coming from some database not the ejs file.
    let diceVal = Math.floor(Math.random() * 6) + 1;
    // res.render("rolldice.ejs" ,{num: diceVal}); 
    res.render("rolldice.ejs" , { diceVal });
    
    //can access this can in ejs file now.
    //second args is passed as an object which is decVal or database we can say and that key can be used in ejs file.
    //  WE can pass key value only and pass that itself in ejs.
});


app.get("/ig/:username", (req,res) =>{
    // const followersarr= ["adum", "bob", "steve", "john"];
    // let {username} = req.params;
    // res.render("instagram.ejs", {username, followersarr});

    //requiring the data from data.json file.
    let {username} = req.params;
    const instaData = require("./data.json");
    console.log(instaData);
    const data = instaData[username];
    if(data){
    res.render("instagram.ejs", {data});
    }else{
        res.render("error.ejs")
    }
});


