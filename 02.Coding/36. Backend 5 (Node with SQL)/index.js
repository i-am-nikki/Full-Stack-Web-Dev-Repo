const { faker } = require('@faker-js/faker');
const mysql = require('mysql2'); //.mysql2 package is used to establish connection between js files and sql db.
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true })); //to parse the form data
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'del_app',
    password: 'MySQL@123#'
});

//Inserting New Data
// let q= "INSERT INTO user(id, username, email, password) VALUES ?";
// let user=[
//     ["123a" , "123a_newusuer", "abcA@gmail.com", "abcA"],
//     ["123b" , "123b@newUser", "abcB@gmail.com", "abcB"],
//     ];

// using faker inserting data of 100 users in a go
let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password(),
    ];
}
//Home Route
app.get("/", (req, res) => {
    let q = `SELECT Count(*) from user`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let count = result[0]["Count(*)"];
            // res.send(result[0]["Count(*)"]);
            res.render("home.ejs", { count });
        });
    } catch (err) {
        console.log(err);
        res.send("Some Error in Database!");
    }
});

//Show User Route
app.get("/user", (req, res) => {
    let q = `SELECT * FROM user`;
    try {
        connection.query(q, (err, users) => {
            if (err) throw err;

            // console.log(result);
            // res.send(result);
            res.render("users.ejs", { users });
        });
    } catch (err) {
        console.log(err);
        res.send("Some Error in Database!");
    }
});

//Edit Route
app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user where id='${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            res.render("edit.ejs", { user });
        });
    } catch (err) {
        console.log(err);
        res.send("Some Error in Database!");
    }
    // res.render("edit.ejs");
});

//Update (dB) Route
app.patch("/user/:id", (req, res) => {
    let { id } = req.params;
    let { password: formPass, username: newUserName } = req.body;
    let q = `SELECT * FROM user where id='${id}'`;

    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            if (formPass != user.password) {
                res.send("WRONG Password!");
            } else {
                let q2 = `UPDATE user SET username='${newUserName}' WHERE id='${id}'`;
                connection.query(q2, (err, result) => {
                    if (err) throw err;
                    res.redirect("/user");
                });
            }
        });
    } catch (err) {
        console.log(err);
        res.send("Some Error in Database!");
    }
});

app.listen("8080", () => {
    console.log("server is listening to port 8080");
});

//using faker --
// let data =[];
// for(let i=1; i<=100; i++){
//     data.push(getRandomUser());
// }


// let getRandomUser = () => {
//     return {
//         id: faker.string.uuid(),
//         username: faker.internet.userName(),
//         email: faker.internet.email(),
//         password: faker.internet.password(),
//     };
// }

//console.log(getRandomUser());

// .query object work is to run any query on database.
// try{
//     connection.query(q, [data], (err, result) =>{
//         if(err) throw err;
//         console.log(result);
//     });
// } catch (err){
//     console.log(err);
// }

// connection.end();