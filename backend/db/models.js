const mongoose = require("mongoose");
const schemas = require('./schemas');

const User = mongoose.model("User", schemas.User);
const Product = mongoose.model("Product", schemas.Product);

module.exports = {
    User,
    Product
}
