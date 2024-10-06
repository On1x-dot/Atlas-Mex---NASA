// src/components/Menu.tsx
import React from "react";

const Menu: React.FC = () => {
  return (
    <nav className="menu">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#destinations">Destinations</a></li>
        <li><a href="#missions">Missions</a></li>
      </ul>
    </nav>
  );
};

export default Menu;
