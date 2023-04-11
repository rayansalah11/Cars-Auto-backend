const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please enter a name of a product"],
        trim: true,
        maxLength:[20, "Product name not exceed than 20 characters"]
    },
    description:{
        type:String,
        required:[true, "Please add a description of your product"],
        maxlength:[4000,"Description is can not exceed than 4000 characters"]
    },
    price:{
        type:Number,
        required: [true, "Please add a price for your product"],
        maxLength:[8, "Price can not exceed than 8 characters"],
    },
    offerPrice:{
        type:String,
        maxLength: [4, "Discount price can not exceed than 4 characters"],
    },
    color:{
        type: String,
    },
    size:{
        type: String,
    },
    ratings:{
        type: Number,
        default: 0,
    },]
module.exports = mongoose.model("Product",productSchema);