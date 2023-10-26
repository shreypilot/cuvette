import React from "react";
import { iconsImgs } from "../../utils/images";
import "./QuickStatistics.css";

const QuickStatistics = ({ rank, percentile, correctAnswer }) => {
  return (
    <div className="grid-c7-content">
      <div className="heading">Quick Statistics</div>

      <div className="your-section">
        <div className="row1">
          <div className="icon">
            {" "}
            <img src={iconsImgs.trophy} alt="" width={50} />
          </div>
          <div className="column">
            <span className="primary-text">{rank}</span>
            <p className="secondary-text">Your Rank</p>
          </div>
        </div>
        <div className="line"></div>

        <div className="row1">
          <div className="icon">
            {" "}
            <img src={iconsImgs.notebook} alt="" width={50} />
          </div>
          <div className="column">
            <span className="primary-text">{percentile}</span>
            <p className="secondary-text">Rank Number</p>
          </div>
        </div>
        <div className="line"></div>

        <div className="row1">
          <div className="icon">
            {" "}
            <img src={iconsImgs.greenTick} alt="" width={50} />
          </div>
          <div className="column">
            <span className="primary-text">{correctAnswer}</span>
            <p className="secondary-text">Correct Answer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickStatistics;


