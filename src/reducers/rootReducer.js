import { combineReducers } from 'redux';
import greetingText from './greetingReducer';
import todosReducer from './todosReducer';

const rootReducer = combineReducers({
  greetingText,
  todoList: todosReducer,
});

export default rootReducer;
