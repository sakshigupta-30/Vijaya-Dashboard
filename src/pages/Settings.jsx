import React, { useState } from "react";
import { User, Key, Bell, CreditCard, LogOut } from "react-feather";
import { useAuth } from "../context/UserContext";

const Settings = () => {
  const {user} = useAuth();
  const [activeTab, setActiveTab] = useState("profile");
  const [profile, setProfile] = useState(user);
  const [notifications, setNotifications] = useState({
    reminders: true,
    promotions: false,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-purple-400 mb-8">Settings</h1>

      <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
        {/* Sidebar */}
        <div className="md:w-1/4 bg-gray-900 rounded-2xl p-4 shadow-lg">
          <ul className="space-y-4">
            <li
              className={`flex items-center gap-2 p-3 rounded-xl cursor-pointer ${
                activeTab === "profile" ? "bg-purple-800" : "hover:bg-gray-800"
              }`}
              onClick={() => setActiveTab("profile")}
            >
              <User className="w-5 h-5" /> Profile
            </li>
            <li
              className={`flex items-center gap-2 p-3 rounded-xl cursor-pointer ${
                activeTab === "account" ? "bg-purple-800" : "hover:bg-gray-800"
              }`}
              onClick={() => setActiveTab("account")}
            >
              <Key className="w-5 h-5" /> Account
            </li>
            <li
              className={`flex items-center gap-2 p-3 rounded-xl cursor-pointer ${
                activeTab === "subscription" ? "bg-purple-800" : "hover:bg-gray-800"
              }`}
              onClick={() => setActiveTab("subscription")}
            >
              <CreditCard className="w-5 h-5" /> Subscription
            </li>
            <li
              className={`flex items-center gap-2 p-3 rounded-xl cursor-pointer ${
                activeTab === "notifications" ? "bg-purple-800" : "hover:bg-gray-800"
              }`}
              onClick={() => setActiveTab("notifications")}
            >
              <Bell className="w-5 h-5" /> Notifications
            </li>
            <li className="flex items-center gap-2 p-3 rounded-xl cursor-pointer hover:bg-gray-800">
              <LogOut className="w-5 h-5" /> Logout
            </li>
          </ul>
        </div>

        {/* Content */}
        <div className="md:w-3/4 bg-gray-950 rounded-2xl p-6 shadow-lg">
          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">Profile Settings</h2>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-gray-400 mb-1">Name</label>
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="w-full p-3 rounded-xl bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-1">Email</label>
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="w-full p-3 rounded-xl bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <button className="mt-4 bg-purple-500 hover:bg-purple-600 py-3 px-6 rounded-xl font-semibold transition">
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {/* Account Tab */}
          {activeTab === "account" && (
            <div>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">Account Settings</h2>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-gray-400 mb-1">Password</label>
                  <input
                    type="password"
                    placeholder="New Password"
                    className="w-full p-3 rounded-xl bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-1">Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full p-3 rounded-xl bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-1">Current Password</label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full p-3 rounded-xl bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <button className="mt-4 bg-purple-500 hover:bg-purple-600 py-3 px-6 rounded-xl font-semibold transition">
                  Update Password
                </button>
              </div>
            </div>
          )}

          {/* Subscription Tab */}
          {activeTab === "subscription" && (
            <div>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">Subscription Plan</h2>
              <p className="text-gray-400 mb-6">You are currently on the <span className="text-purple-400 font-semibold">Premium Plan</span>.</p>
              <button className="bg-purple-500 hover:bg-purple-600 py-3 px-6 rounded-xl font-semibold transition">
                Manage Subscription
              </button>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === "notifications" && (
            <div>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">Notification Settings</h2>
              <div className="flex flex-col gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={notifications.reminders}
                    onChange={() => setNotifications({ ...notifications, reminders: !notifications.reminders })}
                    className="accent-purple-500 w-5 h-5"
                  />
                  Receive class reminders
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={notifications.promotions}
                    onChange={() => setNotifications({ ...notifications, promotions: !notifications.promotions })}
                    className="accent-purple-500 w-5 h-5"
                  />
                  Receive promotional offers
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
