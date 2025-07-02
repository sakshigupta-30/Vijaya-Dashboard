import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="card stats-card">
        <div className="stat-box">
          <h4>Total Customers</h4>
          <p className="stat-number">1,250</p>
        </div>
        <div className="stat-box">
          <h4>Active Clients</h4>
          <p className="stat-number">875</p>
        </div>
      </div>

      <div className="card">
        <h3>Live Classes</h3>
        <button className="primary-btn">Schedule Class</button>
      </div>
    </div>
  );
};

export default Dashboard;
