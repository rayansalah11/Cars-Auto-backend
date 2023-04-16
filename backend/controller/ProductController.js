const Product = require("../models/ProductModel.js");

exports.createProduct = async (req, res, next) => {
  const products = await Product.create(req.body);
  res.status(201).json({success: true,products});
};

exports.getAllProducts = async (req, res) => {
  const products = await products.find();
  res.status(200).json({success: true,products});};

// Update Product ---Admin
exports.updateProduct = (async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product is not found with this id", 404));
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  res.status(200).json({
    success: true,
    product,
  });
});
//delet product
exports.deleteProduct = (async (req, res, next) => {

  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  await product.remove();
  
  res.status(200).json({
    success: true,
    message: "Product is deleted successfully",
  });
});
