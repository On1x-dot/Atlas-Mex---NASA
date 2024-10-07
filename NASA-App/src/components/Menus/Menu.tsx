// src/components/Menu.tsx
import React from "react";
import '../../styles/Menus/menu.css';

const Menu: React.FC = () => {
  return (
    <nav className="menu"> {/* Clase 'menu' para estilos aplicados */}
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#destinations">Destinations</a></li>
        <li><a href="#missions">Missions</a></li>
      </ul>
    </nav>
  );
};

export default Menu;
