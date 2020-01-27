import React from 'react';
import { useSelector } from 'react-redux';

import PageContainer from 'components/PageContainer';

import {
  Container, Section, Title, List, ListItem,
} from './styles';

export default function User() {
  const favorites = useSelector((state) => state.favorites);
  const watchLater = useSelector((state) => state.watchLater);
  const favoritesArray = Object.keys(favorites);
  const watchLaterArray = Object.keys(watchLater);
  return (
    <PageContainer>
      <Container>
        <Section>
          <Title>Favorites</Title>
          <List>
            {favoritesArray.map((key) => (
              <ListItem>
                {favorites[key].original_title}
              </ListItem>
            ))}
          </List>
        </Section>
        <Section>
          <Title>Watch Later</Title>
          <List>
            {watchLaterArray.map((key) => (
              <ListItem>
                {watchLater[key].original_title}
              </ListItem>
            ))}
          </List>
        </Section>
      </Container>
    </PageContainer>
  );
}
