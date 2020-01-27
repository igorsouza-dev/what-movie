import React from 'react';
import PropTypes from 'prop-types';
import Poster from 'components/Poster';
import { Container } from './styles';

function Posters({ movies, type, showButtons }) {
  return (
    <Container type={type}>
      {movies.map((movie) => (
        <Poster movie={movie} key={movie.id} showButtons={showButtons} />
      ))}
    </Container>
  );
}
Posters.propTypes = {
  type: PropTypes.string,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  showButtons: PropTypes.bool,
};
Posters.defaultProps = {
  type: 'flex',
  showButtons: false,
};
export default Posters;
