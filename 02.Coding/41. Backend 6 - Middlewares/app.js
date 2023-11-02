const express = require("express");
const app = express();

// Middleware -> Response send here itself so (/)route will not execute - stopping chaining

app.get("/", (req, res) =>{
    res.send()
});

app.listen(8080, () =>{
    console.log("server is listening");
});