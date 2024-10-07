import React from 'react';
import '../../styles/Submenus/StarSubMenu.css';

const StarSubMenu: React.FC = () => {
  return (
    <ul className="sub-menu">
      <li><a href="#star1">Star 1</a></li>
      <li><a href="#star2">Star 2</a></li>
      <li><a href="#star3">Star 3</a></li>
    </ul>
  );
};

export default StarSubMenu;
