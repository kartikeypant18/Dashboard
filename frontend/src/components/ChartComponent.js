// ChartComponent.js

import React from 'react';
import { Bar, Line, Pie, Doughnut, Radar, PolarArea } from 'react-chartjs-2';
import 'chart.js/auto';

const ChartComponent = ({ filteredData, chartType }) => {
  let ChartComponent;

  switch (chartType) {
    case 'line':
      ChartComponent = Line;
      break;
    case 'pie':
      ChartComponent = Pie;
      break;
    case 'doughnut':
      ChartComponent = Doughnut;
      break;
    case 'radar':
      ChartComponent = Radar;
      break;
    case 'polarArea':
      ChartComponent = PolarArea;
      break;
    default:
      ChartComponent = Bar; // Default to Bar chart
      break;
  }

  const chartData = {
    labels: filteredData.map(item => item.country), // Example: Replace with your data structure
    datasets: [{
      label: 'Intensity',
      data: filteredData.map(item => item.intensity),
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    }],
  };

  return <ChartComponent data={chartData} />;
};

export default ChartComponent;
