import axios from "axios";

const fetchMian = axios.create({
  baseURL: "https://deezerdevs-deezer.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
    "x-rapidapi-host": process.env.REACT_APP_RAPID_API_HOST,
  },
});

export default fetchMian;
