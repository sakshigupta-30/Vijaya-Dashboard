import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaVideo,
  FaTv,
  FaRupeeSign,
  FaCogs,
  FaThLarge,
  FaSun,
  FaMoon,
  FaSignOutAlt,
  FaUserAlt,
  FaMoneyCheck,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/UserContext";

const Sidebar = ({ isOpen }) => {
  const { isDarkMode, toggleTheme } = useTheme();
const {user, logout} = useAuth();
  return (
    <div
      className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 backdrop-blur-xl border-r border-gray-800 shadow-lg shadow-purple-900/30 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 z-50`}
    >
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-800">
        <h2 className="text-2xl font-extrabold text-purple-400 tracking-wide">
          Vijaya Studio
        </h2>
      </div>
{/* <div className="flex py-2 justify-center">
  <span className="text-lg text-purple-400">{user.name}</span>
</div> */}
      {/* Nav Links */}
      <div className="flex flex-col justify-between h-[calc(100%-5rem)]">
        <ul className="px-4 mt-6 space-y-2">
          {user&&<li>
            <NavLink
              to="#"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition ${
                  // isActive
                  //   ? "bg-purple-600 text-white shadow-md"
                    "text-gray-300 hover:bg-gray-800 hover:text-purple-400"
                }`
              }
            >
              <FaUserAlt />
              {user.name}
            </NavLink>
          </li>}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition ${
                  isActive
                    ? "bg-purple-600 text-white shadow-md"
                    : "text-gray-300 hover:bg-gray-800 hover:text-purple-400"
                }`
              }
            >
              <FaThLarge />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/videos"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition ${
                  isActive
                    ? "bg-purple-600 text-white shadow-md"
                    : "text-gray-300 hover:bg-gray-800 hover:text-purple-400"
                }`
              }
            >
              <FaVideo />
              Videos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/live-classes"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition ${
                  isActive
                    ? "bg-purple-600 text-white shadow-md"
                    : "text-gray-300 hover:bg-gray-800 hover:text-purple-400"
                }`
              }
            >
              <FaTv />
              Live Classes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/plans"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition ${
                  isActive
                    ? "bg-purple-600 text-white shadow-md"
                    : "text-gray-300 hover:bg-gray-800 hover:text-purple-400"
                }`
              }
            >
              <FaMoneyCheck />
              Plans
            </NavLink>
          </li>
        </ul>

        {/* Bottom Links */}
        <ul className="px-4 mb-6 space-y-2">
          <li
            onClick={logout}
            className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-300 hover:bg-gray-800 hover:text-purple-400 transition cursor-pointer"
          >
            {/* {isDarkMode ? <FaMoon /> : <FaSun />}
            <span>{isDarkMode ? "Dark" : "Light"} Mode</span> */}
            <FaSignOutAlt/>
            <span>Logout</span>
          </li>
          <li>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition ${
                  isActive
                    ? "bg-purple-600 text-white shadow-md"
                    : "text-gray-300 hover:bg-gray-800 hover:text-purple-400"
                }`
              }
            >
              <FaCogs />
              Settings
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
