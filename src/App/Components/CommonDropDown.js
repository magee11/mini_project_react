import React, { useState } from "react";
import DropDown from "../Assests/images/DropDown.svg";

import Plus from "../Assests/images/Plus.svg";

import Minus from "../Assests/images/minus.png";



const CommonDropDown = (props) => {
  const {
    designer,
    setDesigner,
    frontEnd,
    setFrontEnd,
    backEnd,
    setBackEnd,
    qa,
    setQA,
    total,
    setTotal,
  } = props;
  const [perform, setPerform] = useState(false);

  return (
    <div>
      <div>
        {/* {console.log(value)} */}

        <div className="SelectField" onClick={() => setPerform(!perform)}>
          <span className="SelectField_Placeholder">{total}</span>

          <img
            className="SelectField_Arrow"
            src={DropDown}
            onClick={() => setPerform(!perform)}
          />
        </div>
      </div>

      {perform ? (
        <div>
          <div className="option">
            <div className="option_title">
              <span className="option_title_Design">Designer</span>

              <div className="option_title_performance">
                <img
                  className="option_title_performance_Minus"
                  id="designer"
                  onClick={() => {
                    setDesigner(designer - 1);
                    setTotal(total - 1);
                  }}
                  src={Minus}
                />
                <span className="option_title_performance_count">
                  {designer}{" "}
                </span>
                <img
                  className="option_title_performance_Plus"
                  onClick={() => {
                    setDesigner(designer + 1);
                    setTotal(total + 1);
                  }}
                  src={Plus}
                />
              </div>
            </div>

            <div className="option_title">
              <span className="option_title_FrontEnd">Front End Developer</span>

              <div className="option_title_performance">
                <img
                  className="option_title_performance_Minus"
                  id="frontEnd"
                  onClick={() => {
                    setFrontEnd(frontEnd - 1);
                    setTotal(total - 1);
                  }}
                  src={Minus}
                />
                <span className="option_title_performance_count">
                  {frontEnd}
                </span>
                <img
                  className="option_title_performance_Plus"
                  onClick={() => {
                    setFrontEnd(frontEnd + 1);
                    setTotal(total + 1);
                  }}
                  src={Plus}
                />
              </div>
            </div>

            <div className="option_title">
              <span className="option_title_BackEnd">Back End Developer</span>

              <div className="option_title_performance">
                <img
                  className="option_title_performance_Minus"
                  id="backEnd"
                  onClick={() => {
                    setBackEnd(backEnd - 1);
                    setTotal(total - 1);
                  }}
                  src={Minus}
                />
                <span className="option_title_performance_count">
                  {backEnd}
                </span>
                <img
                  className="option_title_performance_Plus"
                  onClick={() => {
                    setBackEnd(backEnd + 1);
                    setTotal(total + 1);
                  }}
                  src={Plus}
                />
              </div>
            </div>

            <div className="option_title">
              <span className="option_title_QA">QA</span>

              <div className="option_title_performance">
                <img
                  className="option_title_performance_Minus"
                  id="qa"
                  onClick={() => {
                    setQA(qa - 1);
                    setTotal(total - 1);
                  }}
                  src={Minus}
                />
                <span className="option_title_performance_count">{qa}</span>
                <img
                  className="option_title_performance_Plus"
                  onClick={() => {
                    setQA(qa + 1);
                    setTotal(total + 1);
                  }}
                  src={Plus}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CommonDropDown;
