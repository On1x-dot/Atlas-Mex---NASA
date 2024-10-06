// src/App.tsx
import React from "react";
import Home from "./views/Home";
import './App.css'; // Asegúrate de que los estilos estén importados

const App: React.FC = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
