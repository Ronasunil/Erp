const { Router } = require("express");
const {
  getSuppliers,
  createSuppliers,
  editSupplier,
  getSupplier,
  deleteSupplier,
} = require("../controllers/supplierController");

const supplierRouter = Router();

supplierRouter.get("/suppliers", getSuppliers);
supplierRouter.post("/suppliers", createSuppliers);
supplierRouter.patch("/suppliers/:supplierId", editSupplier);
supplierRouter.get("/suppliers/:supplierId", getSupplier);
supplierRouter.delete("/suppliers/:supplierId", deleteSupplier);

module.exports = { supplierRouter };
