const WeatherInfo = ({ data }) => (
  <div className="card text-center">
    <div className="card-body">
      <h2 className="card-title">{data.name}</h2>
      <h4 className="card-text">
        {data.main.temp}°C - {data.weather[0].description}
      </h4>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt={data.weather[0].description}
      />
    </div>
  </div>
);

export default WeatherInfo;