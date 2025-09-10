import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Users, Clock, Calendar } from "react-feather";

const Dashboard = () => {
  const stats = [
    { id: 1, title: "Total Customers", value: 1250, icon: <Users className="w-6 h-6 text-purple-400" /> },
    { id: 2, title: "Active Clients", value: 875, icon: <Users className="w-6 h-6 text-purple-400" /> },
    { id: 3, title: "Upcoming Classes", value: 12, icon: <Calendar className="w-6 h-6 text-purple-400" /> },
    { id: 4, title: "Average Session Duration", value: "45 min", icon: <Clock className="w-6 h-6 text-purple-400" /> },
  ];

  const chartData = [
    { name: "Mon", sessions: 3 },
    { name: "Tue", sessions: 4 },
    { name: "Wed", sessions: 2 },
    { name: "Thu", sessions: 5 },
    { name: "Fri", sessions: 6 },
    { name: "Sat", sessions: 4 },
    { name: "Sun", sessions: 3 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white p-6">
      {/* Dashboard Title */}
      <h2 className="text-4xl font-bold text-purple-400 mb-8">Premium Dashboard</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-purple-700 transition flex flex-col items-start"
          >
            <div className="flex items-center mb-4">
              {stat.icon}
              <h4 className="ml-3 text-gray-300">{stat.title}</h4>
            </div>
            <p className="text-3xl font-bold text-purple-400">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Premium / Professional Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-purple-700 transition">
          <h3 className="text-2xl font-bold text-purple-400 mb-2">Premium Plan</h3>
          <p className="text-gray-400 mb-4">
            Access all Zumba videos, live classes, and exclusive tutorials.
          </p>
          <button className="bg-purple-500 px-6 py-2 rounded-xl font-semibold hover:bg-purple-600 transition">
            Upgrade Now
          </button>
        </div>
        <div className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-purple-700 transition">
          <h3 className="text-2xl font-bold text-purple-400 mb-2">Professional Plan</h3>
          <p className="text-gray-400 mb-4">
            Everything in Premium + analytics, personalized insights, and coaching sessions.
          </p>
          <button className="bg-purple-500 px-6 py-2 rounded-xl font-semibold hover:bg-purple-600 transition">
            Upgrade Now
          </button>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-purple-700 transition">
        <h3 className="text-2xl font-bold text-purple-400 mb-4">Weekly Sessions</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" stroke="#A78BFA" />
            <YAxis stroke="#A78BFA" />
            <Tooltip contentStyle={{ backgroundColor: "#364153", borderRadius: "8px" }} />
            <Bar
              dataKey="sessions"
              fill="#A78BFA"
              radius={[8, 8, 0, 0]}
              cursor={{ fill: "rgba(167,139,250,0.3)" }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
