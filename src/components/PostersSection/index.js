import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Posters from 'components/Posters';
import api from 'services/api';
import { Container, Title } from './styles';

function PostersSection({ title, query, showButtons }) {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    async function getMovies() {
      try {
        const response = await api.get(query);
        const { results } = response.data;
        setMovies(
          results.map((movie) => {
            const url = movie.poster_path
              && `${process.env.REACT_APP_TMDB_IMAGE_URL}/w185${movie.poster_path}`;
            return { ...movie, url };
          }),
        );
      } catch (e) {
        setError(e.message);
      }
      setLoading(false);
    }
    getMovies();
  }, [query]);
  return (
    <Container>
      <Title>{title}</Title>
      {loading && <div>Loading...</div>}
      {movies
        && (movies.length ? (
          <Posters movies={movies} showButtons={showButtons} />
        ) : (
          <div>No movies found</div>
        ))}
      {error && <div>{error}</div>}
    </Container>
  );
}

PostersSection.propTypes = {
  title: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
  showButtons: PropTypes.bool,
};
PostersSection.defaultProps = {
  showButtons: false,
};

export default PostersSection;
