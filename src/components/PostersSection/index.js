import React from 'react';
import PropTypes from 'prop-types';

import Posters from 'components/Posters';
import { Container, Title } from './styles';

function PostersSection({ movies, title }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Posters movies={movies} />
    </Container>
  );
}

PostersSection.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  title: PropTypes.string.isRequired,
};

export default PostersSection;
