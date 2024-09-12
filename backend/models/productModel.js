const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    stock_level: {
      type: Number,
      required: true,
      default: 0,
    },

    supplier_id: {
      type: mongoose.Types.ObjectId,
      ref: "Supplier",
      default: null,
    },
  },
  {
    toJSON: {
      transform: function (doc, ret) {
        delete ret.__v;
      },
    },
  }
);

const productModel = mongoose.model("Product", productSchema);

module.exports = { productModel };
