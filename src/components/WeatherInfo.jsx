import React from "react";

// Componente para mostrar información del clima
const WeatherInfo = ({ data }) => {
  // Verificar si los datos son válidos antes de renderizar
  if (!data || typeof data !== 'object') {
    return null; // No renderizar si los datos no son válidos
  }

  // Obtener las horas del amanecer y atardecer en formato legible
  const sunrise = new Date(data.sys?.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(data.sys?.sunset * 1000).toLocaleTimeString();

  return (
    <div className="card text-center">
      <div className="card-body">
        {/* Mostrar el nombre de la ciudad o un mensaje si no se encuentra */}
        <h2 className="card-title">{data.name || 'Ciudad no encontrada'}</h2>

        {/* Mostrar la descripción del clima */}
        <h4 className="card-text">{data.weather?.[0]?.description || 'No hay descripción disponible'}</h4>
        
        {/* Mostrar la temperatura actual, mínima y máxima */}
        <p className="card-text">
          <strong>Temperatura actual:</strong> {data.main?.temp !== undefined ? `${data.main.temp}°C` : 'N/A'}<br />
          <strong>Min:</strong> {data.main?.temp_min !== undefined ? `${data.main.temp_min}°C` : 'N/A'}<br />
          <strong>Max:</strong> {data.main?.temp_max !== undefined ? `${data.main.temp_max}°C` : 'N/A'}
        </p>

        {/* Mostrar la sensación térmica */}
        <p className="card-text"><strong>Sensación Térmica:</strong> {data.main?.feels_like !== undefined ? `${data.main.feels_like}°C` : 'N/A'}</p>

        {/* Mostrar la humedad */}
        <p className="card-text"><strong>Humedad:</strong> {data.main?.humidity !== undefined ? `${data.main.humidity}%` : 'N/A'}</p>

        {/* Mostrar la velocidad y dirección del viento */}
        <p className="card-text">
          <strong>Viento:</strong> {data.wind?.speed !== undefined ? `${data.wind.speed} m/s` : 'N/A'}<br />
          <strong>Dirección:</strong> {data.wind?.deg !== undefined ? `${data.wind.deg}°` : 'N/A'}
        </p>

        {/* Mostrar el icono del clima o una imagen genérica si no está disponible */}
        <img
          src={
            data.weather?.[0]?.icon
              ? `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
              : 'https://via.placeholder.com/50?text=N/A'
          }
          alt={data.weather?.[0]?.description || 'No hay descripción disponible'}
        />

        {/* Mostrar las horas del amanecer y atardecer */}
        <p className="card-text"><strong>Amanecer:</strong> {sunrise}</p>
        <p className="card-text"><strong>Atardecer:</strong> {sunset}</p>
      </div>
    </div>
  );
};

export default WeatherInfo;
