import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo_itbootcamp.png';
import { authenticatedRoutes, unAuthenticatedRoutes } from '../../routes';

import style from './head.module.css';

export default ({isAuthenticated}) => {
  const wrapper = (routes) => routes.map((route) => route.name ? (
    <NavLink 
      exact
      className={style["nav-item"]} 
      activeClassName={style.active}
      key={route.name} 
      to={route.path}  
    >
      {route.name}
    </NavLink>
  ) : false).filter(item => item);

  return (
    <div className={style["header-container"]}>
      <nav className={style.header}> 
        <img className={style.logo} src={logo} alt='WebDev Forum'/>
        {isAuthenticated ? wrapper(authenticatedRoutes) : wrapper(unAuthenticatedRoutes)}
      </nav>
    </div>
  );
}