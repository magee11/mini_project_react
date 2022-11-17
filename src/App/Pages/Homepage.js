import { useEffect, useState } from "react";
import axios from "axios";
import Totaldata from "../Components/totaldata/totaldata";
import Centreelement from "../Components/centerelement/centreelement.js";
import Projectdetails from "../Components/projectdetails/projectdetails.js";
import runningprojectlogo from ".././Assests/images/RunningProjects.svg";
import "../Pages/homepage.scss";

function Homepage(props) {
  console.log(props.searchItem)
  const [ProjectData, setProjectData] = useState([]);
  const value=ProjectData?.content?.projects?.length
  
  const tilesData = [
    {
      title: "Total Project",
      cardIcon: runningprojectlogo,
      count: value,
    },
  ];
  useEffect(() => {
    getOverallDetails()
  }, []);
  
  const getOverallDetails = ()=>{
    axios
    .get("http://13.233.18.99:3010/api/v1/projects/getOverallproject")
    .then((response) => {
      setProjectData(response.data);
      console.log("api value", response);
    })
    .catch((error) => console.log(error));
  }
  return (
    <div className="home-main-container__home-container">
      <div className="home-main-container__main-container">
        <div className="home-main-container__tiles-container">
          {tilesData &&
            tilesData.length > 0 &&
            tilesData.map((item, index) => <Totaldata key={index} {...item} />)}
          </div>
        <Centreelement  getOverallDetails={getOverallDetails} />
        <div className="home-main-container__project_idividual_table">
          {console.log("original value", ProjectData?.content?.projects)}
          {ProjectData?.content?.projects &&
            ProjectData?.content?.projects?.length > 0 &&
            ProjectData?.content?.projects?.filter((datas)=>{
              if(props.searchItem ===""){
                return datas
              }
              else if(datas.projectName.toLowerCase().includes(props.searchItem.toLowerCase())){
                return datas
              }
            }).map((datas, index) => (
              <Projectdetails key={index} {...datas}/>
              
            ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
