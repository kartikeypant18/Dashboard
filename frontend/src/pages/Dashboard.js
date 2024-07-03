import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import ChartComponent from '../components/ChartComponent';
import FilterPanel from '../components/FilterPanel';
import jsonData from '../jsondata.json';
import { getUniqueValues } from '../utils/uniqueValues';
import './Dashboard.css';

const Dashboard = () => {
  const [filteredData, setFilteredData] = useState(jsonData);
  const [filters, setFilters] = useState({
    sector: '',
    topic: '',
    region: '',
    country: ''
  });
  const [chartType, setChartType] = useState('bar'); // Default chart type

  const filterOptions = {
    sector: getUniqueValues(jsonData, 'sector'),
    topic: getUniqueValues(jsonData, 'topic'),
    region: getUniqueValues(jsonData, 'region'),
    country: getUniqueValues(jsonData, 'country')
  };

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const handleChartTypeChange = (selectedChartType) => {
    setChartType(selectedChartType);
  };

  useEffect(() => {
    let data = jsonData;
    Object.keys(filters).forEach(key => {
      if (filters[key]) {
        data = data.filter(item => item[key] === filters[key]);
      }
    });
    setFilteredData(data);
  }, [filters]);

  return (
    <div className="dashboard">
      <Sidebar onFilterChange={handleFilterChange} filterOptions={filterOptions} />
      <div className="main-content">
        <Topbar />
        <div className="content">
          <FilterPanel
            onFilterChange={handleFilterChange}
            filterOptions={filterOptions}
            onChartTypeChange={handleChartTypeChange}
          />
          <ChartComponent filteredData={filteredData} chartType={chartType} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
