const Product = require("../models/ProductModel.js");

//get all products
exports.getAllProducts = async (req,res) =>{
  const products = await Product.find();
  res.status(200).json({
    success:true,
    products
  })
}