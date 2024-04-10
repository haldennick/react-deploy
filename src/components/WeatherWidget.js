// WeatherWidget.js
import React from 'react';
import './Weather.css';


const WeatherWidget = ({ weather }) => {
  const { main, description, icon } = weather.weather[0];
  const { temp, feels_like, temp_min, temp_max, humidity } = weather.main;

  return (
    <div className="weather-widget">
      <h3>Weather</h3>
      <div className="weather-details">
        <div className="weather-icon">
          <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt={description} />
        </div>
        <div className="weather-description">
          <p>{description}</p>
          <p>Temperature: {temp}°C</p>
          <p>Feels like: {feels_like}°C</p>
          <p>Min temperature: {temp_min}°C</p>
          <p>Max temperature: {temp_max}°C</p>
          <p>Humidity: {humidity}%</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
