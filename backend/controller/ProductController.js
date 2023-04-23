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
// delete Product
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product is not found with this id", 404));
  }

  // Deleting images from cloudinary
  for (let i = 0; 1 < product.images.length; i++) {
    const result = await cloudinary.v2.uploader.destroy(
      product.images[i].public_id
    );
  }

  await product.remove();

  res.status(200).json({
    success: true,
    message: "Product deleted succesfully",
  });
});

