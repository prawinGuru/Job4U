import React from 'react';
import '../css/Header.css';
import { useJobContext } from '../context/JobContext';

const Header = () => {
  const { filters, setFilters } = useJobContext();

  const handleSalaryChange = (e) => {
    setFilters({ ...filters, salary: e.target.value });
  };

  return (
    <header className="header">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">🌐</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Find Jobs</li>
          <li>Find Talents</li>
          <li>About us</li>
          <li>Testimonials</li>
        </ul>
        <button className="create-job-btn">Create Jobs</button>
      </nav>

      {/* Search Filters */}
      <div className="filter-bar">
        <div className="filter-input">
          <span className="icon">🔍</span>
          <input
            type="text"
            placeholder="Search By Job Title, Role"
            value={filters.title}
            onChange={(e) => setFilters({ ...filters, title: e.target.value })}
          />
        </div>

        <div className="filter-dropdown">
          <span className="icon">📍</span>
          <select
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          >
            <option value="">Preferred Location</option>
            <option value="Chennai">Chennai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Delhi">Delhi</option>
          </select>
        </div>

        <div className="filter-dropdown">
          <span className="icon">👨‍💼</span>
          <select
            value={filters.type}
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          >
            <option value="">Job type</option>
            <option value="Full-time">Full-time</option>
            <option value="Internship">Internship</option>
            <option value="Part-time">Part-time</option>
          </select>
        </div>

        <div className="salary-range">
          <label>Salary Per Month</label>
          <input
            type="range"
            min="10000"
            max="100000"
            step="5000"
            value={filters.salary}
            onChange={handleSalaryChange}
          />
          <div className="salary-values">₹50k - ₹80k</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
