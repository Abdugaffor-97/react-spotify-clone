import axios from "axios";

const fetchAxios = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        Authorrzation: `Bearer ${localStorage.getItem('accessToken')}`
    }
})

export default fetchAxios