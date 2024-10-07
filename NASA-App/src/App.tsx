// src/App.tsx
import React, { useState } from "react";
import Home from "./views/Home";
import Intro from "./views/Intro"; // Asegúrate de que la ruta sea correcta
import './App.css'; // Asegúrate de que los estilos estén importados

const App: React.FC = () => {
  const [showHome, setShowHome] = useState(false);

  const handleStart = () => {
    setShowHome(true); // Cambia a la vista de Home al hacer clic en "Start"
  };

  return (
    <div>
      {showHome ? (
        <div className="fade-in">
          <Home />
        </div>
      ) : (
        <Intro onStart={handleStart} />
      )}
    </div>
  );
};

export default App;
