import React from 'react';
import { Link } from 'react-router-dom';

const FundAFarm = () => {
  return (
    <>
      <h1 className="title is-size-4">How to fund a Farm</h1>
      <div className="funding-farm">
        <ul>
          <li>Go to <Link  to="/dashboard/farms">All Farms</Link></li>
          <li>Click <strong>Fund</strong> button on an open farm</li>
          <li>Enter number of units you want to buy</li>
          <li>Pay using your preferred payment channel </li>
          <br/>
          <li>
            {`At the end of the farm period, returns are made to your `}
            <Link className="green-text" to="/dashboard/profile/#bank-detail">bank account</Link>
          </li>
        </ul>
    </div>
    </>
  )
}

export default FundAFarm;
