import React from "react";

const WeatherForm = ({ query, setQuery, onSearch }) => {
  const handleSearch = () => {
    const trimmedQuery = query.trim();
    const isValidQuery = /^[a-zA-Z\s]+$/.test(trimmedQuery);

    if (trimmedQuery === "") {
      alert("Debe ingresar una ciudad");
      return;
    } else if (!isValidQuery) {
      alert("Ingrese solo letras y espacios");
      return;
    }

    onSearch();
  };

  return (
    <div className="d-flex justify-content-center mb-4">
      <input
        type="text"
        className="form-control w-50"
        placeholder="Escribe el nombre de una ciudad"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="btn btn-primary ms-2"
        onClick={handleSearch}
      >
        Consulta su Clima
      </button>
    </div>
  );
};

export default WeatherForm;
