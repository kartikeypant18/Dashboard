// Sidebar.js
import React from 'react';

const Sidebar = ({ onFilterChange, filterOptions }) => {
  return (
    <div className="sidebar">
      <h3>Filters</h3>
      {Object.keys(filterOptions).map(option => (
        <label key={option}>
          {option.charAt(0).toUpperCase() + option.slice(1)}:
          <select onChange={e => onFilterChange(option, e.target.value)}>
            <option value="">All</option>
            {filterOptions[option].map(value => (
              <option key={value} value={value}>{value}</option>
            ))}
          </select>
        </label>
      ))}
    </div>
  );
};

export default Sidebar;
