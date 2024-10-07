import React from 'react';
import '../../styles/Submenus/SystemSubMenu.css';

const SystemSubMenu: React.FC = () => {
  return (
    <ul className="sub-menu">
      <li><a href="#system1">System 1</a></li>
      <li><a href="#system2">System 2</a></li>
      <li><a href="#system3">System 3</a></li>
    </ul>
  );
};

export default SystemSubMenu;
