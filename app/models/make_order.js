const mongoose = require('mongoose'); //requiring mongoose model
const Schema = mongoose.Schema; //creating a variable to hold the mongoose schema

//connecting to the mongoose db
mongoose.connect('mongodb://Maej:maejdb1@ds141932.mlab.com:41932/agric-biz');

//create make or pre-order schema 
const makeOrderSchema = new Schema({
    //objects and data type
    name: String,
    address: String,
    tele: Number,
    email: String,
    productName: String,
    quantity: Number,
    cardNumber: Number,
    CCV_No: Number,
    card_exp_date: String
    // name: {
    //     type: String,
    //     required: [true, 'Your name is required']
    // },
    // address: {
    //     type: String,
    //     required: [true, 'A residential is required']
    // },
    // tele: {
    //     type: Number,
    //     required: [true, 'Your phone number is required']
    // },
    // email: {
    //     type: String,
    //     required: [true, 'An email address is required']
    // },
    // productName: {
    //     type: String,
    //     required: [true, 'A product name is required']
    // },
    // quantity: {
    //     type: Number,
    //     required: [true, 'Product quantity is required']
    // },
    // cardNumber: {
    //     type: Number,
    //     required: [true, 'Your master, credit or visa card number is required']
    // },
    // CCV_No: {
    //     type: Number,
    //     required: [true, 'A CCV Number is required']
    // },
    // card_exp_date: {
    //     type: String,
    //     required: [true, 'Your card expiring date is required']
    // }
});


//create make or pre-order model
const MakeOrder = mongoose.model('makeOrder_db', makeOrderSchema);


//exporting the models
module.exports = MakeOrder;