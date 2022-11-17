import React, { useState, useEffect } from "react";
// import ProjectDetails from '../../Pages/ProjectDetailsPage/DetailsPage';
// import Cancel from "../Button/Cancel";
import CommonDropDown from "../CommonDropDown";
import axios from "axios";
import "./WeeklyUpdate.scss";

const WeeklyUpdate = (props) => {
  const [designer, setDesigner] = useState(0);
  const [frontEnd, setFrontEnd] = useState(0);
  const [backEnd, setBackEnd] = useState(0);
  const [qa, setQA] = useState(0);
  const {weekUpdate} = props;

  const [total, setTotal] = useState(0);

  const initialValues = {
    TMfixedCost: "",
    weeklyCompletion: "",
    // total:resource.total,
    // frontendEngineer:3,
    // backendEngineer: 4,
    // qaEngineer: 1,
    // designer: 2,
    numberOfStories: "",
    featuresCompleted: "",
    newBugs: "",
    bugsFixed: "",
    codeReview: "",
    unitTesting: "",
    weeklyCommunication: "",
    delay: "",
    dependencies: "",
    riskMitigation: "",
    risks: "",
    supportRequired: "",
  };

  const [formValues, setFormValues] = useState(initialValues);

  const [formErrors, setFormErrors] = useState({
    TMFixedCost: "",
    WeeklyCompletion: "",
    numberOfStories: "",
    FeaturesCompleted: "",
    newBugs: "",
    ResourceField:"",
    bugsFixed: "",
    codeReview: "",
    unitTesting: "",
    weeklyCommunication: "",
    delay: "",
    Dependencies: "",
    RisksMitigation: "",
    Risks: "",
    SupportRequired: "",
  });

  const [submit, setSubmit] = useState(false);

  const handleChange = (event, type) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [type]: value });
  };

  //  console.log("idpro",props.Id)

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormValues(formValues);
    setFormErrors(validate(formValues));

    if (
      formValues.TMfixedCost !== "" &&
      formValues.weeklyCompletion !== "" &&
      formValues.featuresCompleted !== "" &&
      formValues.codeReview!==""&&
      formValues.unitTesting!==""&&
      formValues.weeklyCommunication!==""&&
      formValues.dependencies !== "" &&
      formValues.riskMitigation !== "" &&
      formValues.supportRequired !== ""
    ) {
      setSubmit(true);
      props.setShownOff(false);
      console.log("finally", formValues);
      axios
        .post("http://13.233.18.99:3010/api/v1/reports/addWeeklyReport", {
          projectId: props.Id,
          TMfixedCost: formValues.TMfixedCost,
          resourceInfo: {
            designer: designer,
            totalresources: total,
            frontend: frontEnd,
            Backend: backEnd,
            Tester: qa,
          },
          weeklyCompletion: formValues.weeklyCompletion,
          numberOfStories: formValues.numberOfStories,
          featuresCompleted: formValues.featuresCompleted,
          newBugs: formValues.newBugs,
          bugsFixed: formValues.bugsFixed,
          codeReview: formValues.codeReview,
          unitTesting: formValues.unitTesting,
          weeklyCommunication: formValues.weeklyCommunication,
          delay: formValues.delay,
          dependencies: formValues.dependencies,
          riskMitigation: formValues.riskMitigation,
          risks: formValues.risks,
          supportRequired: formValues.supportRequired,
        })

        .then((response) => {
          console.log(response);
          weekUpdate()
        })
        .catch((error) => {
          console.log(error);
        });

        setFormValues("");
        setTotal(0);
    }
  };

  //Form Validation Part//

  const validate = (values) => {
    const errors = {};

    if (!values.TMfixedCost.trim()) {
      errors.TMFixedCost = "*value required";
    }
    if (values.TMfixedCost < 0) {
      errors.TMFixedCost = "Enter valid T&M/Fixed Cost";
    }
    
    if(total===0)
    {
      errors.ResourceField="*value required";
    }
    if (!values.weeklyCompletion.trim()) {
      errors.WeeklyCompletion = "*value required";
    }
    if (!values.numberOfStories.trim()) {
      errors.numberOfStories = "*value required";
    }
    if (!values.featuresCompleted.trim()) {
      errors.FeaturesCompleted = "*value required";
    }

    if (!values.newBugs.trim()) {
      errors.newBugs = "*value required";
    }
    if (!values.bugsFixed.trim()) {
      errors.bugsFixed = "*value required";
    }
    if (!values.codeReview.trim()) {
      errors.codeReview = "*value required";
    }
    if (!values.unitTesting.trim()) {
      errors.unitTesting = "*value required";
    }
    if (!values.weeklyCommunication.trim()) {
      errors.weeklyCommunication = "*value required";
    }
    if (!values.delay.trim()) {
      errors.delay = "*value required";
    }
    if (!values.dependencies.trim()) {
      errors.Dependencies = "*value required";
    }
    if (!values.riskMitigation.trim()) {
      errors.RisksMitigation = "*value required";
    }
    if (!values.risks.trim()) {
      errors.Risks = "*value required";
    }
    if (!values.supportRequired.trim()) {
      errors.SupportRequired = "*value required";
    }

    return errors;
  };

  //----------------------------------------------------------------//

  return props.trigger ? (
    //Form Starting
    <form className="WeeklyReport_Form"
      
      onSubmit={(e) => handleSubmit(e)}
      method="POST"
    >
      <div className="WeeklyUpdate">
        <div className="WeeklyUpdate_Head">
          <h1 className="WeeklyUpdate_Head_Title">Weekly Update</h1>
        </div>

        <div className="WeeklyUpdate_Overalldetail">
          <h1 className="WeeklyUpdate_Overalldetail_Title">Overall Detail</h1>

          <div className="WeeklyUpdate_Overalldetail_Field">
            <div className="WeeklyUpdate_Overalldetail_Field_All">
              <label className="WeeklyUpdate_Overalldetail_Field_All_label">
                T&M/Fixed Cost
              </label>
              <br />
              <input
                className="WeeklyUpdate_Overalldetail_Field_All_input"
                type="number"
                onWheel={ event => event.currentTarget.blur() }
                placeholder="Enter T&M/Fixed Cost "
                value={formValues.TMfixedCost}
                onChange={(e) => handleChange(e, "TMfixedCost")}
              />
              <p className="ErrorMessage">{formErrors.TMFixedCost}</p>
            </div>

            <div className="WeeklyUpdate_Overalldetail_Field_All">
              <label className="WeeklyUpdate_Overalldetail_Field_All_label">
                No.of resources used
              </label>
              <div className="Highlights">
                <span>10 resources allocated</span>
              </div>
              <br />
              <div className="WeeklyUpdate_Overalldetail_Field_All_input">
                <CommonDropDown
                  designer={designer}
                  setDesigner={setDesigner}
                  frontEnd={frontEnd}
                  setFrontEnd={setFrontEnd}
                  backEnd={backEnd}
                  setBackEnd={setBackEnd}
                  qa={qa}
                  setQA={setQA}
                  total={total}
                  setTotal={setTotal}
                />
              </div>
              <p className="ErrorMessage">{formErrors.ResourceField}</p>
            </div>

            <div className="WeeklyUpdate_Overalldetail_Field_All">
              <label className="WeeklyUpdate_Overalldetail_Field_All_label">
                Weekly% Completion
              </label>
              <br />
              <input
                className="WeeklyUpdate_Overalldetail_Field_All_input"
                type="number"
                onWheel={ event => event.currentTarget.blur() }
                placeholder="Enter a Weekly% Completion"
                value={formValues.weeklyCompletion}
                onChange={(e) => handleChange(e, "weeklyCompletion")}
              />
              <p className="ErrorMessage">{formErrors.WeeklyCompletion}</p>
            </div>
          </div>
        </div>

        <div className="WeeklyUpdate_Weeklydetail">
          <h1 className="WeeklyUpdate_Weeklydetail_Title">Weekly Detail</h1>

          <div className="WeeklyUpdate_Weeklydetail_Field">
            <div className="WeeklyUpdate_Weeklydetail_Field_All">
              <label className="WeeklyUpdate_Weeklydetail_Field_All_label">
                No.of Features/Stories
              </label>
              <br />
              <input
                className="WeeklyUpdate_Weeklydetail_Field_All_input"
                type="number"
                onWheel={ event => event.currentTarget.blur() }
                placeholder="Enter a No.of Features/Stories"
                value={formValues.numberOfStories}
                onChange={(e) => handleChange(e, "numberOfStories")}
              />
              <p className="ErrorMessage">{formErrors.numberOfStories}</p>
            </div>

            <div className="WeeklyUpdate_Weeklydetail_Field_All">
              <label className="WeeklyUpdate_Weeklydetail_Field_All_label">
                Features Completed
              </label>{" "}
              <div className="Highlights2">
                <span>Total 100 stories</span>
              </div>
              <br />
              <input
                className="WeeklyUpdate_Weeklydetail_Field_All_input"
                type="number"
                onWheel={ event => event.currentTarget.blur() }
                placeholder="Enter a Features Completed"
                onChange={(e) => handleChange(e, "featuresCompleted")}
                value={formValues.featuresCompleted}
              />
              <p className="ErrorMessage">{formErrors.FeaturesCompleted}</p>
            </div>

            <div className="WeeklyUpdate_Weeklydetail_Field_All">
              <label className="WeeklyUpdate_Weeklydetail_Field_All_label">
                New Bugs
              </label>
              <br />
              <input
                className="WeeklyUpdate_Weeklydetail_Field_All_input"
                type="number"
                onWheel={ event => event.currentTarget.blur() }
                placeholder="Enter a New Bugs"
                value={formValues.newBugs}
                onChange={(e) => handleChange(e, "newBugs")}
              />
              <p className="ErrorMessage">{formErrors.newBugs}</p>
            </div>

            <div className="WeeklyUpdate_Weeklydetail_Field_All">
              <label className="WeeklyUpdate_Weeklydetail_Field_All_label">
                Bugs
              </label>
              <br />
              <input
                className="WeeklyUpdate_Weeklydetail_Field_All_input"
                type="number"
                onWheel={ event => event.currentTarget.blur() }
                placeholder="Enter a Bugs"
                value={formValues.bugsFixed}
                onChange={(e) => handleChange(e, "bugsFixed")}
              />
              <p className="ErrorMessage">{formErrors.bugsFixed}</p>
            </div>

            <div className="WeeklyUpdate_Weeklydetail_Field_All">
              <label className="WeeklyUpdate_Weeklydetail_Field_All_label">
                Code Review
              </label>
              <br />
              <select
                style={{ backgroundColor: "white" }}
                className="WeeklyUpdate_Weeklydetail_Field_All_input"
                type="boolean"
                defaultValue={null}
                value={formValues.codeReview}
                onChange={(e) => handleChange(e, "codeReview")}
              >
                <option value=""></option>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>

              <p className="ErrorMessage">{formErrors.codeReview}</p>
            </div>

            <div className="WeeklyUpdate_Weeklydetail_Field_All">
              <label className="WeeklyUpdate_Weeklydetail_Field_All_label">
                Unit Testing
              </label>
              <br />
              <select
                style={{ backgroundColor: "white" }}
                className="WeeklyUpdate_Weeklydetail_Field_All_input"
                type="boolean"
                defaultValue={null}
                value={formValues.unitTesting}
                onChange={(e) => handleChange(e, "unitTesting")}
              >
                <option value=""></option>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
              <p className="ErrorMessage">{formErrors.unitTesting}</p>
            </div>

            <div className="WeeklyUpdate_Weeklydetail_Field_All">
              <label className="WeeklyUpdate_Weeklydetail_Field_All_label">
                Weekly Communication
              </label>
              <br />
              <select
                style={{ backgroundColor: "white" }}
                className="WeeklyUpdate_Weeklydetail_Field_All_input"
                type="boolean"
                defaultValue={null}
                value={formValues.weeklyCommunication}
                onChange={(e) => handleChange(e, "weeklyCommunication")}
              >
                <option value=""></option>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
              <p className="ErrorMessage">{formErrors.weeklyCommunication}</p>
            </div>

            <div className="WeeklyUpdate_Weeklydetail_Field_All">
              <label className="WeeklyUpdate_Weeklydetail_Field_All_label">
                Delay
              </label>
              <br />
              <input
                className="WeeklyUpdate_Weeklydetail_Field_All_input"
                type="number"
                onWheel={ event => event.currentTarget.blur() } 
                onChange={(e) => handleChange(e, "delay")}
                value={formValues.delay}
              />

              <p className="ErrorMessage">{formErrors.delay}</p>
            </div>
          </div>
        </div>

        <div className="WeeklyUpdate_Otherdetail">
          <h1 className="WeeklyUpdate_Otherdetail_Title">Other Detail</h1>

          <div className="WeeklyUpdate_Otherdetail_Field">
            <div className="WeeklyUpdate_Otherdetail_Field_All">
              <label className="WeeklyUpdate_Otherdetail_Field_All_label">
                Dependencies
              </label>
              <br />
              <input
                className="WeeklyUpdate_Otherdetail_Field_All_input"
                type="text"
                placeholder="Enter description"
                onChange={(e) => handleChange(e, "dependencies")}
                value={formValues.dependencies}
              />
              <p className="ErrorMessage">{formErrors.Dependencies}</p>
            </div>

            <div className="WeeklyUpdate_Otherdetail_Field_All">
              <label className="WeeklyUpdate_Otherdetail_Field_All_label">
                Risks Mitigation
              </label>
              <br />
              <input
                className="WeeklyUpdate_Otherdetail_Field_All_input"
                type="text"
                placeholder="Enter description"
                onChange={(e) => handleChange(e, "riskMitigation")}
                value={formValues.riskMitigation}
              />
              <p className="ErrorMessage">{formErrors.RisksMitigation}</p>
            </div>

            <div className="WeeklyUpdate_Otherdetail_Field_All">
              <label className="WeeklyUpdate_Otherdetail_Field_All_label">
                Risks
              </label>
              <br />
              <input
                className="WeeklyUpdate_Otherdetail_Field_All_input"
                type="text"
                placeholder="Enter description"
                onChange={(e) => handleChange(e, "risks")}
                value={formValues.risks}
              />
              <p className="ErrorMessage">{formErrors.Risks}</p>
            </div>

            <div className="WeeklyUpdate_Otherdetail_Field_All">
              <label className="WeeklyUpdate_Otherdetail_Field_All_label">
                Support Required
              </label>
              <br />
              <input
                className="WeeklyUpdate_Otherdetail_Field_All_input"
                type="text"
                placeholder="Enter description"
                onChange={(e) => handleChange(e, "supportRequired")}
                value={formValues.supportRequired}
              />
              <p className="ErrorMessage">{formErrors.SupportRequired}</p>
            </div>
          </div>
        </div>

        <div className="WeeklyUpdate_SubmitButton">
          <button
            className="Cancelbtn"
            onClick={(e) => {
              props.setShownOff(false);
              setFormValues("");
              setFormErrors("");
            }}
          >
            Cancel
          </button>

          <button className="WeeklyUpdate_SubmitButton_Update">Update</button>
        </div>
      </div>
    </form>
  ) : (
    //Form Ending
    // ) : <ProjectDetails/>;
    <div />
  );
};

export default WeeklyUpdate;
