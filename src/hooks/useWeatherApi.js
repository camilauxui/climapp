import { useState } from "react";

const useWeatherApi = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    try {
      setError(null);
      setWeatherData(null);
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return { weatherData, error, fetchWeather };
};

export default useWeatherApi;
