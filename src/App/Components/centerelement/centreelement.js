import React from "react";
import "./centreelement.scss";
import { useState } from "react";
import filtericon1 from "../../Assests/icons/filter-icon-1.png"
import filtericon2 from "../../Assests/icons/filter-icon-2.png"
import filtericon3 from "../../Assests/icons/filter-icon-3.png"
import Newprojectform from "../newprojectform/newprojectform";
import FilterOption from "../filteroption/filteroption";


function Centreelement({getOverallDetails,setProjectData,ProjectData}) {
  const [showForm, setShowForm] = useState(false);
  const [showOption, setOptionForm] = useState(false);

  return (
    <div className="center-container">
      <div className="center-container__heading">Projects</div>
      <div className="center-container__buttons">
        <div className="center-container__button-container"
        onClick={() => setOptionForm(!showOption)}>
          <div className="center-container__filter-btn-container">
          <button
            className="center-container__filter-btn"
            >
            Filter
          </button>
          </div>
            <div className="center-container__filter-icon">
              <img className="center-container__icon" src={filtericon1} alt="filter-icon" />
              <img className="center-container__icon" src={filtericon2} alt="filter-icon" />
              <img className="center-container__icon" src={filtericon3} alt="filter-icon" />
            </div>
            <FilterOption clicked={showOption} setProjectData={setProjectData} ProjectData={ProjectData} />
          </div>
          <div>          
          <button
            className="center-container__create-btn"
            onClick={() => setShowForm(!showForm)}
          >
            + Create New
          </button>
          </div>
      </div>
      <Newprojectform getOverallDetails={getOverallDetails} trigger={showForm} setShowForm={setShowForm} />
    </div>
  );
}

export default Centreelement;
