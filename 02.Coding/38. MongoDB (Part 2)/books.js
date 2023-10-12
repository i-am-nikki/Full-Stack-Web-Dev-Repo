const mongoose = require('mongoose');

main().then(() => {
    console.log("connection successful");
})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 50
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [50, "Price is too low for Amazon selling!"]
    },
    discount: {
        type: Number,
        default: 0
    },
    category:{
        type: String,
        enum: ["fiction", "non-fiction"]
    },
    genre: [String],
});


const Book = mongoose.model("Book", bookSchema);

// let book1 = new Book({
//     title: "BHAGVAD GITA as it is",
//     author: "HDG A.C BHAKTIVEDANTA SWAMI PRABHUPADA",
//     price: 300
// });

// let book2 = new Book({
//     title: "KRSNA BOOK",
//     author: "HDG A.C BHAKTIVEDANTA SWAMI PRABHUPADA",
//     price: "300" // here mongoose will cast/parse this string into number bt if we will
//     // write "abcd" something like this in letters format, it'will fail to cast, 
//     // although we can indeed write it without quote, i.e 300
// });

// book1.save().then((res)=>{
//     console.log(res);
// }).catch(err =>{
//     console.log(err);;
// });

// book2.save().then((res)=>{
//     console.log(res);
// }).catch(err =>{
//     console.log(err);;
// });

// let book3 = new Book({
//     title: "Srimad Bhagvatam Canto 1",
//     author: "HDG A.C BHAKTIVEDANTA SWAMI PRABHUPADA",
//     price: 1000
// });

// book3.save().then((res) => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);;
// });   

// let book4 = new Book({
//     title: "Srimad Bhagvatam Canto 2",
//     author: "HDG A.C BHAKTIVEDANTA SWAMI PRABHUPADA",
//     price: 2000
// });

// book4.save().then((res) => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);;
// });   

// let book5 = new Book({
//     title: "Srimad Bhagvatam Canto 3",
//     author: "HDG A.C BHAKTIVEDANTA SWAMI PRABHUPADA"
// });

// book5.save().then((res) => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });   

// let book6 = new Book({
//     title: "Srimad Bhagvatam Canto 4",
//     author: "HDG A.C BHAKTIVEDANTA SWAMI PRABHUPADA",
//     price: 1000,
//     category: "non-fiction"
// });

// book6.save().then((res) => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });   

// let book7 = new Book({
//     title: "Srimad Bhagvatam Canto 4", //id - 6527eb64a81d845ee5f94bd1
//     author: "HDG A.C BHAKTIVEDANTA SWAMI PRABHUPADA",
//     price: 1000,
//     genre: ["spiritual" , "non-fiction", "Krishna consciousness"]
// });

// book7.save().then((res) => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });   

// Book.findByIdAndUpdate({_id: "6527eb64a81d845ee5f94bd1"}, {title: "Srimad Bhagvatam Canto 5"}, {runValidators:true},{new:true})
// .then(res=>{
//     console.log(res);
// }).catch(err => {
//     console.log(err.errors.title.properties.message);
// });
