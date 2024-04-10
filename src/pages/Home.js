// Home.js
import React, { useState, useEffect } from 'react';
import WeatherWidget from '../components/WeatherWidget';
import TimezoneWidget from '../components/TimezoneWidget';
import WorldMapWidget from '../components/WorldMapWidget';
import "./../components/Weather.css";

const Home = () => {
  // State variables for weather data, timezone information, and location coordinates
  const [weatherData, setWeatherData] = useState(null);
  const [timezoneData, setTimezoneData] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  // Fetch weather data based on location coordinates
  useEffect(() => {
    // Use geolocation API to get current coordinates
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        console.error('Error fetching geolocation:', error);
      }
    );
  }, []);

  // Fetch weather data when latitude and longitude are available
  useEffect(() => {
    if (latitude && longitude) {
      fetchWeatherData(latitude, longitude);
    }
  }, [latitude, longitude]);

  // Fetch weather data from OpenWeatherMap API
  const fetchWeatherData = (lat, lon) => {
    const API_KEY = 'd434f2813aa4eb60f5467374e854cc2b';
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  };

  // Fetch timezone data based on location coordinates
  useEffect(() => {
    if (latitude && longitude) {
      fetchTimezoneData(latitude, longitude);
    }
  }, [latitude, longitude]);

  // Fetch timezone data from TimezoneDB API
  const fetchTimezoneData = (lat, lon) => {
    const API_KEY = 'YOUR_TIMEZONEDB_API_KEY';
    const API_URL = `http://api.timezonedb.com/v2.1/get-time-zone?key=${API_KEY}&format=json&by=position&lat=${lat}&lng=${lon}`;

    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setTimezoneData(data);
      })
      .catch((error) => {
        console.error('Error fetching timezone data:', error);
      });
  };

  return (
    <div className="home">
      <h2>Welcome</h2>
      <div className="main-container">
        <div className="main-content__section">
            {/* Weather widget */}
        {weatherData && <WeatherWidget weather={weatherData} />}    
        </div>
        <div className="main-content__section">
               {/* Timezone widget */}
        {<TimezoneWidget/>}  
        </div>
      </div>
      {/* World map widget */}
      <WorldMapWidget latitude={latitude} longitude={longitude} />
      </div>
  );
};

export default Home;
