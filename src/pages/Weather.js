import React, { useState, useEffect } from 'react';
import './../App.css';

const Weather = () => {
  const [utcTime, setUtcTime] = useState('');
  const [localTime, setLocalTime] = useState('');
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState('');
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const API_KEY = 'd434f2813aa4eb60f5467374e854cc2b'; // Replace with your OpenWeather API key

  useEffect(() => {
    // Fetch IP address
    fetch('http://worldtimeapi.org/api/ip')
      .then(response => response.json())
      .then(data => {
        // Use IP address to get location
        const ipAddress = data.client_ip;
        fetch(`http://worldtimeapi.org/api/ip/${ipAddress}`)
          .then(response => response.json())
          .then(data => {
            setLocation(data.timezone);
            const localDate = new Date(data.datetime);
            setLocalTime(localDate.toLocaleTimeString());
          })
          .catch(error => console.error('Error fetching location and time:', error));
      })
      .catch(error => console.error('Error fetching IP address:', error));

    // Get current UTC time
    const utcDate = new Date();
    setUtcTime(utcDate.toUTCString());

    // Fetch latitude and longitude using geolocation API
    navigator.geolocation.getCurrentPosition(position => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    }, error => {
      console.error('Error fetching geolocation:', error);
    });

  }, []);

  useEffect(() => {
    // Fetch weather information based on latitude and longitude
    if (lat && lon) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => {
          // Process weather data and set state accordingly
          setWeather(data.main);
        })
        .catch(error => console.error('Error fetching weather:', error));
    }
  }, [lat, lon]);

  return (
    <div className="main-content">
      <div className="main-content__section">
        <h3>Time</h3>
        <p>UTC Time: {utcTime}</p>
        <p>Local Time ({location}): {localTime}</p>
      </div>
      <div className="main-content__section">
        <h3>Weather</h3>
        <p>Temperature: {weather.temp}°C</p>
        <p>Humidity: {weather.humidity}%</p>
      </div>
    </div>
    
  );
};

export default Weather;