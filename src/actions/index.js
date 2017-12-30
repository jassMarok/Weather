import axios from 'axios'
const API_KEY ='b2418ccbd9b2cdda3fb9addcfb924c26';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER='FETCH_WEATHER';

export function fetchWeather(city){
	const url =`${ROOT_URL}&q=${city},ca`;
	const request =axios.get(url);

	

	return{
		type:FETCH_WEATHER,
		payload:request
	};
}