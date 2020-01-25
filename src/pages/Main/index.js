import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SearchBar from 'components/SearchBar';
import Logo from 'components/Logo';
import PostersSection from 'components/PostersSection';

import api from 'services/api';
import { Container } from './styles';

export default function Main() {
  const [weekMovies, setWeekMovies] = useState([]);
  const [topMoviesYear, setTopMoviesYear] = useState([]);
  const year = '2020';
  const history = useHistory();
  useEffect(() => {
    async function getMoviesOnTheater() {
      const start = '2020-01-19';
      const end = '2020-01-26';
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
          `/discover/movie?primary_release_year=${year}&sort_by=vote_average.desc`
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
    getMoviesOnTheater();
    getTopMoviesYear();
  }, []);
  function handleSearch(search) {
    history.push(`/search?q=${search}`);
  }
  return (
    <Container>
      <Logo />
      <SearchBar onSearch={handleSearch} />
      {weekMovies && (
        <PostersSection movies={weekMovies} title="In theaters this week" />
      )}
      {topMoviesYear && (
        <PostersSection
          movies={topMoviesYear}
          title={`Top movies of ${year}`}
        />
      )}
    </Container>
  );
}
