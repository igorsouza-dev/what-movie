import React, { useEffect, useState } from 'react';
import PageContainer from 'components/PageContainer';
import { useLocation } from 'react-router-dom';
import api from 'services/api';
import Posters from 'components/Posters';

function useQueryParams() {
  return new URLSearchParams(useLocation().search);
}
export default function Search() {
  const [movies, setMovies] = useState();
  const [page, setPage] = useState(1);
  const query = useQueryParams();
  const q = query.get('q');
  useEffect(() => {
    async function searchMovie() {
      try {
        const response = await api.get(`/search/movie?query=${q}`);
        const { results } = response.data;
        setMovies(
          results.map(movie => {
            const url =
              movie.poster_path &&
              `${process.env.REACT_APP_TMDB_IMAGE_URL}/w185${movie.poster_path}`;
            return { ...movie, url };
          })
        );
      } catch (e) {}
    }
    searchMovie();
  }, []);

  return (
    <PageContainer>
      {movies && <Posters movies={movies} type="grid" />}
    </PageContainer>
  );
}
