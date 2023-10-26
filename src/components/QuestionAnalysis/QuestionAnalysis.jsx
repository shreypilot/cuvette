import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import "./QuestionAnalysis.css";
ChartJs.register(Tooltip, Title, ArcElement, Legend);

function QuestionAnalysis({ currentScore, TotalCurrentScore }) {
  const limitedCurrentScore = Math.min(currentScore, TotalCurrentScore);
  const data = {
    labels: ["Current Score", "Total Possible Score"],
    datasets: [
      {
        data: [limitedCurrentScore, TotalCurrentScore], 
        backgroundColor: ["#36A2EB", "#438AF6"],
      },
    ],
  };

  return (
    <div className="questionAnalysis">
      <div className="text-row">
        <h1 className="heading">Question Analysis</h1>
        <span className="ratio">
          <span style={{ color: "#36A2EB" }}>{limitedCurrentScore}</span>
          <span style={{ color: "#438AF6" }}> / {TotalCurrentScore}</span>
        </span>
      </div>
      <div className="score-info">
        <p>
          <span className="score">
            You scored {limitedCurrentScore} questions correct out of {TotalCurrentScore}.
          </span>
          However, it still needs some improvements.
        </p>
      </div>
      <Doughnut data={data} />
    </div>
  );
}

export default QuestionAnalysis;

