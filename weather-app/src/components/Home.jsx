import React, { useState } from 'react';
import {getCurrentWeather} from '../api/weatherApi'

export const Weatherform = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (!city) {
      alert('Please enter a city name');
      return;
    }

    setLoading(true);
    try {
      const response = await getCurrentWeather(city);
      setWeather(response.data);
    } catch (error) {
      alert('Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Weather App</h1>

      <input
        type="text"
        placeholder="Enter the City Name.."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleClick}>
        See {city || 'City'} Weather
      </button>

      <br />
      <br />

      {loading && <p>Loading...</p>}

      {weather && (
        <div>
          <h2>{weather.location.name}</h2>
          <p>Temperature: {weather.current.temp_c} °C</p>
          <p>Condition: {weather.current.condition.text}</p>
          <img
            src={weather.current.condition.icon}
            alt="weather"
          />
        </div>
      )}
    </div>
  );
};
