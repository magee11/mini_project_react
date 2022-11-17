import React from "react";
import runningprojectlogo from "../../Assests/images/RunningProjects.svg";
import "./totaldata.scss";

const Totaldata = ({ count, title }) => {
  return (
    <div className="maindata-container">
      <div className="maindata-container__projectscompleted">
        <img className="cardicon" src={runningprojectlogo} alt="logos" />
        <span className="maindata-container__heading">{title}</span>
        <span className="maindata-container__numbers">{count}</span>
      </div>
    </div>
  );
};

export default Totaldata;
