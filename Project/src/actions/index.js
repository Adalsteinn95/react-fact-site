import axios from 'axios';


export const FETCH_TRIVIA = 'fetch_trivia';

const ROOT_URL = "http://numbersapi.com/random/year";


export function fetchTrivia(){
  const request = axios.get(`${ROOT_URL}`);


  return {
    type: FETCH_TRIVIA,
    payload: request
  };
}
