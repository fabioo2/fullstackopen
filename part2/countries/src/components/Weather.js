import { useState, useEffect } from 'react';
import axios from 'axios';

const api_key = process.env.REACT_APP_API_KEY;

const Weather = ({ city }) => {
    const [weather, setWeather] = useState({
        temperature: 0,
        weather_icon: '',
        weather_description: '',
        wind_speed: 0,
        wind_direction: ''
    });

    const hook = () => {
        console.log(api_key);
        axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${city}`).then((response) => {
            const newWeatherObject = {
                temperature: response.data.current.temperature,
                weather_icon: response.data.current.weather_icons[0],
                weather_description: response.data.current.weather_descriptions,
                wind_speed: response.data.current.wind_speed,
                wind_direction: response.data.current.wind_dir
            };
            setWeather(newWeatherObject);
        });
    };

    useEffect(hook, [city]);
    return (
        <div>
            {' '}
            <p>
                <b>temperature: </b>
                {weather.temperature}
            </p>
            <br />
            <img src={weather.weather_icon} alt={weather.weather_description} style={{ width: '100px' }} /> <br />
            <p>
                <b>wind: </b>
                {weather.wind_speed} mph, direction {weather.wind_direction}
            </p>
        </div>
    );
};

export default Weather;
