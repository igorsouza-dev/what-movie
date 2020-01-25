import React, { useEffect, useState } from 'react';
import PageContainer from 'components/PageContainer';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useLocation, useHistory } from 'react-router-dom';
import api from 'services/api';
import Posters from 'components/Posters';

function useQueryParams() {
  return new URLSearchParams(useLocation().search);
}
export default function Search() {
  const history = useHistory();
  const query = useQueryParams();
  const [movies, setMovies] = useState();
  const [page, setPage] = useState(parseInt(query.get('page'), 10) || 1);
  const [totalPages, setTotalPages] = useState(0);
  const [total, setTotal] = useState(0);
  const q = query.get('q');

  useEffect(() => {
    async function searchMovie() {
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
    console.log(p, totalPages);
    if (p <= totalPages) {
      setPage(p);
      history.push(`/search?q=${q}&page=${p}`);
    }
  }
  return (
    <PageContainer>
      <div>
        <button type="button" onClick={previousPage}>
          <FaChevronLeft />
        </button>
        We found {total} movies for {`"${q}"`}. Page {page}/{totalPages}
        <button type="button" onClick={nextPage}>
          <FaChevronRight />
        </button>
      </div>
      {movies && <Posters movies={movies} type="grid" />}
    </PageContainer>
  );
}
