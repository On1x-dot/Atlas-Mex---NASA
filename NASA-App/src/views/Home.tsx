// src/components/Home.tsx
import React from "react";
import Menu from "../components/Menu"; 
import BottomMenu from "../components/BottomMenu"; // Importar el componente BottomMenu
import ViewMenu from "../components/ViewMenu"; // Importar el nuevo componente ViewMenu

const Home: React.FC = () => {
  // Generar estrellas aleatorias
  const stars = Array.from({ length: 100 }).map((_, index) => {
    const left = Math.random() * 100; // Posición horizontal aleatoria
    const top = Math.random() * 100; // Posición vertical aleatoria
    const size = Math.random() * 2 + 1; // Tamaño aleatorio entre 1 y 3
    const duration = Math.random() * 2 + 1; // Duración aleatoria entre 1 y 3 segundos

    return (
      <div
        key={index}
        className="star"
        style={{
          left: `${left}vw`,
          top: `${top}vh`,
          width: `${size}px`,
          height: `${size}px`,
          animationDuration: `${duration}s`, // Aplicar la duración aleatoria
        }}
      />
    );
  });

  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <div className="stars">{stars}</div>
      <Menu /> {/* Menú superior */}
      <ViewMenu /> {/* Menú cuadrado con botones */}
      <BottomMenu /> {/* Menú inferior */}
    </div>
  );
};

export default Home;
