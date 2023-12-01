const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main().then(() => {
    console.log("connection successfull")
}).catch((err) => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
// }

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp')
}

//New Route
app.get("/chats/new", (req, res) => {
    // throw new ExpressError(404, "Page not found");
    res.render("new.ejs");
});

//Create Route
app.post("/chats", asyncWrap(async (req, res, next) => {
        let { from, to, msg } = req.body; //to parse data use urlencoded line (Refer line 10)
        let newChat = new Chat({
            from: from,
            to: to,
            msg: msg,
            created_at: new Date()
        });
        await newChat.save();
        res.redirect("/chats")
}));
//Index Route
app.get("/chats", asyncWrap(async (req, res, next) => {
    let chats = await Chat.find();
    res.render("index.ejs", { chats });
}));

function asyncWrap(fn){
    return function(req,res,next){
        fn(req,res,next).catch((err) => next(err));
    };
};

//New - Show Route
app.get("/chats/:id", asyncWrap(async (req, res, next) => {
    try{
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if (!chat) {
        next(new ExpressError(404, "Chat not found!"));
    }
    res.render("edit.ejs", { chat });
} catch (err){
    next(err);
}
}));

//Edit Route
app.get("/chats/:id/edit", asyncWrap(async (req, res, next) => {  
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
}));

//Update Route
app.put("/chats/:id", asyncWrap(async (req, res,next) => {
    let { id } = req.params;
    let { msg: newMsg } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(
        id,
        { msg: newMsg },
        { runValidators: true, new: true }
    );
    console.log(updatedChat);
    res.redirect("/chats");
}));

//Destroy Route
app.delete("/chats/:id", asyncWrap(async (req, res,next) => {
    let { id } = req.params;
    let DeletedChat = await Chat.findByIdAndDelete(id);
    console.log(DeletedChat);
    res.redirect("/chats");
}));

app.get("/", (req, res) => {
    res.send("root is working");
});

//Error hanling middleware
app.use((err,req,res,next) =>{
    console.log(err.name);
    next(err);
})

//Error Handling Middleware
app.use((err, req, res, next) => {
    let { status = 500, message = "some error" } = err;
    res.status(status).send(message);
})

app.listen(8080, () => {
    console.log("server is listening on port 8080");
});

