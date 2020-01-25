import React from 'react';

import SearchBar from 'components/SearchBar';
import Logo from 'components/Logo';
import { Container } from './styles';

export default function HeaderBar() {
  return (
    <Container>
      <Logo size={16} />
      <SearchBar />
    </Container>
  );
}
