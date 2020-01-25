import React from 'react';
import Posters from 'components/Posters';
import { Container, Title } from './styles';

export default function PostersSection({ movies, title }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Posters movies={movies} />
    </Container>
  );
}
