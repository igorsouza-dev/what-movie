import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { FaFilm } from 'react-icons/fa';

import PosterButtons from 'components/PosterButtons';
import {
  Container,
  NameContainer,
  InfoContainer,
  ImgContainer,
  NoPoster,
  Score,
} from './styles';

function Poster({ movie, showButtons }) {
  const history = useHistory();

  function goToDetail() {
    history.push(`/details/${movie.id}`);
  }

  return (
    <Container>
      <Score>
        {movie.vote_average}
        /10
      </Score>
      {movie.url && (
        <ImgContainer onClick={goToDetail} data-testid="poster-img-container">
          <img src={movie.url} alt={movie.original_title} />
        </ImgContainer>
      )}
      {!movie.url && (
        <NoPoster onClick={goToDetail} data-testid="no-poster-container">
          <FaFilm color="#fff" size={48} />
        </NoPoster>
      )}
      <InfoContainer>
        <NameContainer onClick={goToDetail} data-testid="name-container">
          <strong>{movie.original_title}</strong>
        </NameContainer>
        {showButtons && <PosterButtons movie={movie} />}
      </InfoContainer>
    </Container>
  );
}
Poster.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    vote_average: PropTypes.number,
    url: PropTypes.string,
    original_title: PropTypes.string,
  }).isRequired,
  showButtons: PropTypes.bool,
};
Poster.defaultProps = {
  showButtons: false,
};
export default Poster;
