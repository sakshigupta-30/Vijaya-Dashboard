import React from 'react';
import './Settings.css';

const Settings = ({ isDarkMode }) => {
  return (
    <div data-theme={isDarkMode ? 'dark' : 'light'} className="settings-container">
      <h1 className="settings-title">Settings</h1>

      <div className="settings-section">
        <label>Name</label>
        <input type="text" placeholder="Enter your name" />
      </div>

      <div className="settings-section">
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />
      </div>

      <div className="settings-section">
        <label>Password</label>
        <input type="password" placeholder="Enter new password" />
      </div>

      <button className="settings-save-btn">Save Changes</button>
    </div>
  );
};

export default Settings;
