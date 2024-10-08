const httpStatus = require("http-status-codes");

const { productModel } = require("../models/productModel");

const createPost = async (req, res) => {
  const { name, description, price, stock_level, supplier_id } = req.body;

  const product = { name, description, price, stock_level, supplier_id };

  const createdProduct = await productModel.create(product);

  res
    .status(httpStatus.OK)
    .json({ message: "product created", product: createdProduct });
};

const updatePost = async (req, res) => {
  const { productId } = req.params;
  const { name, description, price, stock_level, supplier_id } = req.body;

  const product = { name, description, price, stock_level, supplier_id };

  const updatedProduct = await productModel.findByIdAndUpdate(
    productId,
    product,
    {
      new: true,
      runValidators: true,
    }
  );

  res
    .status(httpStatus.OK)
    .json({ message: "product updated", updatedProduct });
};

const deletePost = async (req, res) => {
  const { productId } = req.params;

  await productModel.findByIdAndDelete(productId);

  res.status(httpStatus.NO_CONTENT).json({ message: "Product deleted" });
};

const getProducts = async (req, res) => {
  const products = await productModel
    .find()
    .populate({ path: "supplier_id", select: "name" });
  console.log(products);
  res.status(httpStatus.OK).json({ message: "Products", products });
};

const getProduct = async (req, res) => {
  const { productId } = req.params;
  const product = await productModel
    .findById(productId)
    .populate("supplier_id", "name");

  res.status(httpStatus.OK).json({ message: "Products", product });
};

const getProductsName = async (req, res) => {
  const products = await productModel.find().select("_id name stock_level");

  res.status(httpStatus.OK).json({ message: "Products", products });
};

const getLowQuantityProducts = async (req, res) => {
  const products = await productModel.find({ stock_level: { $lt: 10 } });

  res.status(httpStatus.OK).json({ message: "Products", products });
};

module.exports = {
  createPost,
  updatePost,
  deletePost,
  getProducts,
  getProduct,
  getProductsName,
  getLowQuantityProducts,
};
