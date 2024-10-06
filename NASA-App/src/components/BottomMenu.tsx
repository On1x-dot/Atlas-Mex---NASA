// src/components/BottomMenu.tsx
import React from "react";

const BottomMenu: React.FC = () => {
  return (
    <nav className="bottom-menu">
      <ul>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#activities">Activities</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default BottomMenu;
