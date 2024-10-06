// src/components/Home.tsx
import React from "react";

const Home: React.FC = () => {
  // Generar estrellas aleatorias
  const stars = Array.from({ length: 100 }).map((_, index) => {
    const left = Math.random() * 100; // Posición horizontal aleatoria
    const top = Math.random() * 100; // Posición vertical aleatoria
    const size = Math.random() * 2 + 1; // Tamaño aleatorio entre 1 y 3

    // Crear una duración de parpadeo aleatoria para cada estrella
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
      <h1 className="text-5xl font-bold mb-4 text-white">Bienvenido al Hackathon</h1>
      <p className="text-xl text-center text-white">
        Aquí podrás encontrar información sobre los proyectos y actividades del hackathon. ¡Únete y diviértete!
      </p>
    </div>
  );
};

export default Home;
