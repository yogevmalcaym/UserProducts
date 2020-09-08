import axios from 'axios';
import * as consts from './consts';

export const init = async ({username}) => {
    try {
        const res = await axios.get('http://localhost:3030/api/getUserProducts', {params: {username}});
        return res.data;
        if (res.data.notValidated)
            return alert(consts.NOT_VALIDATED);
        return res.data.userProducts;

    } catch (e) {
        console.error(e);
        return {clientError: e.message};
    }

}

export const deleteProduct = async data => {
    try {
        const res = await axios.delete('http://localhost:3030/api/deleteProduct', {params: data});
        return res.data;

        if (res.data.notValidated)
            return alert(consts.NOT_VALIDATED);
        res.data.userProducts;

    } catch (e) {
        console.error(e);
        return {clientError: e.message};
    }
}

