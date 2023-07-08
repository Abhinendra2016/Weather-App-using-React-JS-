import axios from 'axios';

const API_KEY = '67b85dfd1b4e6cfc165362f8cf4bce6d';
const API_URL = 'http://api.openweathermap.org/data/2.5/weather';

export const getWeather = async (city, country) => {
    try {
        let response = await axios.get(`${API_URL}?q=${encodeURIComponent(city)},${encodeURIComponent(country)}&appid=${API_KEY}&units=metric`);
        return response.data;
    } catch (error) {
        console.log('Error while calling the api ', error.message);
        return error.response;
    }
}