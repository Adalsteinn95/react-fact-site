import { combineReducers } from 'redux';
import TriviaReducer from './reducer_trivia.js';

const rootReducer = combineReducers({
  facts: TriviaReducer

});

export default rootReducer;
