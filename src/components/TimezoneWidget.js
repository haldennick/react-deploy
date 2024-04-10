// TimezoneWidget.js
import React, { useState, useEffect } from 'react';
import './../App.css';

const TimezoneWidget = () => {
  const [utcTime, setUtcTime] = useState('');
  const [localTime, setLocalTime] = useState('');
  const [location, setLocation] = useState('');
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');

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

  return (
    
    <div className="timezone-widget">
      <h3>Timezone</h3>
      <div className="timezone-details">
      <div className="main-content__section">
        <h3>Time</h3>
        <p>UTC Time: {utcTime}</p>
        <p>Local Time ({location}): {localTime}</p>
      </div>
      </div>
    </div>
  );
};

export default TimezoneWidget;
