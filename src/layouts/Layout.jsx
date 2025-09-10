import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white overflow-y-auto">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between px-4 py-3 border-b border-gray-800 bg-gray-900/80 backdrop-blur-md">
          <h1 className="text-lg font-semibold text-purple-400">
            Vijaya Studio
          </h1>
          <button
            onClick={toggleSidebar}
            className="px-3 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition"
          >
            {isSidebarOpen ? "Close" : "Menu"}
          </button>
        </header>

        {/* Routed Pages */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
