const { Router } = require("express");
const { createStock } = require("../controllers/stockController");

const stockRouter = Router();

stockRouter.post("/stock", createStock);

module.exports = { stockRouter };
