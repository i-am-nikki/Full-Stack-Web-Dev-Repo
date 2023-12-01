const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then(() => {
    console.log("connection successfull")
}).catch((err) => console.log(err));

// async function main() {
//     await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
// }

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp')
  }
  
let allChats = [
    {
        from: "Nikki",
        to: "Yug Malik",
        msg: "Send me your Exam Sheets",
        created_at: new Date() //Date() constructor'll create random date & time automatically in UTC timezone.
    },
    {
        from: "Rohit",
        to: "Mohit",
        msg: "Can you teach me dijikstra algorithm",
        created_at: new Date()
    },
    {
        from: "Amit",
        to: "Sumit",
        msg: "All the best for your interview",
        created_at: new Date()
    },
    {
        from: "Amita",
        to: "Ramesh",
        msg: "Bring me some Fruits",
        created_at: new Date()
    },
    {
        from: "Tony",
        to: "Peter",
        msg: "Love you 3000",
        created_at: new Date()
    },
];

Chat.insertMany(allChats);