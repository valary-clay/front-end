import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';

import { logout } from '../../redux/actions/userActionCreators';

import './styles.scss';

const SideBar = ({ user }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <div className="sidebar-content">
      <div className="title is-size-3 sidebar-content__logo">
        <span>One Acre</span>
      </div>
      <div className="sidebar-content__menu-items">
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/dashboard/farms">All Farms</NavLink>
        {
          user.role === "1"
          ? <NavLink to="/dashboard/add_farm">Add Farm</NavLink>
          : null
        }
        <NavLink to="/dashboard/profile">Profile</NavLink>
        <div className="sidebar-content__logout" 
          onClick={() => dispatch(logout(history))}>
          <span>Logout</span>
          <FaSignOutAlt className="logout-icon"/>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
