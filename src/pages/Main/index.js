import React, { useEffect, useState } from 'react';
import { startOfWeek, endOfWeek, getYear } from 'date-fns';
import SearchBar from 'components/SearchBar';
import Logo from 'components/Logo';
import PostersSection from 'components/PostersSection';

import api from 'services/api';
import { Container } from './styles';

export default function Main() {
  const [loadingWeekMovies, setLoadingWeekMovies] = useState(true);
  const [weekMovies, setWeekMovies] = useState([]);
  const [loadingTopMoviesYear, setLoadingTopMoviesYear] = useState(true);
  const [topMoviesYear, setTopMoviesYear] = useState([]);
  const [loadingTopMoviesLastYear, setLoadingTopMoviesLastYear] = useState(true);
  const [topMoviesLastYear, setTopMoviesLastYear] = useState([]);
  const year = getYear(new Date());

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
          `/discover/movie?primary_release_date.gte=${start}&primary_release_date.lte=${end}&sort_by=vote_average.desc`,
        );
        const { results } = response.data;
        setWeekMovies(
          results.map((movie) => {
            const url = movie.poster_path
              && `${process.env.REACT_APP_TMDB_IMAGE_URL}/w185${movie.poster_path}`;
            return { ...movie, url };
          }),
        );
      } catch (e) {
        console.error(e.message);
      }
      setLoadingWeekMovies(false);
    }
    async function getTopMoviesYear() {
      try {
        const response = await api.get(
          `/discover/movie?primary_release_year=${year}&sort_by=vote_average.desc&vote_count.gte=10`,
        );
        const { results } = response.data;
        setTopMoviesYear(
          results.map((movie) => {
            const url = movie.poster_path
              && `${process.env.REACT_APP_TMDB_IMAGE_URL}/w185${movie.poster_path}`;
            return { ...movie, url };
          }),
        );
      } catch (e) {
        console.log(e.message);
      }
      setLoadingTopMoviesYear(false);
    }
    async function getTopMoviesLastYear() {
      try {
        const lastYear = year - 1;
        const response = await api.get(
          `/discover/movie?primary_release_year=${lastYear}&sort_by=vote_average.desc&vote_count.gte=10`,
        );
        const { results } = response.data;
        setTopMoviesLastYear(
          results.map((movie) => {
            const url = movie.poster_path
              && `${process.env.REACT_APP_TMDB_IMAGE_URL}/w185${movie.poster_path}`;
            return { ...movie, url };
          }),
        );
      } catch (e) {
        console.log(e.message);
      }
      setLoadingTopMoviesLastYear(false);
    }
    getMoviesOnTheater();
    getTopMoviesYear();
    getTopMoviesLastYear();
  }, [year]);

  return (
    <Container>
      <Logo />
      <SearchBar />
      {weekMovies && (
        <PostersSection movies={weekMovies} title="Opening this week" loading={loadingWeekMovies} />
      )}
      {topMoviesYear && (
        <PostersSection
          movies={topMoviesYear}
          title={`Top movies of ${year}`}
          loading={loadingTopMoviesYear}
        />
      )}
      {topMoviesLastYear && (
        <PostersSection
          movies={topMoviesLastYear}
          title="Top movies of last year"
          loading={loadingTopMoviesLastYear}
        />
      )}
    </Container>
  );
}
