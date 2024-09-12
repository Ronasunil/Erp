const { Router } = require("express");
const {
  createPost,
  updatePost,
  deletePost,
  getProducts,
  getProduct,
} = require("../controllers/productController");
const productRouter = Router();

productRouter.post("/products", createPost);
productRouter.patch("/products/:productId", updatePost);
productRouter.delete("/products/:productId", deletePost);
productRouter.get("/products", getProducts);
productRouter.get("/products/:productId", getProduct);

module.exports = { productRouter };
