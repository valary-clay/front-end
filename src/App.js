import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';
import LandingPage from './pages/LandingPage/LandingPage';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <PrivateRoute path='/dashboard' component={Dashboard} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
