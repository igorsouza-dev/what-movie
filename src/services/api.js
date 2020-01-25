import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/4/',
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_TMDB_TOKEN}`,
  },
});

export default api;
