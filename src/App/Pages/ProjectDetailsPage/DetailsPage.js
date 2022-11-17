import React, { useState,useEffect } from 'react'
import ProjectCard from '../../Components/ProjectCard/ProjectCard'
import ProjectDescription from '../../Components/ProjectDescription/ProjectDescription';
import ProjectName from '../../Components/ProjectName/ProjectName';
import './ProjectDetails.scss'
import axios from "axios"
import {useSearchParams} from "react-router-dom";

const DetailsPage = () => {
  const [searchParams]               = useSearchParams();
  const [projectname,setProjectName] = useState([]);
  const idvalues  = searchParams.get('id');
  const headlines = idvalues.slice(1,33)
  const getProjectheadlines =()=>{ 
    axios.get('http://13.233.18.99:3010/api/v1/projects/getOverallproject')
    .then((response)=>{
      setProjectName(response.data)
      console.log("api",response.data);
    })
    .catch(error=>console.log(error))

   
}
useEffect(()=>{

   getProjectheadlines();
},[]);


 for(let i=0;i<projectname?.content?.projects.length;i++){
    
  if(headlines===projectname?.content?.projects[i].projectId){
  return (
    <div>
      <div className="ProjectDetails">
        <div className="ProjectDetails-Head">
          <p>Project Details</p>
        </div>
        <div>
            <ProjectName projectName={projectname?.content?.projects[i].projectName} 
            logo={projectname?.content?.projects[i].logoUrl}
            status={projectname?.content?.projects[i].status}
            startDate={projectname?.content?.projects[i].startDate}
            />
        </div>
        <div className="ProjectDetails_Card">
          <ProjectCard />
        </div>
        <div>
          <ProjectDescription projectId={headlines} />
        </div>
      </div>
    </div>
  )
          }
        }
}

export default DetailsPage;
