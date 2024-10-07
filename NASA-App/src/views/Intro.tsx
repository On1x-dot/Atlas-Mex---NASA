// src/views/Intro.tsx
import React from "react";
import '../styles/Intro.css'; // Asegúrate de que los estilos estén importados

const Intro: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  return (
    <div className="intro-container">
      <h1>¡Welcome to this Journey!</h1>
      <button className="start-button" onClick={onStart}>
        Start
      </button>
    </div>
  );
};

export default Intro;
