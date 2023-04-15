const Product = require("../models/ProductModel.js");

exports.createProduct = async (req, res, next) => {
  const products = await Product.create(req.body);

  res.status(201).json({
    success: true,
    products,
  });
};

exports.getAllProducts = (req, res) => {
  res.status(200).json({
    massage: "route is working fine",
  });
};
