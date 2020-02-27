import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import toggleNavbar from '../../utils/toggleNavbar';
import { logout } from '../../redux/actions/userActionCreators';

import './styles.scss';

const NavBar = ({user}) => {
  const history = useHistory()
  const dispatch = useDispatch()
  return (
    <div className="nav-bar-container">

        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand" >
            <Link to="/" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={toggleNavbar}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </Link>
          </div>

          <div  id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-end">

              <Link to="/dashboard" className="navbar-item">
                Our Process
              </Link>

              <Link to="/dashboard/farms" className="navbar-item">
                Farms
              </Link>

              <div className="navbar-item has-dropdown is-hoverable">
                <Link className="navbar-link">
                  { user.email }
                </Link>

                <div className="navbar-dropdown">
                  <Link to="/dashboard/profile" className="navbar-item">
                    Profile
                  </Link>
                  <Link to="/dashboard/profile" className="navbar-item">
                    Bank Account
                  </Link>
                  <hr className="navbar-divider"/>
                  <Link to="/"  className="navbar-item" onClick={() => dispatch(logout(history))}>
                    Sign Out
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </nav>


    </div>
  );
}

export default NavBar;
