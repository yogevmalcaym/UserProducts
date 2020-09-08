const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
    username: String,
    password: String,
    lastLogin: Date
});

const Product = new Schema({
    name: String,
    description: String,
    basePrice: Number,
    productImageURL: String,
    owner: String,
});

module.exports = {
    User, Product
}
