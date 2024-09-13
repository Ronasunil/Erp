async function createProduct(data) {
  const response = await request(app).post("/api/v1/products").send(data);

  return response;
}

module.exports = { createProduct };
