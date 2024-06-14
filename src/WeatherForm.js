import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloud, faCloudRain, faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const WeatherForm = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState('imperial'); // 'metric' for Celsius, 'imperial' for Fahrenheit
  const [loading, setLoading] = useState(false);

  const apiKey = 'dcd977a467eab6a2a190068ce279a825';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`);
      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (err) {
      setWeatherData(null);
      setError('Error fetching weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const convertCelsiusToFahrenheit = (celsius) => {
    return (celsius * 9/5) + 32;
  };

  const toggleTemperatureUnit = () => {
    setUnit(unit === 'metric' ? 'imperial' : 'metric');
  };

  return (
    <div className='WeatherForm'>
      <form onSubmit={handleSubmit}>
        <label>
          Enter City:
          <input 
            type="text" 
            value={city} 
            onChange={handleInputChange} 
            required 
            style={{ width: '300px', padding: '8px', fontSize: '16px' }}  
          />
        </label>
        <button 
          className="weatherButton" 
          type="submit" 
          style={{ width: '150px', padding: '10px', fontSize: '16px'}}  
        >
          Get Weather
        </button>
        <button
          className="weatherButton"
          onClick={toggleTemperatureUnit}
          style={{ marginLeft: '80px', fontSize: '15.5px' }}
        >
          {unit === 'metric' ? 'Switch to Fahrenheit' : 'Switch to Celsius'}
        </button>
      </form>

      {loading && <FontAwesomeIcon icon={faSpinner} spin size="2x" />}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weatherData && weatherData.sys && (
        <div>
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <p>
            <FontAwesomeIcon icon={faSun} /> {weatherData.main?.temp}°{unit === 'metric' ? 'C' : 'F'}
          </p>
          <p>Humidity: {weatherData.main?.humidity}%</p>
          <p>Wind Speed: {weatherData.wind?.speed} m/s</p>
          <p>Description: {weatherData.weather[0]?.description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherForm;