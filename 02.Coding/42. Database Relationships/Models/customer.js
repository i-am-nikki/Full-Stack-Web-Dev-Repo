const mongoose = require('mongoose');
const {Schema} = mongoose;

main().then(()=> console.log("connection successful!")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/dbRelationships');
}

const orderSchema = new Schema({
    item: String,
    price: Number, 
});

const customerSchema = new Schema({
    name:String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order"
        }

    ]
});

// customerSchema.pre("findOneAndDelete", async()=>{
//     console.log("Pre Middleware");
// });

customerSchema.post("findOneAndDelete", async(customer)=>{
    // console.log("Post Middleware");
    if(customer.orders.length){
       let res= await Order.deleteMany({_id: {$in: customer.orders}});
       console.log(res);
    }
    
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

// const addCustomer = async () =>{
//     let cust1 = new Customer ({
//         name: "Rahul Kumar",
//     });

//     let order1 = await Order.findOne({item: "Chips"});
//     let order2 = await Order.findOne({item: "Chocolate"});

//     cust1.orders.push(order1);
//     cust1.orders.push(order2);

//     let result = await cust1.save();
//     console.log(result);
// }
// addCustomer();

const addCust = async () =>{
        let newCust = new Customer ({
            name: "Karan Arjun",
        });

        let newOrder = new Order({
            item: "Burger",
            price: 250,
        });

        newCust.orders.push(newOrder);

        await newOrder.save();
        await newCust.save();

        console.log("added new customer.");
}
// addCust();

const delCust = async () =>{
    let data = await Customer.findByIdAndDelete("65747f23eca8692f46674c3f");
    console.log(data);
}
delCust();
// const addOrders = async () =>{
//     let res = await Order.insertMany([
//         {item: "Samosa", price: 12},
//         {item: "Chips", price: 10},
//         {item: "Chocolate", price: 40}
//     ]);
//     console.log(res);
// }

// addOrders();