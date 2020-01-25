import React from 'react';
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
  Score
} from './styles';

export default function Poster({ movie }) {
  return (
    <Container>
      <Score>
        {movie.vote_average}/10
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
