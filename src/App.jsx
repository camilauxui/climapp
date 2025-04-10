import React, { useState } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherInfo from './components/WeatherInfo';
import ErrorAlert from './components/ErrorAlert';
import useWeatherApi from './hooks/useWeatherApi';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

const LoadingSpinner = () => (
  <div className="spinner-border text-primary" role="status">
    <span className="visually-hidden">Cargando...</span>
  </div>
);

const App = () => {
  const [query, setQuery] = useState('');
  const { weatherData, error, fetchWeather, loading } = useWeatherApi();

  const handleSearch = () => {
    if (query.trim()) {
      fetchWeather(query);
    } else {
      console.log('Please enter a valid city name.');
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4"> 🔅 Info Clima 🌧️</h1>

      <WeatherForm query={query} setQuery={setQuery} onSearch={handleSearch} />

      {loading && <LoadingSpinner />}

      {error && <ErrorAlert message={error} />}

      {weatherData && <WeatherInfo data={weatherData} />}
    </div>
  );
};

export default App;
