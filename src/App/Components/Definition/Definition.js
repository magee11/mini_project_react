import React from 'react'
import "./Defintion.scss"

const Definition = (props) => {
  const { dependencies,risk_mitigation,risk,support_required} = props.value;
  return (
    <div className='ProjectDescription_Definition'>
      <div className='ProjectDescription_Detail'>
        <p className='ProjectDescription_Detail_Head'>Dependencies</p>
        <p style={{ fontSize: '16px', fontFamily: 'DMSans-medium', fontWeight: "500" }} className='ProjectDescription_Detail_Definition'>{dependencies}</p>
      </div>
      <div className='ProjectDescription_Detail'>
        <p className='ProjectDescription_Detail_Head'>Risks</p>
        <p style={{ fontSize: '16px', fontFamily: 'DMSans-medium', fontWeight: "500" }} className='ProjectDescription_Detail_Definition'>{risk}</p>
      </div>
      <div className='ProjectDescription_Detail'>
        <p className='ProjectDescription_Detail_Head'>Risks Mitigation</p>
        <p style={{ fontSize: '16px', fontFamily: 'DMSans-medium', fontWeight: "500" }} className='ProjectDescription_Detail_Definition'>{risk_mitigation}</p>
      </div>
      <div className='ProjectDescription_Detail'>
        <p className='ProjectDescription_Detail_Head'>Support Required</p>
        <p style={{ fontSize: '16px', fontFamily: 'DMSans-medium', fontWeight: "500" }} className='ProjectDescription_Detail_Definition'>{support_required}</p>
      </div>

    </div>


  )
}

export default Definition