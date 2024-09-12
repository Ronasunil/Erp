const { supplierModel } = require("../models/supplierModel");
const httpStatus = require("http-status-codes");

const getSuppliers = async (req, res) => {
  const suppliers = await supplierModel.find();

  res.status(httpStatus.OK).json({ message: "Suppliers", suppliers });
};

module.exports = { getSuppliers };
