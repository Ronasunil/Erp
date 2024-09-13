const request = require("supertest");
const mongoose = require("mongoose");
const { app } = require("../../app");
const { productModel } = require("../../models/productModel");

async function createProduct(data) {
  const response = await request(app).post("/api/v1/products").send(data);

  return response;
}

it("Create a product", async () => {
  const requestBody = {
    name: "Test Product",
    description: "This is a test product",
    price: 10.99,
    stock_level: 10,
    supplier_id: new mongoose.Types.ObjectId(),
  };
  const response = await createProduct(requestBody);

  const product = await productModel.findOne({ name: requestBody.name });
  expect(response.status).toBe(200);
  expect(product.name).toBe(requestBody.name);
});

it("Update product", async () => {
  const requestBody = {
    name: "Test Product",
    description: "This is a test product",
    price: 10.99,
    stock_level: 10,
    supplier_id: new mongoose.Types.ObjectId(),
  };

  const response1 = await createProduct(requestBody);

  const productId = response1.body.product._id;

  const response2 = await request(app)
    .patch(`/api/v1/products/${productId}`)
    .send({ name: "biscuit" });

  expect(response2.status).toBe(200);
});

it("Delete product", async () => {
  const requestBody = {
    name: "Test Product",
    description: "This is a test product",
    price: 10.99,
    stock_level: 10,
    supplier_id: new mongoose.Types.ObjectId(),
  };

  const response1 = await createProduct(requestBody);

  const productId = response1.body.product._id;

  const response2 = await request(app).delete(`/api/v1/products/${productId}`);

  expect(response2.status).toBe(204);
});

it("Get All products", async () => {
  const requestBody = {
    name: "Test Product",
    description: "This is a test product",
    price: 10.99,
    stock_level: 10,
    supplier_id: new mongoose.Types.ObjectId(),
  };

  const response2 = await request(app).get(`/api/v1/products`).send();

  expect(response2.status).toBe(200);
});

it("Get a particular product", async () => {
  const requestBody = {
    name: "Test Product",
    description: "This is a test product",
    price: 10.99,
    stock_level: 10,
    supplier_id: new mongoose.Types.ObjectId(),
  };

  const response1 = await createProduct(requestBody);

  const productId = response1.body.product._id;

  const response2 = await request(app)
    .get(`/api/v1/products/${productId}`)
    .send();

  expect(response2.status).toBe(200);
});

module.exports = { createProduct };
