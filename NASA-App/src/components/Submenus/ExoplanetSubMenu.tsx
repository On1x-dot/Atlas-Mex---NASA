import React from 'react';
import '../../styles/Submenus/ExoplanetSubMenu.css'

const ExoplanetSubMenu: React.FC = () => {
  return (
    <ul className="sub-menu">
      <li><a href="#exoplanet1">Exoplanet 1</a></li>
      <li><a href="#exoplanet2">Exoplanet 2</a></li>
      <li><a href="#exoplanet3">Exoplanet 3</a></li>
    </ul>
  );
};

export default ExoplanetSubMenu;
