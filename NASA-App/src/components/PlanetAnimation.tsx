// src/components/PlanetAnimation.tsx
import React from "react";
import Planet from "./Planet";

const PlanetAnimation: React.FC = () => {
  return (
    <div className="relative flex justify-center items-center h-screen bg-black">
      <Planet
        name="Earth"
        size={100}
        color="blue" // Color para la Tierra
        animation="animate-spin"
      />
      <Planet
        name="Mars"
        size={80}
        color="red" // Color para Marte
        animation="animate-bounce"
      />
      <Planet
        name="Jupiter"
        size={120}
        color="orange" // Color para Júpiter
        animation="animate-pulse"
      />
      <Planet
        name="Saturn"
        size={110}
        color="gold" // Color para Saturno
        animation="animate-wiggle"
      />
      <Planet
        name="Neptune"
        size={90}
        color="navy" // Color para Neptuno
        animation="animate-bounce"
      />
      {/* Añade más planetas si lo deseas */}
    </div>
  );
};

export default PlanetAnimation;
