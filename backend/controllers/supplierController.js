const { supplierModel } = require("../models/supplierModel");
const httpStatus = require("http-status-codes");

const getSuppliers = async (req, res) => {
  const suppliers = await supplierModel.find();

  res.status(httpStatus.OK).json({ message: "Suppliers", suppliers });
};

const createSuppliers = async (req, res) => {
  const supplier = await supplierModel.create(req.body);

  res.status(httpStatus.OK).json({ message: "suppliers", supplier });
};

const editSupplier = async (req, res) => {
  const { supplierId } = req.params;
  const supplier = await supplierModel.findByIdAndUpdate(supplierId, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(httpStatus.OK).json({ message: "supplier updated", supplier });
};

const getSupplier = async (req, res) => {
  const { supplierId } = req.params;
  const supplier = await supplierModel.findById(supplierId);

  res.status(httpStatus.OK).json({ message: "supplier updated", supplier });
};

const deleteSupplier = async (req, res) => {
  const { supplierId } = req.params;
  await supplierModel.findByIdAndDelete(supplierId);

  res.status(httpStatus.OK).json({ message: "supplier deleted" });
};

module.exports = {
  getSuppliers,
  createSuppliers,
  editSupplier,
  getSupplier,
  deleteSupplier,
};
