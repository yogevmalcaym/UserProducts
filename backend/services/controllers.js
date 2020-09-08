const dbHelpers = require('../db/helpers');
const responseGenerator = require('./response-generator');

const signupUser = async ({username, password}) => {
    try {
        // Check if the username is already exists
        const sameUser = await dbHelpers.getUser({username});
        if (sameUser.length > 0) {
            const message = `${username} is already exist, please choose another username`;
            return responseGenerator.generateSuccessResponse({
                error: true,
                message
            })
        }

        // Append new user to db
        await dbHelpers.insertUser({username, password});
        return responseGenerator.generateSuccessResponse();

    } catch (error) {
        console.log(`ERROR at [signupUser]: ${error.message}`);
        return responseGenerator.generateErrorResponse();
    }

}

const loginUser = async data => {
    try {
        const userEntity = await dbHelpers.getUser(data);
        if (userEntity.length === 0) {
            const message = `Wrong username or password.`;
            return responseGenerator.generateSuccessResponse({error: true, message});
        }

        const userData = {username: userEntity[0].username};
        return responseGenerator.generateSuccessResponse({userData});
    } catch (error) {
        console.log(`ERROR at [loginUser]: ${error.message}`);
        return responseGenerator.generateErrorResponse();
    }
}

const getUserProducts = async data => {
    try {
        const userProducts = await dbHelpers.getProducts({owner: data.username});
        return responseGenerator.generateSuccessResponse({userProducts})

    } catch (error) {
        console.log(`ERROR at [getUserProducts]: ${error.message}`);
        return responseGenerator.generateErrorResponse();
    }
}

const getProduct = async data => {
    try {
        const productEntity = await dbHelpers.getProducts({_id: data.id});
        return responseGenerator.generateSuccessResponse({productData: productEntity[0]})

    } catch (error) {
        console.log(`ERROR at [getProduct]: ${error.message}`);
        return responseGenerator.generateErrorResponse();
    }

}

const createProduct = async data => {
    const {id, username, ...rest} = data;
    const newProductData = {...rest, owner: username};

    try {
        const newProduct = await dbHelpers.insertProduct(newProductData);
        return responseGenerator.generateSuccessResponse({newProduct});
    } catch (error) {
        console.log(`ERROR at [createProduct]: ${error.message}`);
        return responseGenerator.generateErrorResponse();
    }
}

const saveProduct = async data => {
    const {id: _id, ...fieldsToUpdate} = data
    try {
        await dbHelpers.updateProduct({_id}, fieldsToUpdate);
        return responseGenerator.generateSuccessResponse();
    } catch (error) {
        console.log(`ERROR at [saveProduct]: ${error.message}`);
        return responseGenerator.generateErrorResponse();
    }
}

const deleteProduct = async data => {
    try {
        await dbHelpers.deleteProduct({_id: data.id});
        return responseGenerator.generateSuccessResponse();
    } catch (error) {
        console.log(`ERROR at [deleteProduct]: ${error.message}`);
        return responseGenerator.generateErrorResponse();
    }
}


module.exports = {
    signupUser,
    loginUser,
    getUserProducts,
    getProduct,
    createProduct,
    saveProduct,
    deleteProduct
}
