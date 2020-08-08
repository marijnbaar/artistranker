import { combineReducers } from 'redux';
import artistsReducer from './artistsReducer';

const rootReducer = combineReducers({
  artistList: artistsReducer,
});

export default rootReducer;
