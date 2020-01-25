import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_TMDB_TOKEN}`,
  },
});

export default api;
