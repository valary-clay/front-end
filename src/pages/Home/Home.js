import React, { useEffect }  from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { getFundedFarms } from '../../redux/actions/farmActionCreators';
import { getAllFarms } from '../../redux/actions/farmActionCreators';

import FundAFarm from './FundAFarm';
import CreateAFarm from './CreateAFarm';

import Farms from './Farms';

import './styles.scss';

const Home = () => {
  const fundedFarms = useSelector(state => state.farm.fundedFarms);
  const allFarms = useSelector(state => state.farm.allFarms);
  const user = useSelector(state => state.user.credentials);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getFundedFarms(history));
    dispatch(getAllFarms(history));
  } , [dispatch, history])

  return (
    <div className="container dashboard-home">
      <h1 className="title is-size-2">
        Hello!
      </h1>
      <hr />
      <div className="columns" >
        <div className="column card dashboard-card">
          <h1 className="title is-size-4 is-center">
            {
              user.role === "0"
              ? `Farms you have funded`
              : user.role === "1"
              ? `Your Farms`
              : null
            }
          </h1>
          <hr />
          <div className="funded-farms">
            <Farms user={user} fundedFarms={fundedFarms} allFarms={allFarms}/>
          </div>
        </div>

        <div className="column card dashboard-card">
          {
            user.role === "0"
            ? <FundAFarm />
            : user.role === "1"
            ? <CreateAFarm />
            : null
          }

        </div>

      </div>

    </div>
  );
}

export default Home;
