import _ from 'lodash';
import { FETCH_TRIVIA } from '../actions';

export default function (state = {}, action){
  switch (action.type) {
    case FETCH_TRIVIA:
      return action.payload;
    default:
      return state;

  }
}
