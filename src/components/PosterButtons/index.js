import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  FaStar, FaPlus, FaMinus,
} from 'react-icons/fa';
import {
  addFavorite, addWatchlater, removeFavorite, removeWatchlater,
} from 'store/actions';
import {
  ButtonsContainer,
  Favorite,
  WatchLater,
} from './styles';

function PosterButtons({ movie }) {
  const favorites = useSelector((state) => state.favorites);
  const watchLater = useSelector((state) => state.watchLater);

  const dispatch = useDispatch();

  const isOnWatchLater = watchLater[movie.id];
  const isOnFavorites = favorites[movie.id];

  function handleWatchLater(m) {
    if (isOnWatchLater) {
      dispatch(removeWatchlater(m.id));
    } else {
      dispatch(addWatchlater(m));
    }
  }
  function handleFavorite(m) {
    if (isOnFavorites) {
      dispatch(removeFavorite(m.id));
    } else {
      dispatch(addFavorite(m));
    }
  }
  return (
    <ButtonsContainer>
      <WatchLater type="button" onClick={() => handleWatchLater(movie)}>
        {isOnWatchLater ? (
          <FaMinus size={20} color="#fff" />
        ) : (
          <FaPlus size={20} color="#fff" />
        )}
        <span>Watch Later</span>
      </WatchLater>
      <Favorite type="button" onClick={() => handleFavorite(movie)} data-testid="favorite">
        <FaStar size={24} color={isOnFavorites ? '#ff0' : '#fff'} />
      </Favorite>
    </ButtonsContainer>
  );
}

PosterButtons.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

export default PosterButtons;
