import { combineReducers } from 'redux';

const artistsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ARTIST':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          count: 0,
        },
      ];
    case 'UPDATE_ARTIST':
      return state.map(artist => (
        (artist.id === action.id)
          ? {
            ...artist,
            picture: action.picture,
            text: action.text,
          }
          : artist
      ));
    case 'INCREMENT':
      return state.map(artist => (
        (artist.id === action.id && artist.count < 5)
          ? { ...artist, count: artist.count + 1 }
          : artist
      ));
    case 'DECREMENT':
      return state.map(artist => (
        (artist.id === action.id && artist.count > 0)
          ? { ...artist, count: artist.count - 1 }
          : artist
      ));
    case 'SORT_ARTIST':
      return [...state.sort((high, low) => ((high.count < low.count) ? 1 : -1))];
    case 'DELETE_ARTIST':
      return state.filter(artist => artist.id !== action.id);
    default: return state;
  }
};

function artistPageReducer(state = false, action) {
  switch (action.type) {
    case 'DISPLAY_ARTIST':
      return true;
    case 'CLOSE_ARTIST':
      return false;
    default:
      return state;
  }
}

function artistIdReducer(state = false, action) {
  switch (action.type) {
    case 'DISPLAY_ARTIST':
      return action.id;
    case 'CLOSE_ARTIST':
      return false;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  artistList: artistsReducer,
  artistPageShow: artistPageReducer,
  artistId: artistIdReducer,
});

export default rootReducer;
