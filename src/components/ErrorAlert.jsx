import React, { useState } from 'react';

const ErrorAlert = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!message || typeof message !== 'string') {
    return null; // No renderizar si el mensaje está vacío o no es una cadena.
  }

  if (!isVisible) {
    return null; // No renderizar si la alerta ha sido cerrada.
  }

  return (
    <div className="alert alert-danger text-center alert-dismissible fade show" role="alert">
      {message}
      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        onClick={() => setIsVisible(false)}
      ></button>
    </div>
  );
};

export default ErrorAlert;
