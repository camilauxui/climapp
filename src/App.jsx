import { useState } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherInfo from './components/WeatherInfo';
import ErrorAlert from './components/ErrorAlert';
import useWeatherApi from './hooks/useWeatherApi';

const App = () => {
  const [query, setQuery] = useState('');
  const { weatherData, error, fetchWeather } = useWeatherApi();

  const handleSearch = () => {
    if (query.trim()) {
      fetchWeather(query);
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Weather App</h1>
      <WeatherForm query={query} setQuery={setQuery} onSearch={handleSearch} />
      {error && <ErrorAlert message={error} />}
      {weatherData && <WeatherInfo data={weatherData} />}
    </div>
  );
};

export default App;