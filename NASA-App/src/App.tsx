import React, { useState, useEffect } from "react";
import Home from "./views/Home";
import Intro from "./views/Intro"; // Asegúrate de que la ruta sea correcta
import Comet from "./components/Planets/Comet"; // Importa el componente Comet
import './App.css'; // Asegúrate de que los estilos estén importados

const App: React.FC = () => {
  const [showHome, setShowHome] = useState(false);
  const [showComet, setShowComet] = useState(false);

  const handleStart = () => {
    setShowHome(true); // Cambia a la vista de Home al hacer clic en "Start"
  };

  useEffect(() => {
    // Temporizador para mostrar el cometa después de 10 segundos
    const timer = setTimeout(() => {
      setShowComet(true); // Muestra el cometa
    }, 10000); // 10 segundos en milisegundos

    // Limpieza del temporizador
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showHome ? (
        <div className="fade-in">
          <Home />
          {showComet && <Comet />} {/* Muestra el cometa solo si showComet es true */}
        </div>
      ) : (
        <Intro onStart={handleStart} />
      )}
    </div>
  );
};

export default App;
