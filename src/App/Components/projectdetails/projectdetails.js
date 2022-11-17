import "./projectdetails.scss";
import { useNavigate } from "react-router-dom";
import codereview_logo from ".././../Assests/images/CodeReview.svg";
import bug_logo from "../../Assests/images/newbuglogo.svg";
import dependency_logo from "../../Assests/images/dependencieslogo.svg";
import unit_test_logo from "../../Assests/images/UnitTesting.svg";

const Projectdetails = (props)=> {
  const {
    projectId,
    logoUrl,
    projectName,
    // project_condition2,
    status,
    startDate,
    stopDate,
    completionPercentage,
    // completionComments,
    duration,
    dependencies,
    numberOfBugs,
    codeReviews,
    unitTesting,
  } = props;
  const navigate = useNavigate();
  let StartDate=startDate.slice(4,11);
  // let StopDate = stopDate.slice(4, 11);
  return (
    <div
   
      className="projectdetails-main-container"
      onClick={() => navigate("projectdetails?id=" + `?${projectId}`)}
    >
      
      <div className="projectdetails-main-container__header">
        <div className="sub-header">
          <div className="projectdetails-main-container__company-logo">
            <img
              src={logoUrl}
              className="projectdetails-main-container__company-logo"
              alt="logo"
            />
          </div>
          <div className="projectdetails-main-container__company-name">
            {projectName}
          </div>
        </div>
        {/* <div className=" projectdetails-main-container__about-project">
          <span className=" projectdetails-main-container__high-risk">
            {project_condition2}
          </span>
        </div> */}
        <div className="projectdetails-main-container__project-step">
          <span className="inprogress">{status} </span>
        </div>
      </div>
      <div className="projectdetails-main-container__date">
        {StartDate}
        {stopDate}
      </div>
      <div className="projectdetails-main-container__progress-data">
        <progress
          className="projectdetails-main-container__progress-bar"
          id="progress-bar"
          value={completionPercentage}
          max="100"
        ></progress>
        <span
          className=" projectdetails-main-container__completed-percent"
          id="completed-percent"
        >
          {completionPercentage}%
        </span>
      </div>
      <div className="time-data">
        {/* <span className="projectdetails-main-container__timedata-delay">
          {completionComments}
        </span> */}
        <span className="projectdetails-main-container__timedata-togo">
          {duration} days to go
        </span>
      </div>
      <div className="projectdetails-main-container__footer">
        <div className="dependencies-container">
          <img className="dependencies" src={dependency_logo} alt="buglogo" />
          <p className="names">Dep</p>
          <p className="projectdata">{dependencies}%</p>
        </div>
        <div className="lines">h</div>
        <div className="bug-container">
          <img className="new-bug" src={bug_logo} alt="logo" />
          <p className="names">Bugs</p>
          <p className="projectdata">{numberOfBugs}</p>
        </div>
        <div className="lines">h</div>
        <div className="codereview-container">
          <img className="codereview" src={codereview_logo} alt="logo" />
          <p className="names coderev">CodeRev</p>
          <p className="projectdata">{codeReviews}%</p>
        </div>
        <div className="lines">h</div>
        <div className="unittesting-container">
          <img className="unit-testing" src={unit_test_logo} alt="logo" />
          <p className="names">U.Test</p>
          <p className="projectdata">{unitTesting}%</p>
        </div>
      </div>
    </div>
  );
}

export default Projectdetails;
