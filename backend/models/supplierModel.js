const mongoose = require("mongoose");

const contactInfoValidator = function (value) {
  return String(value).length === 10;
};

const supplierSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  contact_info: {
    type: String,
    required: true,
    validate: {
      validator: contactInfoValidator,
      message: "Invalid contact info contact_info must be 10 numbers",
    },
  },
});

const supplierModel = mongoose.model("Supplier", supplierSchema);

module.exports = { supplierModel };
