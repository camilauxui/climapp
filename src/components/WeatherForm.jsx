const WeatherForm = ({ query, setQuery, onSearch }) => (
  <div className="d-flex justify-content-center mb-4">
    <input
      type="text"
      className="form-control w-50"
      placeholder="Enter city name"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
    <button className="btn btn-primary ms-2" onClick={onSearch}>
      Search
    </button>
  </div>
);

export default WeatherForm;