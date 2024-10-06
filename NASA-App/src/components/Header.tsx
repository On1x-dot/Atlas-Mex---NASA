// src/components/Planet.tsx
import React from "react";

interface PlanetProps {
  name: string;
  size: number; // tamaño del planeta
  color: string; // color del planeta
  animation: string; // clase de animación
}

const Planet: React.FC<PlanetProps> = ({ name, size, color, animation }) => {
  return (
    <div
      className={`flex items-center justify-center rounded-full ${animation}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
      }}
      title={name} // Tooltip con el nombre del planeta
    >
      {/* Opcional: Puedes agregar el nombre del planeta dentro del círculo */}
      <span className="text-white font-bold">{name}</span>
    </div>
  );
};

export default Planet;
