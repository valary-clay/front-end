import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SideBar from '../../components/SideBar/SideBar';
import AllFarms from '../../components/AllFarms/AllFarms';
import Profile from '../../components/Profile/Profile';
import NavBar from '../../components/NavBar/NavBar';
import AddFarm from '../../components/AddFarm/AddFarm';
import EditFarm from '../../components/EditFarm/EditFarm';

import Home from '../Home/Home';

import './style.scss';

const Dashboard = () => {
  let user = useSelector(state => state.user.credentials);
  const { path } = useRouteMatch()

  return (
    <div className="columns top-wrapper gradient">
      <div className="sidebar  background-blue">
        <SideBar user={user}/>
      </div>
      <div className="main-section">
        <div className="columns">
        <div className="column">
          <NavBar user={user}/>
          <div className="dashboard gradient">
            <Switch>
              <Route exact path={path}>
                <Home />
              </Route>

              <Route path={`${path}/profile`}>
                <Profile user={user} />
              </Route>

              <Route exact path={`${path}/farms`}>
                <AllFarms />
              </Route>

              <Route exact path={`${path}/add_farm`}>
                <AddFarm />
              </Route>

              <Route exact path={`${path}/farms/:id`}>
                <EditFarm />
              </Route>

            </Switch>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
