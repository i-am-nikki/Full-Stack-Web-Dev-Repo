const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:true}));

main().then(() => {
    console.log("connection successfull")
}).catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
}
//New Route
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
});

//Create Route
app.post("/chats", (req,res)=>{
    let {from, to, msg} = req.body; //to parse data use urlencoded line (Refer line 10)
    let newChat= new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()
    });
    
    newChat.save().then(res =>{
        console.log("chat was saved.")
    }).catch(err =>{
    console.log("problem occured in saving the chat.")
    });
    res.redirect("/chats");
});

//Index Route
app.get("/chats", async (req, res) =>{
    let chats = await Chat.find();
    res.render("index.ejs" , {chats});    
});

app.get("/", (req,res) =>{
    res.send("root is working");
})

app.listen(8080, () => {
    console.log("server is listening on port 8080");
});

