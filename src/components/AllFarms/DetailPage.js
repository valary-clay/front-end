import React from 'react';

const DetailPage = ({ farm }) => {

  return (
      <div className="content">
        <table className="table is-striped">
        <tbody>
          <tr>
            <th className="title is-size-5">Description</th>
            <td className="">{farm.description}</td>
          </tr>
          
          <tr>
            <th className="title is-size-5">Location</th>
            <td className="">{farm.location}</td>
          </tr>
          
          <tr>
            <th className="title is-size-5">Start date</th>
            <td className="">{farm.start_date}</td>
          </tr>
          
          <tr>
            <th className="title is-size-5"># units</th>
            <td className="">{ farm.units }</td>
          </tr>
          
          <tr>
            <th className="title is-size-5">Price per unit</th>
            <td className="">{ `${farm.price} KES` }</td>
          </tr>
          
          <tr>
            <th className="title is-size-5">Duration</th>
            <td className="">{ farm.duration }</td>
          </tr>
          
          <tr>
            <th className="title is-size-5">Farm stage</th>
            <td className="">{ farm.stage }</td>
          </tr>
          
          <tr>
            <th className="title is-size-5">Profit Margin</th>
            <td className="">{ farm.margin }</td>
          </tr>
        </tbody>
        </table>
      </div>
  );
}


export default DetailPage;
