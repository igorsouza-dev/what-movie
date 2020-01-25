import React from 'react';
import PropTypes from 'prop-types';

import Posters from 'components/Posters';
import { Container, Title } from './styles';

function PostersSection({ movies, title, loading }) {
  return (
    <Container>
      <Title>{title}</Title>
      {loading && <div>Loading...</div>}
      {movies.length ? <Posters movies={movies} /> : <div>No movies found</div>}
    </Container>
  );
}

PostersSection.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};
PostersSection.defaultProps = {
  loading: false,
};
export default PostersSection;
