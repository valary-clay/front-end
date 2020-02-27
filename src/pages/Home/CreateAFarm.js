import React from 'react';
import { Link } from 'react-router-dom';

const CreateAFarm = () => {
  return (
    <>
      <h1 className="title is-size-4">How to Create a Farm</h1>
      <div className="funding-farm">
        <ul>
          <li>Go to <Link  to="/dashboard/add_farm">Add Farm</Link></li>
          <li>{`Fill in the required details in the form that appears`}</li>
          <li>Ensure you are as accurate as you possibly can</li>
          <br/>
          <li>
              A member from <strong>One Acre</strong> will contact you with details on how to
              proceed further. This may involve agreeing to our terms and conditions
              as well as allowing for the farm and information you have provided to be 
              verified. Good luck!
          </li>
        </ul>
    </div>
    </>
  )
}

export default CreateAFarm;
