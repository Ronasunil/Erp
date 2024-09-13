const mongoose = require("mongoose");

const stockTransactionSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Product",
  },

  quantity: {
    type: String,
    required: true,
  },

  transaction_type: {
    type: String,
    enum: ["purchase", "sale"],
  },

  date: {
    type: Date,
    default: new Date(),
  },
});

const stockTransactionModel = mongoose.model("Stock", stockTransactionSchema);

module.exports = { stockTransactionModel };
