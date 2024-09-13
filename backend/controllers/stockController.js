const httpStatus = require("http-status-codes");

const { stockTransactionModel } = require("../models/stockTransactionModel");
const { productModel } = require("../models/productModel");

const createStock = async (req, res) => {
  const { productId, quantity, transaction_type, date } = req.body;
  const data = { productId, quantity, transaction_type, date };

  const stock = await stockTransactionModel.create(data);

  const product = await productModel.findById(productId);
  if (!product) return;

  console.log(product.stock_level, quantity, product.stock_level < quantity);
  //   managing stock
  if (transaction_type === "sale" && +product.stock_level > +quantity)
    product.stock_level -= quantity;
  else if (+product.stock_level < +quantity) {
    console.log("send");
    return res
      .status(httpStatus.OK)
      .json({ message: "Insufficient stock", status: "fail" });
  } else product.stock_level += quantity;

  await product.save();

  res.status(httpStatus.OK).json({ message: "stock created", stock });
};

module.exports = {
  createStock,
};
