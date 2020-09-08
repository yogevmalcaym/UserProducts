const mongoose = require("mongoose");
const models = require("./models");

const DB_URI =
    "mongodb+srv://admin:admin@bobileassign.g8gd0.mongodb.net/Bobile?retryWrites=true&w=majority";

//[useFindAndModify] Deprecated
mongoose.set("useFindAndModify", false);
mongoose.connect(DB_URI, {useNewUrlParser: true});

const connection = mongoose.connection;
connection.once("open", () => console.log("connected to the database"));
connection.on("error", console.error.bind(console, "MongoDB connection error:"));

const getUser = query => models.User.find(query);

const insertUser = async data => {
    const userModel = new models.User(data);
    return userModel.save();
};

const getProducts = query => models.Product.find(query);

const deleteProduct = conditions => models.Product.remove(conditions);

const updateProduct = (conditions, fields) => models.Product.update(conditions, fields);

const insertProduct = data => {
    const productModel = new models.Product(data);
    return productModel.save();
}


module.exports = {
    getUser,
    insertUser,
    getProducts,
    deleteProduct,
    updateProduct,
    insertProduct
};
