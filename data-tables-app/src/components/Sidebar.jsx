import React from "react";

/**
 * Sidebar.jsx
 * Left navigation menu.
 * Shows "12 Data Tables" as an active (light pink) row,
 * with "12.1 Make Data Tables" as the active sub-item underneath.
 */
function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span className="brand-dot"></span>
        <span className="brand-text">Admin Panel</span>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-group active-group">
          <div className="nav-row active-row">
            <span className="nav-number">12</span>
            <span className="nav-title">Data Tables</span>
          </div>

          <div className="nav-subrow active-sub">
            <span className="nav-subnumber">12.1</span>
            <span className="nav-subtitle">Make Data Tables</span>
          </div>
        </div>

        <div className="nav-group">
          <div className="nav-row disabled-row">
            <span className="nav-number">13</span>
            <span className="nav-title">Reports</span>
          </div>
        </div>

        <div className="nav-group">
          <div className="nav-row disabled-row">
            <span className="nav-number">14</span>
            <span className="nav-title">Settings</span>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
