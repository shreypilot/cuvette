import React, { useState } from "react";
import { iconsImgs } from "../../utils/images";
import "./Cards.css";

const Cards = ({ onValuesChange }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rank, setRank] = useState("12890");
  const [percentile, setPercentile] = useState("37");
  const [score, setScore] = useState("7");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = () => {
    closeModal();
    onValuesChange({ rank, percentile, score });
  };
  const handleScoreChange = (e) => {
    const newScore = e.target.value;
    if (newScore >= 0 && newScore <= 15) {
      setScore(newScore);
    }
  };

  return (
    <div className="container">
      <div className="left-side">
        <div className="icon">
          <img src={iconsImgs.html} alt="" width={50} />
        </div>
        <div className="text">
          <p className="text1">Hypertext Markup Language</p>
          <p>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
        </div>
      </div>
      <div className="right-side">
        <button className="update-button" onClick={openModal}>
          Update
        </button>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2 className="text2">Update Score</h2>
            <div className="row-card">
              <div className="column">
                <p className="text-score ">Update Your Rank</p>
              </div>
              <div className="column">
                <input
                  type="text"
                  placeholder="Enter Rank"
                  value={rank}
                  onChange={(e) => setRank(e.target.value)}
                />
              </div>
            </div>
            <div className="row-card">
              <div className="column">
                <p className="text-score ">Update Your Percentile</p>
              </div>
              <div className="column">
                <input
                  type="text"
                  placeholder="Enter Percentile"
                  value={percentile}
                  onChange={(e) => setPercentile(e.target.value)}
                />
              </div>
            </div>
            <div className="row-card">
              <div className="column">
                <p className="text-score ">Update Your current score(out of 15)</p>
              </div>
              <div className="column">
              <input
                  type="text"
                  placeholder="Enter Score"
                  value={score}
                  onChange={handleScoreChange} 
                />
              </div>
            </div>
            <div className="buttons">
              <button className="modal-close-button" onClick={closeModal}>
                Close
              </button>
              <button className="modal-save-button" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;



