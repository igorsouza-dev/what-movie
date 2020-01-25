import React from 'react';
import SearchBar from 'components/SearchBar';
import Logo from 'components/Logo';

import { Container } from './styles';

export default function Main() {
  function handleSearch(search) {
    console.log(search);
  }
  return (
    <Container>
      <Logo />
      <SearchBar onSearch={handleSearch} />
    </Container>
  );
}
