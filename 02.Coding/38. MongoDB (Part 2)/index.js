const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');

//This function is the another way to write above 2nd line it will work asynchronously...
main().then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
// Refer https://mongoosejs.com/ for above lines..

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model("User", userSchema); // will add collection
// const Employee = mongoose.model("Employee" , userSchema);

//-------------------------------Insert One-------------------------------------

// const user1 = new User({
//   name:"Adam",
//   email:"adam@gmail.com",
//   age:48
// });

// const user2 = new User({
//   name:"Eve",
//   email:"eve@yahoo.com",
//   age:45
// });

// // user1.save();
// user2.save()
// .then((res)=>{
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// });

//-------------------------------Insert Many-------------------------------------

// User.insertMany([
//   {name:"Tony", email:"tony@gmail.com", age:48},
//   {name:"Bruce", email:"bruce@gmail.com", age:48},
//   {name:"Peter", email:"peter@gmail.com", age:48},
// ]).then((data) =>{
//   console.log(data);
// });

//-------------------------------Find------------------------------------
// User.find({age: {$gte: 47}}).then(res =>{
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// });

//-------------------------------Find One------------------------------------
// User.findOne({age: {$gte: 47}}).then(res =>{  //OR
// User.findOne({_id: "6524e91d29983731556d4800"}).then(res =>{
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// });

//-------------------------------Find By ID------------------------------------

// User.findById("6524e91d29983731556d4800").then(res =>{
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// });

//-------------------------------Update One------------------------------------
// User.updateOne({name:"Bruce"}, {age:49}).then(res =>{
//   console.log(res);
// }).catch(err =>{
//   console.log(err);
// });

//-------------------------------Update Many------------------------------------
// User.updateMany({age: {$gt:47}}, {age: 55})
// .then(res =>{
//   console.log(res);
// }).catch(err =>{
//   console.log(err);
// });

//-------------------------------Find & Update------------------------------------

//If new sets to true, it returns modified doc rather than original doc

// User.findOneAndUpdate({name: "Bruce"}, {age: 45}, {new: true}).then(res =>{  //OR
// User.findByIdAndUpdate({_id: "6524e91d29983731556d4800"}, {age:60}, {new:true})
// .then(res =>{
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// });

//-------------------------------Delete One------------------------------------
// User.deleteOne({name:"Adam"})
// .then(res =>{
//   console.log(res);
// });

//-------------------------------Delete Many------------------------------------
// User.deleteMany({age: {$gt:47}})
// .then(res =>{
//   console.log(res);
// });

//-------------------------------Insert One-------------------------------------

// const user1 = new User({
//   name:"Adam",
//   email:"adam@gmail.com",
//   age:48
// });

// const user2 = new User({
//   name:"Eve",
//   email:"eve@yahoo.com",
//   age:45
// });

// // user1.save();
// user2.save()
// .then((res)=>{
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// });

//-------------------------------Insert Many-------------------------------------

// User.insertMany([
//   {name:"Tony", email:"tony@gmail.com", age:48},
//   {name:"Bruce", email:"bruce@gmail.com", age:48},
//   {name:"Peter", email:"peter@gmail.com", age:48},
// ]).then((data) =>{
//   console.log(data);
// });

//-------------------------------Find------------------------------------
// User.find({age: {$gte: 47}}).then(res =>{
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// });

//-------------------------------Find One------------------------------------
// User.findOne({age: {$gte: 47}}).then(res =>{  //OR
// User.findOne({_id: "6524e91d29983731556d4800"}).then(res =>{
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// });

//-------------------------------Find By ID------------------------------------

// User.findById("6524e91d29983731556d4800").then(res =>{
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// });

//-------------------------------Update One------------------------------------
// User.updateOne({name:"Bruce"}, {age:49}).then(res =>{
//   console.log(res);
// }).catch(err =>{
//   console.log(err);
// });

//-------------------------------Update Many------------------------------------
// User.updateMany({age: {$gt:47}}, {age: 55})
// .then(res =>{
//   console.log(res);
// }).catch(err =>{
//   console.log(err);
// });

//-------------------------------Find & Update------------------------------------

//If new sets to true, it returns modified doc rather than original doc

// User.findOneAndUpdate({name: "Bruce"}, {age: 45}, {new: true}).then(res =>{  //OR
// User.findByIdAndUpdate({_id: "6524e91d29983731556d4800"}, {age:60}, {new:true})
// .then(res =>{
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// });

//-------------------------------Delete One------------------------------------
// User.deleteOne({name:"Adam"})
// .then(res =>{
//   console.log(res);
// });

//-------------------------------Delete Many------------------------------------
// User.deleteMany({age: {$gt:47}})
// .then(res =>{
//   console.log(res);
// });

//-------------------------------Find By Id & Delete------------------------------------
// User.findByIdAndDelete({_id:"6524ea2846fae6c3d6f44c07"}).then(res =>{
//   console.log(res);
// }).catch(err=>{
//   console.log(err);
// });

//-------------------------------FindOne & Delete------------------------------------
User.findOneAndDelete({name:"Bruce"}).then(res=>{
  console.log(res);
}).catch(err =>{
  console.log(err);
});







