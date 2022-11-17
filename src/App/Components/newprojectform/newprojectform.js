import React, { useState, useRef } from "react";
import axios from "axios";
import DropDown from "../../Assests/images/DropDown.svg";
import ResourceFeild from "../../Containers/ResourceFeild/ResourceFeild";
import "./newproject.scss";


function Newprojectform(props) {  
  const { trigger, setShowForm , getOverallDetails } = props;
  let count = 0;
  const [total, settotal]  = useState(count);
  const [front, setfront]  = useState(count);
  const [back, setback]    = useState(count);
  const [QA, setQA]        = useState(count);
  const [test, settest]    = useState(count);  
  const [FileName, setFileName]  = useState("");
  const [imageUrl, setImageUrl]  = useState("")
  const [showLogo, setShowLogo]  = useState(false);
  const [showResourceFeild, setshowResourceFeild] = useState(false);

  //function for add logo -start

  const inputFileRef = useRef(null);
  const onFilechange = (e) => {
  const [FileName]   = e.target.files;
    setFileName(URL.createObjectURL(FileName));
    e.preventDefault()
    var formdata = new FormData();
    formdata.append("file", e.target.files[0]);
    console.log(e.target.files[0])
    console.log(formdata)
    axios.post("http://13.233.18.99:3010/api/v1/projects/upload_image", formdata)
   .then(response => {
     setImageUrl(response?.data?.content?.url)
     console.log("response",response?.data?.content?.url)
    }
    )
  .catch(error => console.log('error', error));
    setShowLogo(true);
  };
  
  const onBtnClick = () => {  
    inputFileRef.current.click();
  };
  
  //---------------------------End-----------------------//
  
  //form validation
  const initialValues = {
    ProjectTitle: "",
    ProjectPaymentCost: "",
    ProjectStartDate: "",
    ProjectDuration: "",
    overallProjectCompletetion: "",
    ProjectLogoUrl: "",
    frontEndenginner: "",
    backendEngineer: "",
    qaEngineer: "",
    designer: "",
    StartDate: "",
    endDate: "",
    numberOfStories: "",
    numberOfBugs: "",
  };
  const [formValues, setFormValue] = useState(initialValues);
  const [formErrors, setFormError] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = (e, type) => {
    console.log(FileName);
    const { value } = e.target;
    setFormValue({ ...formValues, [type]: value });
  };
   
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmit(true);
    setFormError(validate(formValues));
    if (
      formValues.ProjectTitle !== "" &&
      formValues.ProjectPaymentCost !== "" &&
      formValues.ProjectStartDate !== "" &&
      formValues.ProjectDuration !== "" &&
      total !== 0 &&
      total > 0 &&
      formValues.overallProjectCompletetion !== "" &&
      formValues.StartDate !== "" &&
      formValues.endDate !== "" &&
      formValues.numberOfStories !== "" &&
      formValues.numberOfBugs !== ""&&
      FileName!==""
    ) {
        setFormValue(initialValues);
        setshowResourceFeild(false)
        setShowLogo(false);
        setShowForm(false);
        setQA(0)
        setback(0)
        setfront(0)
        settest(0)
        settotal(0)
        setFileName("")
        setImageUrl("")

      axios
        .post("http://13.233.18.99:3010/api/v1/projects/createproject", {
          projectTitle: formValues.ProjectTitle,
          projectPaymentCost: formValues.ProjectPaymentCost,
          projectStartDate: formValues.ProjectStartDate,
          projectDuration: formValues.ProjectDuration,
          overallProjectCompletion: formValues.overallProjectCompletetion,
          projectLogoUrl: imageUrl,
          resourcesUsed: {
            total: total,
            resourceInfo: [
              {
                frontEndengineer: front,
              },
              {
                backendEngineer: back,
              },
              {
                qaEngineer: QA,
              },
              {
                designer: test,
              },
            ],
          },
          weeklyDetail: {
            startDate: formValues.StartDate,
            endDate: formValues.endDate,
            numberOfStories: formValues.numberOfStories,
            numberOfBugs: formValues.numberOfBugs,
          },
        })
        .then((response) => {
          getOverallDetails()
          console.log(response);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.ProjectTitle.trim()) {
      errors.ProjectTitle = "Please Enter  Project Name";
    }
    if (!values.ProjectPaymentCost.trim()) {
      errors.ProjectPaymentCost = "Please Enter  T&M/Fixed Cost";
    }
    if (values.ProjectPaymentCost < 0) {
      errors.ProjectPaymentCost = "T&M/Fixed Cost shouldn't be negative";
    }
    if (!values.ProjectStartDate.trim()) {
      errors.ProjectStartDate = "Please Enter Date";
    }
    if (!values.ProjectDuration.trim()) {
      errors.ProjectDuration = "Please Enter Duration Value";
    }
    if (values.ProjectDuration < 0) {
      errors.ProjectDuration = "Duration shouldn't be negative";
    }
    if (!values.overallProjectCompletetion.trim()) {
      errors.overallProjectCompletetion = "Please Enter project completion %";
    }
    if (values.overallProjectCompletetion < 0) {
      errors.overallProjectCompletetion = "Duration shouldn't be negative";
    }
    if (values.overallProjectCompletetion > 100) {
      errors.overallProjectCompletetion =
      "Percent shouldn't be greater than 100";
    }
    if (!values.StartDate.trim()) {
      errors.StartDate = "Please Enter Date";
    }
    if (!values.endDate.trim()) {
      errors.endDate = "Please Enter Date";
    }
    if (!values.numberOfBugs.trim()) {
      errors.numberOfBugs = "Please Enter number of bugs ";
    }
    if (values.numberOfBugs < 0) {
      errors.numberOfBugs = "Bugs shouldn't be negative";
    }
    if (!values.numberOfStories.trim()) {
      errors.numberOfStories = "Please Enter the feature value";
    }
    if (FileName === "") {
      errors.selectedFile = "please add the logo";
    }
    if(total===0){
      errors.totalresources="Please Enter Resource Feild"
    }
    if(total <=0){
      errors.totalresources="Please Enter Resource Feild"
    }   
    return errors;
  };

  //-----------------validation end---------------------//
  return trigger ? (
    <>
      <form className="new-project-form" onSubmit={handleSubmit}>
        <div className="new-project-form-container">
          <div className=" new-project-form-container__form-heading">
            <span className="heading"> Create New Project</span>
          </div>
          <div className="new-project-form-container__logo-container">
            {showLogo ? (
              <React.Fragment>
                <input
                  type="file"
                  className="logo-form"
                  ref={inputFileRef}
                  onChange={onFilechange}
                />
                <img className="logo-img" src={FileName} alt="buglogo" />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <input
                  type="file"
                  className="logo-form"
                  ref={inputFileRef}
                  onChange={onFilechange}
                />
                <button className="logo-btn" type="button" onClick={onBtnClick}>
                  +
                </button>
                <div className="add-logo">Add logo</div>
              </React.Fragment>
            )}
          </div>
          <p className="errors" style={{textAlign:"center"}}>{formErrors.selectedFile}</p>
           <span className="new-project-form-container__Overall-Detail">
            Overall Detail
           </span>
          <div className="line-one">
            <div className="first">
              <label htmlFor="Project Name" className="labels">
                Project Name
              </label>
              <br />
              <input
                id="Project Name"
                className="inputs"
                type="text"
                value={formValues.ProjectTitle}
                onChange={(e) => handleChange(e, "ProjectTitle")}
                placeholder="Enter Project Name"
              />  
            {<p className="errors">{formErrors.ProjectTitle}</p> }  
            </div>
            <div className="second">
              <label htmlFor="date" className="labels">
                Project Start Date
              </label>
              <br />
              <input
                id="date"
                className="inputs"
                type="date"
                value={formValues.ProjectStartDate}
                onChange={(e) => handleChange(e, "ProjectStartDate")}
                placeholder="Enter Project Start Date"
              />
              {formErrors.ProjectStartDate && (
                <p className="errors">{formErrors.ProjectStartDate}</p>
              )}
            </div>
          </div>
          <div className="line-one">
            <div className="first">
              <label htmlFor="Duration" className="labels">
                Duration
              </label>
              <br />
              <input
                id="Duration"
                className="inputs"
                type="number"
                onWheel={ event => event.currentTarget.blur() }
                value={formValues.ProjectDuration}
                onChange={(e) => handleChange(e, "ProjectDuration")}
                placeholder="Enter Duration"
              />
              <p className="errors">{formErrors.ProjectDuration}</p>
            </div>
             <div>
              <label htmlFor="totalresources" className="labels">
                Total resources
              </label>
              <br />
              <div className="resource-field"
               onClick={(e) => setshowResourceFeild(!showResourceFeild)}>
                <p className="totalvalue">{total}</p>
                <img
                  className="dropdown"
                  src={DropDown}
                  alt="dropdown"
                />
              <ResourceFeild
                showResourceFeild={showResourceFeild}
                setshowResourceFeild={setshowResourceFeild}
                settotal={settotal}
                setfront={setfront}
                setback={setback}
                setQA={setQA}
                settest={settest}
                front={front}
                back={back}
                total={total}
                test={test}
                QA={QA}
              />
              <p className="errors" style={{marginTop:"2.1rem"}}>{formErrors.totalresources}</p>
               </div>
            </div>
          </div>
          <div className="line-one">
            <div className="first">
              <label htmlFor="project-completion" className="extralabel">
                Overall Project% Completion
              </label>
              <br />
              <input
                id="project-completion"
                className="inputs"
                onChange={(e) => handleChange(e, "overallProjectCompletetion")}
                type="number"
                onWheel={ event => event.currentTarget.blur() }
                value={formValues.overallProjectCompletetion}
                placeholder=""
              />
              <p className="errors">{formErrors.overallProjectCompletetion}</p>
            </div>
            <div className="second">
              <label htmlFor="fixedcost" className="labels">
                T&M/Fixed Cost
              </label>
              <br />
              <input
                id="fixedcost"
                className="inputs"
                type="number"
                onWheel={ event => event.currentTarget.blur() }
                value={formValues.ProjectPaymentCost}
                onChange={(e) => handleChange(e, "ProjectPaymentCost")}
                placeholder="Enter T&M/Fixed Cost"
              />
              {formErrors.ProjectPaymentCost && (
                <p className="errors">{formErrors.ProjectPaymentCost}</p>
              )}
            </div>
          </div>
          <span className="Weekly-Detail">Weekly Detail</span>
          <div className="line-one">
            <div className="first">
              <label htmlFor="start-date" className="labels">
                Start Date
              </label>
              <br />
              <input
                id="start-date"
                className="inputs"
                type="date"
                value={formValues.StartDate}
                onChange={(e) => handleChange(e, "StartDate")}
                placeholder="Enter Start Date"
              />
              <p className="errors">{formErrors.StartDate}</p>
            </div>
            <div className="second">
              <label htmlFor="end-date" className="labels">
                End Date
              </label>
              <br />
              <input
                id="end-date"
                className="inputs"
                type="date"
                value={formValues.endDate}
                onChange={(e) => handleChange(e, "endDate")}
                placeholder="Enter End Date"
              />
              <p className="errors">{formErrors.endDate}</p>
            </div>
          </div>
          <div className="line-one">
            <div className="first">
              <label htmlFor="features" className="labels">
                No.of Features/Stories
              </label>
              <br />
              <input
                id="features"
                className="inputs"
                onChange={(e) => handleChange(e, "numberOfStories")}
                type="number"
                onWheel={ event => event.currentTarget.blur() }
                value={formValues.numberOfStories}
                placeholder=""
              />
              <p className="errors">{formErrors.numberOfStories}</p>
            </div>
            <div className="second">
              <label htmlFor="bugs" className="labels">
                No.of Bugs
              </label>
              <br />
              <input
                id="bugs"
                className="inputs"
                type="number"
                value={formValues.numberOfBugs}
                onChange={(e) => handleChange(e, "numberOfBugs")}
                placeholder="Enter Bugs here"
              />
              <p className="errors">{formErrors.numberOfBugs}</p>
            </div>
          </div>
          <div className="form-btn">
            <button
              className="cancel-btn"
              onClick={(e) => {
                setShowForm(false);
                setFormValue(initialValues);
                setShowLogo(false);
                setQA(0)
                setback(0)
                setfront(0)
                settest(0)
                settotal(0)
                setFileName("")
                setImageUrl("")
                setFormError(false)
              }}
            >
            Cancel
            </button>
            <button className="done-btn" type="submit">Done</button>
          </div>
        </div>
      </form>
    </>
  ) : (
    ""
  );
  
}

export default Newprojectform;
