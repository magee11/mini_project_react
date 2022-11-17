import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Bugs from "../../Assests/images/Bugs.svg";
import Dependencies from "../.././Assests/images/Dependencies.svg";
import CodeReview from "../../Assests/images/CodeReview.svg";
import UnitTesting from "../../Assests/images/UnitTesting.svg";
import Delay from "../../Assests/images/Delay.svg";
import "./ProjectCardData.scss";

const ProjectCardData = (props) => {
  const { numberOfBugs, dependencies, codeReviews, unitTesting, delay } = props;

  return (
    <div>
      <div className="ProjectCard-Contain">
        <div className="ProjectCard">
          <div className="ProjectCard_avatar">
            <div className="ProjectCard-Logo">
              <img src={Bugs} alt="buglogo" />
            </div>
          </div>
          <div className="ProjectCard_detail">
            <span className="ProjectCard_detail_Count">{numberOfBugs}</span>
            <p className="ProjectCard_detail_Name">New Bugs</p>
          </div>
        </div>

        <div className="ProjectCard">
          <div className="ProjectCard_avatar">
            <div className="ProjectCard-Logo">
              <img src={Dependencies} alt="buglogo" />
            </div>
          </div>

          <div className="ProjectCard_detail">
            <span className="ProjectCard_detail_Count">{dependencies}%</span>
            <p className="ProjectCard_detail_Name">Dependencies</p>
          </div>
        </div>

        <div className="ProjectCard">
          <div className="ProjectCard_avatar">
            <div className="ProjectCard-Logo">
              <img src={CodeReview} alt="buglogo" />
            </div>
          </div>

          <div className="ProjectCard_detail">
            <span className="ProjectCard_detail_Count">{codeReviews}%</span>
            <p className="ProjectCard_detail_Name">Code Review</p>
          </div>
        </div>

        <div className="ProjectCard">
          <div className="ProjectCard_avatar">
            <div className="ProjectCard-Logo">
              <img src={UnitTesting} alt="buglogo" />
            </div>
          </div>
          <div className="ProjectCard_detail">
            <span className="ProjectCard_detail_Count">{unitTesting}</span>
            <p className="ProjectCard_detail_Name">Unit Testing</p>
          </div>
        </div>

        <div className="ProjectCard">
          <div className="ProjectCard-Logo_delay">
            <CircularProgressbar
              value={delay}
              circleRatio={0.7}
              strokeWidth={16}
              
            />
          </div>
          <div className="ProjectCard_detail">
            <span className="ProjectCard_detail-Count_delay">{delay}</span>
            <p className="ProjectCard_detail-Name_delay">Delay</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardData;
