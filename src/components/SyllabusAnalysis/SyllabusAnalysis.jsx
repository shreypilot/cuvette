import './SyllabusAnalysis.css';

import React from 'react';

const Progressbar = ({ bgcolor, progress, height }) => {
  const progressContainerStyle = {
    
    width: '60%',
    backgroundColor: 'whitesmoke',
    borderRadius: 20,
    display: 'flex',
    marginBottom: '10px',
  };

  const progressBarStyle = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 20,
  };





  return (
    <div style={progressContainerStyle}>
      <div style={progressBarStyle}></div>
    </div>

  );
};

const syllabusData = [
  { subject: 'HTML Tools, Forms, History', progress: 80, bgcolor: 'blue' },
  { subject: 'Tag and Reference', progress: 60, bgcolor: 'orange' },
  { subject: 'Tables and CSS Basics', progress: 24, bgcolor: 'red' },
  { subject: 'Tables and CSS Basics', progress: 96, bgcolor: 'green' },
];

const SyllabusAnalysis = () => {
  return (
    <div className="syllabus-analysis">
      <h3 className="heading">Syllabus Wise Analysis</h3>
      {syllabusData.map((data, index) => (
        <div className='row' key={index}>
          <div className="left">
          <div className="subject">{data.subject}</div>
          </div>
          <div className='right'>
          <Progressbar bgcolor={data.bgcolor} progress={data.progress} height={30} />
          <div className={`${data.bgcolor}-text`}>{data.progress}%</div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default SyllabusAnalysis;




