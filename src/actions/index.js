import axios from 'axios';

const API_KEY = '9cb98e8b9e93866878de32b53297e8eb';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// by setting to variable, you will save yourself from some bugs...no need to remember or copy/paste strings
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);  // this makes the ajax call

  // console.log('Request: ', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
