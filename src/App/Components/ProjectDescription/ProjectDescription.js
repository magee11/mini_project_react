import React, { useEffect, useState, useContext } from "react";
import Definition from "../Definition/Definition";
import DescriptionData from "./DescriptionData";
import axios from "axios";
import "./ProjectDescription.scss";
import WeeklyUpdate from "../WeeklyForm/WeeklyUpdate";
import MonthsDropDown from "../../Assests/images/MonthsDropDown.png";
import "./ForUpdate.scss";

const ProjectDescription = (props) => {
  const [week, setWeek] = useState();
  const [monthUpdate, setMonthUpdate] = useState();
  const [shownOff, setShownOff] = useState(false);
  const [month, setMonth] = useState("January");
  const [display, setDisplay] = useState(false);
  const [weeklyReport, setWeeklyReport] = useState({});
   const [showReport, setShowReport] = useState(false);

  const { projectId } = props;

  const Month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  console.log("same", projectId);

  const weekUpdate = () => {
    axios
      .post("http://13.233.18.99:3010/api/v1/reports/getWeeklyReport", {
        ProjectId:projectId,
        Month:monthUpdate,
        Week:week,
      })
      .then((response) => {
        //  setShowReport(true);
        setWeeklyReport(response?.data);
        if(response?.data?.content?.weeklyDetail.length===0)
        {
          setShowReport(false);
        }
        else{
          setShowReport(true)
        }

        console.log("weekpost", response);
      })
      .catch((error) => {
        // setShowReport(false);
        console.log("error", error);
      });
  };

  
  useEffect(() => {
    weekUpdate();
    
  }, [week, monthUpdate]);

  // console.log("report", weeklyReport);

  //    const Addmonth=(value)=>{
  //     console.log(value);

  //     // console.log((Month.findIndex(value)));
  //     setMonthUpdate(Month.indexOf(value)+1)
  //     console.log(Month.indexOf(value)+1);

  //     console.log(monthUpdate);

  //    }

  return (
    <div>
      <div className="ForUpdate">
        <div className="ForUpdate_Year">
          <div
            className="ForUpdate_Year_Month"
            onClick={() => setDisplay(!display)}
          >
            <span className="ForUpdate_Year_Month_Placeholder">{month}</span>

            <img
              className="ForUpdate_Year_Month_DropDown"
              src={MonthsDropDown}
              onClick={() => setDisplay(!display)}
            />
          </div>

          <div className="ForUpdate_Year_Week_btn">
            <button
              className="ForUpdate_Year_Week_btn_1"
              onClick={(previous) => {
                setWeek((previous = 1));
              }}
            >
              Week 1
            </button>
            <button
              className="ForUpdate_Year_Week_btn_2"
              onClick={(previous) => {
                setWeek((previous = 2));
              }}
            >
              Week 2
            </button>
            <button
              className="ForUpdate_Year_Week_btn_3"
              onClick={(previous) => {
                setWeek((previous = 3));
              }}
            >
              Week 3
            </button>
            <button
              className="ForUpdate_Year_Week_btn_4"
              onClick={(previous) => {
                setWeek((previous = 4));
              }}
            >
              Week 4
            </button>
          </div>
        </div>
        <div className="ForUpdate_btn">
          <button className="ForUpdate_btn_1" onClick={() => setShownOff(true)}>
            Update
          </button>
        </div>
      </div>

      {display ? (
        <div className="Month">
          {Month.map((monthName) => {
            return (
              <span
                className="Month_All"
                onClick={(previous) => {
                  setMonthUpdate((previous = Month.indexOf(monthName) + 1));
                  setMonth(monthName);
                  setDisplay(!display);
                }}
              >
                {" "}
                {monthName}
              </span>
            );
          })}
        </div>
      ) : (
        ""
      )}

      <WeeklyUpdate
        trigger={shownOff}
        setShownOff={setShownOff}
        Id={projectId}
        weekUpdate={weekUpdate}
      />

      <div className="ProjectDescription-All">
        <div className="ProjectDescription_Data">
          {showReport?(
            weeklyReport?.content?.weeklyDetail &&
            weeklyReport?.content?.weeklyDetail.map((data) => (
              <DescriptionData data={data} />
            ))):(<span className="Report_Status">No Data Found For This Week</span>)
          }
        </div>
        <div>
          {showReport?(
            weeklyReport?.content?.others &&
              weeklyReport?.content?.others.map((value) => (
                <Definition value={value} />
              ))):""
            }
        </div>
      </div>
    </div>
  );
};
export default ProjectDescription;
