import React from 'react';
import planetIcon from '../assets/planet4.svg'; // Ajusta la ruta según sea necesario
import systemIcon from '../assets/system2.svg';
import starIcon from '../assets/star2.svg';

const ViewMenu: React.FC = () => {
  return (
    <div className="view-menu">
      <h2 className="view-title">View</h2>
      <ul>
        <li>
          <a href="#planet">
            <img src={planetIcon} alt="Planet Icon" className="icon" />
            Planet
          </a>
        </li>
        <li>
          <a href="#system">
            <img src={systemIcon} alt="System Icon" className="icon" />
            System
          </a>
        </li>
        <li>
          <a href="#star">
            <img src={starIcon} alt="Star Icon" className="icon" />
            Star
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ViewMenu;
