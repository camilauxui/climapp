<<<<<<< HEAD
# WeatherApp

**WeatherApp** es una aplicación React diseñada para consumir datos de una API de clima en tiempo real. Los estudiantes deberán identificar y corregir errores, implementar características pendientes y mejorar la funcionalidad para que la app sea completamente funcional.

## Objetivo

El objetivo de este proyecto es aprender a consumir APIs, manejar estado y efectos en React, optimizar el rendimiento, gestionar errores y aplicar buenas prácticas en el desarrollo de aplicaciones Cliente/Servidor.

## Características Principales

1. **Búsqueda de Clima por Ciudad**:

   - Los usuarios pueden buscar el clima actual escribiendo el nombre de cualquier ciudad.
   - Muestra datos como:
     - Temperatura actual, mínima y máxima.
     - Sensación térmica.
     - Humedad.
     - Velocidad y dirección del viento.
     - Descripción del clima (despejado, nublado, lluvia, etc.).
     - Hora del amanecer y atardecer.

2. **Consumo de API en React**:

   - Uso de la API de [OpenWeatherMap](https://openweathermap.org/) para obtener datos del clima.
   - Implementación utilizando `Fetch API`.

4. **Diseño Responsivo**:
   - Uso de **Bootstrap** para una experiencia de usuario adaptativa.

## Estructura del Proyecto

```plaintext
WeatherApp/
├── public/                     # Archivos públicos
├── src/                        # Código fuente
│   ├── components/             # Componentes reutilizables
│   │   ├── FormWeather.jsx     # Formulario para buscar el clima (nombre erróneo)
│   │   ├── InfoWeather.jsx     # Mostrar la información del clima (nombre erróneo)
│   │   ├── Error.jsx           # Componente para mostrar errores (nombre erróneo)
│   ├── hooks/                  # Hooks personalizados
│   │   ├── weatherApiHook.js   # Hook para consumir la API del clima (nombre erróneo)
│   ├── styles.css              # Estilos globales
│   ├── application.jsx         # Componente principal (nombre erróneo)
│   ├── main.jsx                # Punto de entrada de ReactDOM
├── .env                        # Variables de entorno para la API Key
├── package.json                # Configuración del proyecto y dependencias
├── vite.config.js              # Configuración de Vite
├── README.md                   # Documentación del proyecto
```



### Prerequisitos

Antes de ejecutar el proyecto, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (v16 o superior).
- [npm](https://www.npmjs.com/).


