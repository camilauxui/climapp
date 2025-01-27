### **README para la App del Clima**

# WeatherApp

![Adalid Logo](src/assets/logo.jpeg)

**WeatherApp** es una aplicación React diseñada para consumir datos de una API de clima en tiempo real. Permite a los usuarios buscar el clima actual de cualquier ciudad y muestra información detallada como temperatura, humedad, velocidad del viento, y más.

## **Características Principales**

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
   - Implementación con `Fetch API` y `Axios`.

3. **Gestión de Errores**:

   - Manejo de errores cuando:
     - El usuario ingresa una ciudad inválida.
     - Hay problemas de red o de conexión con la API.
   - Mensajes de error claros y amigables.

4. **Diseño Responsivo**:

   - Interfaz moderna y adaptativa con **Bootstrap** para una experiencia fluida en cualquier dispositivo.

5. **Optimización del Código**:
   - Uso de hooks como `useState` y `useEffect` para la gestión del estado y efectos secundarios.
   - Creación de hooks personalizados para separar la lógica de negocio de la UI.

## **Estructura del Proyecto**

```plaintext
WeatherApp/
├── public/                     # Archivos públicos
├── src/                        # Código fuente
│   ├── components/             # Componentes reutilizables
│   │   ├── WeatherForm.jsx     # Formulario para buscar el clima
│   │   ├── WeatherInfo.jsx     # Mostrar la información del clima
│   │   ├── ErrorAlert.jsx      # Componente para mostrar errores
│   ├── hooks/                  # Hooks personalizados
│   │   ├── useWeatherApi.js    # Lógica para consumir la API del clima
│   ├── styles.css              # Estilos globales
│   ├── App.jsx                 # Componente principal
│   ├── main.jsx                # Punto de entrada de ReactDOM
├── .env                        # Variables de entorno para la API Key
├── package.json                # Configuración del proyecto y dependencias
├── vite.config.js              # Configuración de Vite
├── README.md                   # Documentación del proyecto
```

## **Cómo Ejecutar el Proyecto**

### **Prerrequisitos**

Antes de ejecutar el proyecto, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (v16 o superior).
- [npm](https://www.npmjs.com/).

### **Pasos para Configuración**

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/tuusuario/WeatherApp.git
   cd WeatherApp
   ```

2. **Instalar las dependencias**:

   ```bash
   npm install
   ```

3. **Configurar la API Key**:

   - Regístrate en [OpenWeatherMap](https://openweathermap.org/) y obtén tu API Key.
   - Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:
     ```plaintext
     VITE_WEATHER_API_KEY=tu_api_key_aqui
     ```

4. **Ejecutar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:5173`.

## **Cómo Funciona**

### **Búsqueda de Clima**

- Escribe el nombre de una ciudad en el campo de búsqueda y presiona el botón "Search".
- La app muestra:
  - Temperatura actual, mínima y máxima.
  - Descripción del clima y un ícono representativo.
  - Humedad, velocidad del viento y dirección.
  - Hora de amanecer y atardecer.

### **Gestión de Errores**

- Si la ciudad no se encuentra, muestra un mensaje de error como "City not found".
- Maneja problemas de red o claves de API inválidas.

## **Datos Obtenidos de la API**

1. **Clima Básico**:

   - Descripción (despejado, nublado, etc.).
   - Icono para representación gráfica.

2. **Temperatura**:

   - Actual, mínima, máxima, y sensación térmica.

3. **Ambiente**:

   - Humedad (%).
   - Presión atmosférica (hPa).

4. **Viento**:

   - Velocidad y dirección.

5. **Horario Solar**:
   - Hora del amanecer y atardecer.

## **Tecnologías Utilizadas**

- **React**: Framework para construir interfaces de usuario.
- **Vite**: Herramienta para desarrollo rápido.
- **Bootstrap**: Framework CSS para diseño responsivo.
- **Fetch API** y **Axios**: Para consumir APIs.
- **Hooks de React**: `useState`, `useEffect` y hooks personalizados.

## **Notas de Seguridad**

- La clave de API se almacena en variables de entorno (`.env`) para evitar exponerla en el código fuente.
- En entornos reales, las claves sensibles y validaciones deben manejarse del lado del servidor.

## **Soporte**

Si tienes preguntas o encuentras algún problema, por favor abre un issue en este repositorio o contacta al autor.

## Autor

- [Brayan Diaz C](https://github.com/brayandiazc)

Con ❤️ por [Adalid CL](https://github.com/adalid-cl) 😊
