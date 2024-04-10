import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';

const WorldMapWidget = () => {
  useEffect(() => {
    // Check if the map container element exists
    const mapElement = document.getElementById('map');
    if (!mapElement) {
      console.error('Map container element not found.');
      return;
    }

    // Create a map instance
    const map = L.map(mapElement).setView([0, 0], 2);

    // Add the OpenStreetMap base layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Get the user's location using the Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          map.setView([latitude, longitude], 10);
          L.marker([latitude, longitude]).addTo(map);
        },
        (error) => {
          console.error('Error getting user location:', error);
          // Set default view if location detection fails
          map.setView([0, 0], 2);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }

    return () => {
      // Clean up when the component is unmounted
      map.remove();
    };
  }, []);

  return (
    <div id="map" style={{ height: '400px', width: '100%' }}></div>
  );
};

export default WorldMapWidget;
