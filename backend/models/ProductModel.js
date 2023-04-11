const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please enter a name of a product"],
        trim: true,
        maxLength:[20, "Product name not exceed than 20 characters"]
    }]
module.exports = mongoose.model("Product",productSchema);