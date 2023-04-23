const Product = require("../models/ProductModel.js");
//create product
exports.createProducts =  async (req ,res , next ) => {
  const product = await product.create(res.body);

  res.status(201).json({
   success:true,
   product
  })
};

exports.getAllProducts =  (req,res) =>{
  res.status(200).json({
    massage:"route is working fine"
  })
}