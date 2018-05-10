const API_KEY = '121a52ea2261584801dc9b9e04f53c2b';
const ROOT_URL = "api.openweathermap.org/data/2.5/forecast?appid=" + API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
    return {
        type: FETCH_WEATHER
    };
}