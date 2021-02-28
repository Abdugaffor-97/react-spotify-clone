import axios from "axios";

const fetchMian = axios.create({
  baseURL: "https://deezerdevs-deezer.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": process.env.RAPID_API_KEY_VAL,
    "x-rapidapi-host": process.env.RAPID_API_HOST,
  },
});

export default fetchMian;
