import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleList } from 'store/actions';
import { FaClock } from 'react-icons/fa';
import { Container, Notification } from './styles';

export default function WatchLaterBtn() {
  const dispatch = useDispatch();
  const watchLater = useSelector((state) => state.watchLater);
  const amount = Object.keys(watchLater).length;
  return (
    <Container onClick={() => dispatch(toggleList('watchLater'))}>
      <FaClock color="#fff" size={24} />
      <Notification>{amount}</Notification>
    </Container>
  );
}
