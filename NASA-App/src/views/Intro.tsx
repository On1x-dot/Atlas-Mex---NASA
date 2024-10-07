import React, { useState } from "react";
import '../styles/Intro.css'; // Asegúrate de que los estilos estén importados

const Intro: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  const [showExoplanets, setShowExoplanets] = useState(true);
  const [showMission, setShowMission] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  const handleClick = () => {
    if (showExoplanets) {
      setShowExoplanets(false);
      setShowMission(true);
    } else if (showMission) {
      setShowMission(false);
      setShowWelcome(true);
    } else {
      onStart(); // Llama a la función onStart si se está mostrando la bienvenida
    }
  };

  return (
    <div className="intro-container" onClick={handleClick}>
      <div className="text-scroll-container">
        {showExoplanets && (
          <div className={`text-block ${showExoplanets ? "fade-in" : "fade-out"}`}>
            <h1>Exoplanets</h1>
            <p>
              Exoplanets are bodies beyond our solar system, they are planets that vary in size, texture and conditions.
              It is said that there are more planets than stars in our galaxy, which means that there’s more than a trillion planets in our galaxy, most of them the size of Earth.
              These exoplanets are further than humankind has ever reached, but somehow, we managed to find and classify these foreign lands.
            </p>
            <h2>This leads to the question of…¿How did we discover exoplanets?</h2>
            <p>For this question, there’s more than one way to answer since there are different ways to find and identify them:</p>
            <h3>RADIAL VELOCITY:</h3>
            <p>
              Radial Velocity is only one way to discover an exoplanet. This method consists of finding small alterations of the position of the central star. This central star´s position is slightly modified by the gravitational draw of another body which could be an exoplanet.
            </p>
            <h3>TRANSITS:</h3>
            <p>
              Transit is another method used in the discovery of new exoplanets. It occurs when a star slightly dims its light. The path of light is modified, which leads to the discovery of another exoplanet.
            </p>
            <h3>MICROLENSING:</h3>
            <p>
              The fabric of space-time gets warped with the gravitational field of the planet itself. This only works with big planets that have a strong gravitational draw. When the fabric warps, the position of other objects within the exoplanet changes, leading to the discovery of an exoplanet.
            </p>
          </div>
        )}

        {showMission && (
          <div className={`text-block ${showMission ? "fade-in" : "fade-out"}`}>
            <h1>NASA's Mission</h1>
            <p>
              NASA's goals with exoplanets are to discover and classify planetary systems and Earth-like planets around nearby stars in order to find evidence of life beyond Earth and habitable planets for humankind.
            </p>
          </div>
        )}

        {showWelcome && (
          <div className={`text-block ${showWelcome ? "fade-in" : "fade-out"}`}>
            <h1>Welcome to this Journey</h1>
            <button className="start-button" onClick={onStart}>
              Start
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Intro;
