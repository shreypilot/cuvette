import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar} from 'react-chartjs-2';
import "./ComparisonGraph.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


function ComparisonAnalysis({ percentile, higherPercentile }) {
  const limitedCurrentScore = Math.min(percentile, higherPercentile);
  const data = {
    labels: ["Current Score", "Total Possible Score"],
    datasets: [
      {
        label: "Percentile",
        data: [limitedCurrentScore, higherPercentile],
        backgroundColor: ["#36A2EB", "#438AF6"],
      },
    ],
  };

  return (
    <div className="comparisonAnalysis">
      <div className="text-row">
        <h1 className="heading">Comparison Analysis</h1>

      </div>
      <div className="score-info">
        <p>
          <span className="score">
            You scored {percentile}% percentile
          </span>
          which is lower than the average percentile {higherPercentile}% of all the engineers
          who took this assessment
        </p>
      </div>
      <Bar data={data} />
    </div>
  );
}

export default ComparisonAnalysis;
