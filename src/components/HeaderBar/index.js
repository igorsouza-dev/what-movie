import React from 'react';
import SearchBar from 'components/SearchBar';
import Logo from 'components/Logo';
import WatchLaterBtn from 'components/WatchLaterBtn';
import FavoritesBtn from 'components/FavoritesBtn';
import { Container, LinkContainer } from './styles';

export default function HeaderBar() {
  return (
    <Container>
      <LinkContainer to="/">
        <Logo size={40} color="#fff" />
      </LinkContainer>
      <SearchBar small />

      <WatchLaterBtn />
      <FavoritesBtn />
    </Container>
  );
}
