import React, { useState } from "react";
import "./ContentMain.css";
import Cards from "../Cards/Cards";
import QuestionAnalysis from "../QuestionAnalysis/QuestionAnalysis";
import SyllabusAnalysis from "../SyllabusAnalysis/SyllabusAnalysis";
import QuickStatistics from "../QuickStatistics/QuickStatistics";
import ComparisonGraph from "../ComparisonGraph/ComparisonGraph";

const ContentMain = () => {
  const [rank, setRank] = useState("12890");
  const [percentile, setPercentile] = useState("37");
  const [score, setScore] = useState("7");
  const handleValuesChange = (newValues) => {
    setRank(newValues.rank);
    setPercentile(newValues.percentile);
    setScore(newValues.score);
  };

  return (
    <div className="main-content-holder">
      <div className="content-grid-one">
        <Cards onValuesChange={handleValuesChange} />
        <QuickStatistics
          rank={rank}
          percentile={percentile}
          correctAnswer={score}
        />
        <ComparisonGraph  percentile={percentile} higherPercentile={72}/>
      </div>
      <div className="content-grid-two">
        <div className="grid-two-item">
          <div className="subgrid-two">
            <SyllabusAnalysis />
          </div>
        </div>
        <QuestionAnalysis currentScore={score} TotalCurrentScore={15} />
      </div>
    </div>
  );
};

export default ContentMain;
