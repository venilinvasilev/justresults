import axios from 'axios';

function createApi(url) {
    return {
        async get(endpoint, query = "") {
            try {
                const response = await axios.get(url + endpoint + query, { validateStatus: false, withCredentials: true });
                if (response.data.status === 'success') {
                    return response.data.body;
                }
                handleResponseError(response.data);
            } catch(err){
                console.log(err.toString());
                throw new Error(err.message);
            }
        },
        async post(endpoint, data) {
            try {
                const response = await axios.post(url + endpoint, data, { validateStatus: false, withCredentials: true });
                if (response.data.status === 'success') {
                    return response.data.body;
                }
                handleResponseError(response.data);
            } catch(err){
                console.log(err.toString());
                throw new Error(err.message);
            }
        },
        async patch(endpoint, data) {
            try {
                const response = await axios.patch(url + endpoint, data, { validateStatus: false, withCredentials: true });
                if (response.data.status === 'success') {
                    return response.data.body;
                }
                handleResponseError(response.data);
            } catch(err){
                console.log(err.toString());
                throw new Error(err.message);
            }
        }
    }
}

function handleResponseError(err) {
    throw new Error(err.message);
}

export default createApi;