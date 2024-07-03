import React from 'react';

const FilterPanel = ({ onFilterChange, filterOptions, onChartTypeChange }) => {
  return (
    <div className="filter-panel">
      <h3>Filters</h3>
      <div className="filter-group">
        <label>Chart Type:</label>
        <select onChange={(e) => onChartTypeChange(e.target.value)}>
          <option value="bar">Bar Chart</option>
          <option value="line">Line Chart</option>
          <option value="pie">Pie Chart</option>
          <option value="doughnut">Doughnut Chart</option>
          <option value="radar">Radar Chart</option>
          <option value="polarArea">Polar Area Chart</option>
        </select>
      </div>
    </div>
  );
};

export default FilterPanel;
