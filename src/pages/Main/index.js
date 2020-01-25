import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { startOfWeek, endOfWeek, getYear } from 'date-fns';
import SearchBar from 'components/SearchBar';
import Logo from 'components/Logo';
import PostersSection from 'components/PostersSection';

import api from 'services/api';
import { Container } from './styles';

export default function Main() {
  const [weekMovies, setWeekMovies] = useState([]);
  const [topMoviesYear, setTopMoviesYear] = useState([]);
  const [topMoviesLastYear, setTopMoviesLastYear] = useState([]);
  const year = getYear(new Date());

  const history = useHistory();

  function getDateOnly(date) {
    return date.toISOString().substring(0, 10);
  }
  useEffect(() => {
    async function getMoviesOnTheater() {
      const today = new Date();
      const start = getDateOnly(startOfWeek(today));
      const end = getDateOnly(endOfWeek(today));
      try {
        const response = await api.get(
          `/discover/movie?primary_release_date.gte=${start}&primary_release_date.lte=${end}&sort_by=vote_average.desc`
        );
        const { results } = response.data;
        setWeekMovies(
          results.map(movie => {
            const url =
              movie.poster_path &&
              `${process.env.REACT_APP_TMDB_IMAGE_URL}/w185${movie.poster_path}`;
            return { ...movie, url };
          })
        );
      } catch (e) {
        console.error(e.message);
      }
    }
    async function getTopMoviesYear() {
      try {
        const response = await api.get(
          `/discover/movie?primary_release_year=${year}&sort_by=vote_average.desc&vote_count.gte=10`
        );
        const { results } = response.data;
        setTopMoviesYear(
          results.map(movie => {
            const url =
              movie.poster_path &&
              `${process.env.REACT_APP_TMDB_IMAGE_URL}/w185${movie.poster_path}`;
            return { ...movie, url };
          })
        );
      } catch (e) {
        console.log(e.message);
      }
    }
    async function getTopMoviesLastYear() {
      try {
        const lastYear = year - 1;
        const response = await api.get(
          `/discover/movie?primary_release_year=${lastYear}&sort_by=vote_average.desc&vote_count.gte=10`
        );
        const { results } = response.data;
        setTopMoviesLastYear(
          results.map(movie => {
            const url =
              movie.poster_path &&
              `${process.env.REACT_APP_TMDB_IMAGE_URL}/w185${movie.poster_path}`;
            return { ...movie, url };
          })
        );
      } catch (e) {
        console.log(e.message);
      }
    }
    getMoviesOnTheater();
    getTopMoviesYear();
    getTopMoviesLastYear();
  }, [year]);
  function handleSearch(search) {
    history.push(`/search?q=${search}`);
  }

  return (
    <Container>
      <Logo />
      <SearchBar onSearch={handleSearch} />
      {weekMovies && (
        <PostersSection movies={weekMovies} title="Opening this week" />
      )}
      {topMoviesYear && (
        <PostersSection
          movies={topMoviesYear}
          title={`Top movies of ${year}`}
        />
      )}
      {topMoviesLastYear && (
        <PostersSection
          movies={topMoviesLastYear}
          title="Top movies of last year"
        />
      )}
    </Container>
  );
}
