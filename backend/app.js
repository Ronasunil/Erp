const express = require("express");
const helmet = require("helmet");
const hpp = require("hpp");
const asyncError = require("express-async-errors");
const { config } = require("dotenv");
const httpStatus = require("http-status-codes");
const cors = require("cors");

const { productRouter } = require("./routes/productRoutes");

const { supplierRouter } = require("./routes/supplierRoutes");

const app = express();

config({ path: "./config.env" });

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(hpp());

const api = process.env.API_VERSION;

app.use(api, productRouter);
app.use(api, supplierRouter);

app.all("*", (req, res) => {
  res.status(httpStatus.NOT_FOUND).json({ message: `${req.url} not found` });
});

module.exports = {
  app,
};
