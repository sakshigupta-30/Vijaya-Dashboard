import React from 'react';
import './Plans.css';

const Plans = () => {
  return (
    <div className="plans-container">
      <h2>Subscription Plans</h2>
      <button className="payment-btn">💳 Payment</button>

      <div className="card">
        <table>
          <thead>
            <tr><th>Name</th><th>Price</th><th>Action</th></tr>
          </thead>
          <tbody>
            <tr><td>Basic</td><td>₹9 / month</td><td><button className="edit-btn">Edit</button></td></tr>
            <tr><td>Standard</td><td>₹19 / month</td><td><button className="edit-btn">Edit</button></td></tr>
            <tr><td>Premium</td><td>₹29 / month</td><td><button className="edit-btn">Edit</button></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Plans;
