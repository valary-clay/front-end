import React from 'react';

const Farm = ({ toggleDetailModal, farm, user}) => {

  if (user.role === "0"){

      let statusClass = farm.status === 'confirmed'? 'is-success': 'is-warning';

      return (
          <div className="farm-wrapper">
            <div className="farm is-flex">
              <span className="is-size-5 is-block is-center">{farm.name}</span>
              <span className={`tag ${statusClass}`}>{farm.status}</span>
              <button className="button is-info is-small is-outlined" 
                onClick={toggleDetailModal} style={{marginRight: '0.5em'}}>
                Details
              </button>
            </div>
            <div className="farm-wrapper__field">
                Amount: {' '}{farm.amount}
            </div>
            <div className="farm-wrapper__field">
                Time: {' '}{farm.funded_on}
            </div>
          </div>
      );


  }


  if (user.role === "1"){

      let statusClass = farm.active === true? 'is-success': 'is-warning';

      return (
          <div className="farm is-flex">
            <span className="is-size-5 is-block">{farm.name}</span>
            <span className={`tag ${statusClass}`}>
              {farm.active?`active`: 'inactive'}
            </span>
            <button className="button is-info is-small is-outlined" 
              onClick={toggleDetailModal} style={{marginRight: '0.5em'}}>
              Details
            </button>
          </div>
      );


  }

}

export default Farm;
