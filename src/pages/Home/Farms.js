import React from 'react';

import Farm from './Farm';
import FarmWrapper from '../../components/AllFarms/FarmWrapper';

const Farms = ({ fundedFarms, allFarms, user }) => {

  // For funders
  let fundedInAll = fundedFarms.map(funded => {
    let [farm] = allFarms.filter(farm => farm.id === funded.farm_id);
    if (farm) {
      let newFarm = {...farm, ...funded};
      return newFarm;
    }
    return null;
  });
  fundedInAll = fundedInAll.filter(farm => farm);

  // For farmers
  const ownFarms = allFarms.filter(farm => farm.createdby===user.id);

  if (user.role === "0") {
        if (fundedInAll.length === 0) {
          return (
            <div className="center is-size-5 has-text-primary">
              No funded farms yet
            </div>
          );
        }

        return (
          <div className="dashboard-home__funded-farms">
            {
              fundedInAll.map((farm) => (
              <FarmWrapper title={farm.name} farm={farm} key={farm.id}>
                {
                  
                  ({title, toggleDetailModal, toggleFundModal, farm}) => (
                    <Farm 
                      title={title} 
                      user={user}
                      farm={farm} 
                      toggleDetailModal={toggleDetailModal}
                      toggleFundModal={toggleFundModal}
                    />
                )
              }
              </FarmWrapper>

              ))
            }
          </div>
        )
  }


  if (user.role === "1") {
        if (ownFarms.length === 0) {
          return (
            <div className="center is-size-5 has-text-primary">
               `You haven't added any farms yet`
            </div>
          );
        }

        return (
          <div className="dashboard-home__funded-farms">
            {
              ownFarms.map((farm) => (
              <FarmWrapper title={farm.name} farm={farm} key={farm.id}>
                {
                  
                  ({title, toggleDetailModal, toggleFundModal, farm}) => (
                    <Farm 
                      title={title} 
                      user={user}
                      farm={farm} 
                      toggleDetailModal={toggleDetailModal}
                      toggleFundModal={toggleFundModal}
                    />
                )
              }
              </FarmWrapper>

              ))
            }
          </div>
        )
  }

};

export default Farms;
