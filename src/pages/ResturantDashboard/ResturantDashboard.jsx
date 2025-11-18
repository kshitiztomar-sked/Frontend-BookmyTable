import React from "react";
import "./ResturantDashboard.css";
import Sidebar from "../../components/Sidebar/Sidebar";


const ResturantDashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <Sidebar />

      {/* ===== Main Dashboard ===== */}
      <div className="dashboard-main">
        <h2 className="dash-title">Restaurant Dashboard</h2>

        {/* ===== Top Stats Cards ===== */}
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Today's Orders</h3>
            <p>128</p>
          </div>

          <div className="stat-card">
            <h3>Total Revenue</h3>
            <p>₹12,450</p>
          </div>

          <div className="stat-card">
            <h3>Pending Bookings</h3>
            <p>14</p>
          </div>

          <div className="stat-card">
            <h3>Active Tables</h3>
            <p>9</p>
          </div>
        </div>

        {/* ===== Charts & Orders Row ===== */}
        <div className="row">
          {/* Dummy Chart Box */}
          <div className="chart-box">
            <h3>Weekly Revenue</h3>
            <div className="chart-placeholder">📊 Chart Coming Soon</div>
          </div>

          {/* Recent Orders */}
          <div className="recent-orders1">
            <h3>Recent Orders</h3>
            <ul>
              <li>
                <span>Order #1123</span>
                <span>₹650</span>
              </li>
              <li>
                <span>Order #1124</span>
                <span>₹450</span>
              </li>
              <li>
                <span>Order #1125</span>
                <span>₹980</span>
              </li>
              <li>
                <span>Order #1126</span>
                <span>₹300</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResturantDashboard;
