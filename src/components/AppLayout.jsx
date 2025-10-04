import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main className="flex-1 min-h-screen bg-gray-50 dark:bg-gray-950">
        {/* Mobile toggle button */}
        <div className="md:hidden p-4 border-b border-gray-200 dark:border-gray-800 flex items-center">
          <button
            onClick={toggleSidebar}
            className="text-gray-700 dark:text-gray-300"
          >
            ☰
          </button>
          <h1 className="ml-4 font-semibold">Dashboard</h1>
        </div>

        {/* Render child routes */}
        <div className="md:ml-64">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
