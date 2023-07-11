import axios from 'axios';

const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL;

export const getWeather = async (city, country) => {
    try {
        let response = await axios.get(`${API_URL}?q=${encodeURIComponent(city)},${encodeURIComponent(country)}&appid=${API_KEY}&units=metric`);
        return response.data;
    } catch (error) {
        console.log('Error while calling the API:', error.message);
        return error.response;
    }
}
