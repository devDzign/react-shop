import axios from "axios";


export const jsonLdFetch = async (url, method = 'GET', data = null, token = null) => {


    axios.defaults.headers["Accept"] = "application/ld+json";
    axios.defaults.headers["Content-Type"] = "application/json";

    if (token) {
        axios.defaults.headers["Authorization"] = "Bearer " + token;
    }

    if (data) {
        axios.defaults.data = data
    }

    const options = {
        method: method,
        url: url
    };

    const response = await axios(options)

    if (response.status === 204) {
        return null;
    }

    if (response.status === 200) {
        return response.data;

    } else {
        throw response
    }
}