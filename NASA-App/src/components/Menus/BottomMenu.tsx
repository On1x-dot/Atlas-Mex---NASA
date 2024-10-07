import React, { useState, useEffect, useRef } from "react";
import '../../styles/Menus/ButtomMenu.css';

const BottomMenu: React.FC = () => {
  const [isGalaxySubMenuVisible, setGalaxySubMenuVisible] = useState(false);
  const [isExoplanetSubMenuVisible, setExoplanetSubMenuVisible] = useState(false);
  const [isSystemSubMenuVisible, setSystemSubMenuVisible] = useState(false);
  
  const menuRef = useRef<HTMLUListElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setGalaxySubMenuVisible(false);
      setExoplanetSubMenuVisible(false);
      setSystemSubMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bottom-menu" ref={menuRef}>
      <ul>
        <li>
          <a 
            href="#projects" 
            onClick={(e) => {
              e.preventDefault();
              setGalaxySubMenuVisible(!isGalaxySubMenuVisible);
            }}
          >
            Galaxy Info.
          </a>
          {isGalaxySubMenuVisible && (
            <ul className="sub-menu">
              <li><a href="#project1" onClick={(e) => e.stopPropagation()}>Project 1</a></li>
              <li><a href="#project2" onClick={(e) => e.stopPropagation()}>Project 2</a></li>
              <li><a href="#project3" onClick={(e) => e.stopPropagation()}>Project 3</a></li>
            </ul>
          )}
        </li>
        <li>
          <a 
            href="#activities" 
            onClick={(e) => {
              e.preventDefault();
              setSystemSubMenuVisible(!isSystemSubMenuVisible);
            }}
          >
            System Info.
          </a>
          {isSystemSubMenuVisible && (
            <ul className="sub-menu">
              <li><a href="#activity1" onClick={(e) => e.stopPropagation()}>Activity 1</a></li>
              <li><a href="#activity2" onClick={(e) => e.stopPropagation()}>Activity 2</a></li>
            </ul>
          )}
        </li>
        <li>
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              setExoplanetSubMenuVisible(!isExoplanetSubMenuVisible);
            }}
          >
            Exoplanet Info.
          </a>
          {isExoplanetSubMenuVisible && (
            <ul className="sub-menu">
              <li><a href="#exoplanet1" onClick={(e) => e.stopPropagation()}>Exoplanet 1</a></li>
              <li><a href="#exoplanet2" onClick={(e) => e.stopPropagation()}>Exoplanet 2</a></li>
              <li><a href="#exoplanet3" onClick={(e) => e.stopPropagation()}>Exoplanet 3</a></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default BottomMenu;
