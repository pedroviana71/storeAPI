const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "product name must be provided"],
  },
  price: {
    type: Number,
    required: [true, "product price must be provided"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    values: ["ikea", "liddy", "caressa", "marcos"],
    message: "{VALUE} is not supported ",
  },
});

module.exports = mongoose.model('Product', productSchema)
