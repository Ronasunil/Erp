const { Router } = require("express");
const { getSuppliers } = require("../controllers/supplierController");

const supplierRouter = Router();

supplierRouter.get("/suppliers", getSuppliers);

module.exports = { supplierRouter };
