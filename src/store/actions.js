export function addFavorite(movie) {
  return {
    type: 'ADD_FAVORITE',
    payload: { movie },
  };
}
export function removeFavorite(id) {
  return {
    type: 'REMOVE_FAVORITE',
    payload: { id },
  };
}
export function addWatchlater(movie) {
  return {
    type: 'ADD_WATCHLATER',
    payload: { movie },
  };
}
export function removeWatchlater(id) {
  return {
    type: 'REMOVE_WATCHLATER',
    payload: { id },
  };
}
export function toggleList(type) {
  return {
    type: 'TOGGLE_LIST',
    payload: { type },
  };
}
export function reset() {
  return {
    type: 'RESET',
    payload: {},
  };
}
