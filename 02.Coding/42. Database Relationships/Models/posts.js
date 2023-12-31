const mongoose = require('mongoose');
const {Schema} = mongoose;

main().then(()=> console.log("connection successful!")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/dbRelationships');
}

const userSchema = new Schema({
    username: String,
    email: String, 
});

const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    }
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async() =>{
    // let user1 = new User({
    //     username: "rahulkumar",
    //     email: "rahul3@gmail.com",
    // });
    let user = await User.findOne({username: "rahulkumar"});

    // let post1 = new Post({
    //     content: "Hello World",
    //     likes: 7,
    // });

    let post2 = new Post({
        content: "Bye Bye :)",
        likes: 72,
    });

    // post1.user = user1;
    post2.user = user;
    // await user1.save();
    // let postRes = await post1.save();
    // console.log(postRes);

    let postRes = await post2.save();
    console.log(postRes);
}

addData();