const express = require("express");
const app = express();

const port = 8080;
app.use(express.urlencoded({extended:true}));
app.use(express.json()); //to access json data as well..

app.get("/register" , (req, res) =>{
    let {user, password} = req.query;
    res.send(`Standard GET Response. Welcome ${user}!`)
});

app.post("/register" , (req,res) =>{
    //console.log(req.body); //here it will print undefined coz express are not able to understand the data here so we will need to parse that which is done in 5th line.
    let { user, password } = req.body;

    res.send(`Standard POST Response. Welcome ${user}!`)
});

app.listen(port, () =>{
    console.log(`Listening to port ${port}`);
});