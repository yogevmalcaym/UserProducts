import axios from "axios";
import {deleteProduct as productsDeleteProduct} from '../Products/helpers';

export const init = async data => {
    try {
        const res = await axios.get("http://localhost:3030/api/getProduct", {params: data});
        return res.data;
    } catch (e) {
        console.error(e);
        return {clientError: e.message};
    }
}

export const saveProduct = async data => {
    try {
        if (data.id === "new")
            await axios.post("http://localhost:3030/api/createProduct", data);
        else
            await axios.put("http://localhost:3030/api/saveProduct", data);

        return {};
    } catch (e) {
        console.error(e);
        return {clientError: e.message};
    }

}

export const deleteProduct = (data)=>{
    productsDeleteProduct(data)
}
