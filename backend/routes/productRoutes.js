const { Router } = require("express");
const {
  createPost,
  updatePost,
  deletePost,
  getProducts,
  getProduct,
  getProductsName,
  getLowQuantityProducts,
} = require("../controllers/productController");
const productRouter = Router();

productRouter.post("/products", createPost);
productRouter.get("/products", getProducts);
productRouter.get("/product/name", getProductsName);
productRouter.get("/products/lowQuantity", getLowQuantityProducts);
productRouter.get("/products/:productId", getProduct);

productRouter.patch("/products/:productId", updatePost);
productRouter.delete("/products/:productId", deletePost);

module.exports = { productRouter };
