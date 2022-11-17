import React from 'react'
import '../../stylesheets/variable.scss';
import './ProjectDescription.scss';

const DescriptionData = (props) => {
  
    const {TMfixedCost,weeklyCompletion,resourceInfo:{totalresources},numberOfStories,featuresCompleted,newBugs,bugsFixed,codeReview,unitTesting,weeklyCommunication}=props.data;
  //  console.log("total",resourceInfo)
  return (
    <div >
    <div className='ProjectDescription'>
      <p className='ProjectDescription_Title'>T&M/Fixed Cost</p>
      <span   className='ProjectDescription_Calculation'>{TMfixedCost}</span>
    </div>
    <div className='ProjectDescription'>
      <p className='ProjectDescription_Title'>No.of resources used</p>
      <span  className='ProjectDescription_Calculation'>{totalresources}</span>
    </div>
    <div className='ProjectDescription'>
      <p className='ProjectDescription_Title'>Weekly% Completion</p>
      <span   className='ProjectDescription_Calculation'>{weeklyCompletion}</span>
    </div>
    <div className='ProjectDescription'>
      <p className='ProjectDescription_Title'>No.of Features/Stories</p>
      <span   className='ProjectDescription_Calculation'>{numberOfStories}</span>
    </div>
    <div className='ProjectDescription'>
      <p className='ProjectDescription_Title'>Features Completed</p>
      <span   className='ProjectDescription_Calculation'>{featuresCompleted}</span>
    </div>
    <div className='ProjectDescription'>
      <p className='ProjectDescription_Title'>New Bugs</p>
      <span   className='ProjectDescription_Calculation'>{newBugs}</span>
    </div>
    <div className='ProjectDescription'>
      <p className='ProjectDescription_Title'>Bugs Fixed</p>
      <span   className='ProjectDescription_Calculation'>{bugsFixed}</span>
    </div>
    <div className='ProjectDescription'>
      <p className='ProjectDescription_Title'>Code Review</p>
      <span  className='ProjectDescription_Calculation'>{codeReview.toString()}</span>
    </div>
    <div className='ProjectDescription'>
      <p className='ProjectDescription_Title'>Unit Testing</p>
      <span  className='ProjectDescription_Calculation'>{unitTesting.toString()}</span>
    </div>
    <div className='ProjectDescription'>
      <p className='ProjectDescription_Title'>Weekly Communication</p>
      <span   className='ProjectDescription_Calculation'>{weeklyCommunication.toString()}</span>
    </div>
    </div>
  )
}

export default DescriptionData;