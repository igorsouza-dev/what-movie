import React from 'react';

import HeaderBar from 'components/HeaderBar';
import Footer from 'components/Footer';
import { Container, Content } from './styles';

export default function PageContainer({ children }) {
  return (
    <Container>
      <HeaderBar />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
}
