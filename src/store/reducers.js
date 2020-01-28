import { produce } from 'immer';

export const INITIAL_STATE = {
  favorites: {},
  watchLater: {},
  showList: null,
};

export default function reducers(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'ADD_FAVORITE':
        draft.favorites[action.payload.movie.id] = action.payload.movie;
        break;
      case 'ADD_WATCHLATER':
        draft.watchLater[action.payload.movie.id] = action.payload.movie;
        break;
      case 'REMOVE_FAVORITE':
        delete draft.favorites[action.payload.id];
        break;
      case 'TOGGLE_LIST':
        if (action.payload.type === state.showList) {
          draft.showList = null;
        } else {
          draft.showList = action.payload.type;
        }
        break;
      case 'REMOVE_WATCHLATER':
        delete draft.watchLater[action.payload.id];
        break;
      default:
    }
  });
}
