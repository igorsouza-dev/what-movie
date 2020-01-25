import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { FaFilm, FaStar } from 'react-icons/fa';
import {
  Container,
  NameContainer,
  InfoContainer,
  ButtonsContainer,
  ImgContainer,
  NoPoster,
  Favorite,
  WatchLater,
  Score,
} from './styles';

function Poster({ movie }) {
  const history = useHistory();
  function goToDetail() {
    history.push(`/details/${movie.id}`);
  }
  return (
    <Container onClick={goToDetail}>
      <Score>
        {movie.vote_average}
        /10
      </Score>
      {movie.url && (
        <ImgContainer>
          <img src={movie.url} alt={movie.original_title} />
        </ImgContainer>
      )}
      {!movie.url && (
        <NoPoster>
          <FaFilm color="#fff" size={48} />
        </NoPoster>
      )}
      <InfoContainer>
        <NameContainer>
          <strong>{movie.original_title}</strong>
        </NameContainer>
        <ButtonsContainer>
          <WatchLater type="button">Watch Later</WatchLater>
          <Favorite type="button">
            <FaStar size={24} color="#fff" />
          </Favorite>
        </ButtonsContainer>
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
};
export default Poster;
