import { useState } from "react";

const useWeatherApi = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Función para obtener los datos del clima
  const fetchWeather = async (city) => {
    // Usar la variable de entorno para la clave de API
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    try {
      setLoading(true); // Establecer estado de carga
      setError(null); // Resetear el error
      setWeatherData(null); // Resetear los datos del clima

      const response = await fetch(API_URL); // Realizar la solicitud a la API

      // Manejar diferentes códigos de estado HTTP
      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("API Key inválida");
        } else if (response.status === 404) {
          throw new Error("Ciudad no encontrada");
        } else {
          throw new Error("Error de la API");
        }
      }

      const data = await response.json(); // Convertir la respuesta a JSON

      // Validar que los datos de la API contengan los campos esperados
      if (!data || !data.weather || !data.main) {
        throw new Error("Datos de la API incompletos o inválidos");
      }

      setWeatherData(data); // Establecer los datos del clima
    } catch (err) {
      setError(err.message || "Ocurrió un error desconocido"); // Manejar errores
    } finally {
      setLoading(false); // Establecer estado de carga a falso
    }
  };

  // Devolver los estados y la función fetchWeather
  return { weatherData, error, fetchWeather, loading };
};

export default useWeatherApi;
