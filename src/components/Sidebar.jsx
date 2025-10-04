import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaVideo,
  FaTv,
  FaCogs,
  FaThLarge,
  FaSignOutAlt,
  FaUserAlt,
  FaMoneyCheck,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/UserContext";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { user, logout } = useAuth();

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 border-r border-gray-800 shadow-lg transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 z-50`}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-800 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white tracking-wide">
            Vijaya Studio
          </h2>
          {/* Close button (only mobile) */}
          <button
            onClick={toggleSidebar}
            className="md:hidden text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col justify-between h-[calc(100%-5rem)]">
          <ul className="px-4 mt-6 space-y-2">
            {user && (
              <li>
                <NavLink
                  to="#"
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition ${
                      isActive
                        ? "bg-white text-black shadow-md"
                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                    }`
                  }
                >
                  <FaUserAlt />
                  {user.name}
                </NavLink>
              </li>
            )}
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition ${
                    isActive
                      ? "bg-white text-black shadow-md"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
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
                      ? "bg-white text-black shadow-md"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
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
                      ? "bg-white text-black shadow-md"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
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
                      ? "bg-white text-black shadow-md"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`
                }
              >
                <FaMoneyCheck />
                Plans
              </NavLink>
            </li>
          </ul>

          {/* Bottom */}
          <ul className="px-4 mb-6 space-y-2">
            <li
              onClick={logout}
              className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition cursor-pointer"
            >
              <FaSignOutAlt />
              <span>Logout</span>
            </li>
            <li>
              <NavLink
                to="/settings"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition ${
                    isActive
                      ? "bg-white text-black shadow-md"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
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
    </>
  );
};

export default Sidebar;
