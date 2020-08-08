import { combineReducers } from 'redux';
import artistsReducer from './artistsReducer';
import counter from './counter';

const rootReducer = combineReducers({
  artistList: artistsReducer,
  counter
});

export default rootReducer;
