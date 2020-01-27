import React, { useEffect, useState } from 'react';
import PageContainer from 'components/PageContainer';
import { useLocation, useHistory } from 'react-router-dom';
import api from 'services/api';
import Posters from 'components/Posters';
import Paginator from 'components/Paginator';
import { InfoText } from './styles';

function useQueryParams() {
  return new URLSearchParams(useLocation().search);
}
export default function Search() {
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const query = useQueryParams();
  const [movies, setMovies] = useState();
  const [page, setPage] = useState(parseInt(query.get('page'), 10) || 1);
  const [totalPages, setTotalPages] = useState(0);
  const [total, setTotal] = useState(0);
  const q = query.get('q');

  useEffect(() => {
    async function searchMovie() {
      setTotalPages(0);
      setLoading(true);
      try {
        const response = await api.get(`/search/movie?query=${q}&page=${page}`);
        const { results, total_results, total_pages } = response.data;
        setMovies(
          results.map(movie => {
            const url =
              movie.poster_path &&
              `${process.env.REACT_APP_TMDB_IMAGE_URL}/w185${movie.poster_path}`;
            return { ...movie, url };
          })
        );
        setTotal(total_results);
        setTotalPages(total_pages);
      } catch (e) {}
      setLoading(false);
    }
    searchMovie();
  }, [q, page]);
  function previousPage() {
    const p = page - 1;
    if (p > 0) {
      setPage(p);
      history.push(`/search?q=${q}&page=${p}`);
    }
  }
  function nextPage() {
    const p = page + 1;
    if (p <= totalPages) {
      setPage(p);
      history.push(`/search?q=${q}&page=${p}`);
    }
  }
  if (loading) {
    return (
      <PageContainer>
        <strong>Searching...</strong>
      </PageContainer>
    );
  }
  return (
    <PageContainer>
      <InfoText>
        We found {total} movies for <span>{`"${q}"`}</span>.
      </InfoText>
      {totalPages > 0 && (
        <Paginator
          page={page}
          previousPage={previousPage}
          nextPage={nextPage}
          totalPages={totalPages}
        />
      )}

      {movies && <Posters movies={movies} type="grid" />}
    </PageContainer>
  );
}
