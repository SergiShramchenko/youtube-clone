import React from 'react';

import { NavLink } from 'react-router-dom';

import './navigation.css';

const Navigation = () => (
  <div className='navigation'>
    <ul className='navigation__list'>
      <li className='navigation__list__item'>
        <NavLink
          activeClassName='active-nav'
          className='navigation__list_link'
          exact
          to='/'
        >
          Main
        </NavLink>
      </li>

      <li className='navigation__list__item'>
        <NavLink
          activeClassName='active-nav'
          className='navigation__list_link'
          to='/trends'
        >
          Trends
        </NavLink>
      </li>

      <li className='navigation__list__item'>
        <NavLink
          activeClassName='active-nav'
          className='navigation__list_link'
          to='/subscriptions'
        >
          Subscriptions
        </NavLink>
      </li>

      <li className='navigation__list__item'>
        <NavLink
          activeClassName='active-nav'
          className='navigation__list_link'
          to='/library'
        >
          Library
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Navigation;
