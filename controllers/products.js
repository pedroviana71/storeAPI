const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({ name: "vase table" });
  res.status(200).json({ products });
};

const getAllProducts = async (req, res) => {
  const { featured, company, name } = req.query;
  const queryObj = {};
  if (featured) {
    queryObj.featured = featured === "true" ? true : false;
  }
  if (name) {
    queryObj.name = { $regex: name, $options: "i" };
  }
  if (company) {
    queryObj.company = company;
  }
  const products = await Product.find(queryObj);
  res.status(200).json({ products });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
