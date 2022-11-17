import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import ProjectCardData from "./ProjectCardData";
import "./ProjectCardData.scss";

const ProjectCard = () => {
  const [searchParams] = useSearchParams();
  const [dashboardData, setDasboardData] = useState([]);
  const idvalue = searchParams.get("id");
  const details = idvalue.slice(1, 33);

  const getProjectDetails = () => {
    axios
      .get("http://13.233.18.99:3010/api/v1/projects/getOverallproject")
      .then((response) => {
        setDasboardData(response.data);
        console.log("apiweek3", response.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getProjectDetails();
  }, []);

  for (let i = 0; i < dashboardData?.content?.projects.length; i++) {
    if (details === dashboardData?.content?.projects[i].projectId) {
      return (
        <div>
          <ProjectCardData
            numberOfBugs={dashboardData?.content?.projects[i].numberOfBugs}
            dependencies={dashboardData?.content?.projects[i].dependencies}
            codeReviews={dashboardData?.content?.projects[i].codeReviews}
            unitTesting={dashboardData?.content?.projects[i].unitTesting}
            delay={dashboardData?.content?.projects[i].delay}
          />
        </div>
      );
    }
  }
};

export default ProjectCard;
