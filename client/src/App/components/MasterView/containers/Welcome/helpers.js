import axios from 'axios';

export const loginUser = async data => {
    try {
        const res = await axios.post("http://localhost:3030/api/loginUser", data)
        return res.data
    } catch (e) {
        console.error(e);
        return {clientError: e.message};
    }

}
export const signupUser = async data => {
    try {
        const res = await axios.post("http://localhost:3030/api/signupUser", data);
        return res.data;
    } catch (e) {
        console.error(e)
        return {clientError: e.message};
    }
}
