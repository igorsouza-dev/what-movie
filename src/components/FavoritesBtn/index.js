import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaStar } from 'react-icons/fa';
import { toggleList } from 'store/actions';
import { Container, Notification } from './styles';

export default function FavoritesBtn() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const amount = Object.keys(favorites).length;

  return (
    <Container onClick={() => dispatch(toggleList('favorites'))}>
      <FaStar color="#fff" size={24} />
      <Notification>{amount}</Notification>
    </Container>
  );
}
