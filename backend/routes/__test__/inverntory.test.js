const { createProduct } = require("./product.test");
const request = require("supertest");
const mongoose = require("mongoose");
const { app } = require("../../app");

it("Updates stock qunatity of product", async () => {
  const requestBody = {
    name: "Test Product",
    description: "This is a test product",
    price: 10.99,
    stock_level: 10,
    supplier_id: new mongoose.Types.ObjectId(),
  };
  const response1 = await createProduct(requestBody);
  const productId = response1.body.product._id;

  const data = {
    productId,
    quantity: 1,
    transaction_type: "purchase",
    date: new Date(),
  };

  const response2 = await request(app).post("/api/v1/stock").send(data);

  const response3 = await request(app)
    .get(`/api/v1/products/${productId}`)
    .send();

  expect(response2.status).toBe(200);
  expect(response3.body.product.stock_level).toBe(
    requestBody.stock_level + data.quantity
  );
});
