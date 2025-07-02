import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaTimes, FaVideo, FaTv, FaRupeeSign,
  FaCogs, FaThLarge, FaSun, FaMoon
} from 'react-icons/fa';
import './Sidebar.css';
import { useTheme } from '../context/ThemeContext';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h2>Vijaya Studio</h2>
      </div>

      <div className="sidebar-body">
        <ul className="nav-links">
          <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}><FaThLarge /> Dashboard</NavLink></li>
          <li><NavLink to="/videos" className={({ isActive }) => isActive ? 'active' : ''}><FaVideo /> Videos</NavLink></li>
          <li><NavLink to="/live-classes" className={({ isActive }) => isActive ? 'active' : ''}><FaTv /> Live Classes</NavLink></li>
          <li><NavLink to="/plans" className={({ isActive }) => isActive ? 'active' : ''}><FaRupeeSign /> Plans</NavLink></li>
        </ul>

        <ul className="bottom-links">
          <li className="dark-mode-toggle" onClick={toggleTheme}>
            {isDarkMode ? <FaMoon /> : <FaSun />}
            <span>{isDarkMode ? 'Dark' : 'Light'} Mode</span>
          </li>
          <li><NavLink to="/settings" className={({ isActive }) => isActive ? 'active' : ''}><FaCogs /> Settings</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
