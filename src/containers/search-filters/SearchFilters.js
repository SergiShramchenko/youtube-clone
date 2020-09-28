import React from 'react';
import { useDispatch } from 'react-redux';

import filters from '../../assets/svg/filters.svg';
import x_sign from '../../assets/svg/x-sign.svg';

import {
  activeSearchSubMenu,
  activeSearchSubMenuItem,
} from '../../redux/video/video.actions';

import './searchFilters.css';

export default ({ searchValue, searchOptions, searchSubMenu }) => {
  const dispatch = useDispatch();

  const getData = (title, name) => {
    dispatch(activeSearchSubMenuItem(title, name));
  };

  return (
    <div className='search-results-options'>
      <div
        className='search-results-options__filter'
        tabIndex='0'
        onClick={() => dispatch(activeSearchSubMenu())}
      >
        <img
          className='search-results-options__filter__img'
          src={filters}
          alt='filters'
        />
        <span className='search-results-options__filter__title'>Filters</span>
      </div>
      <div
        className={`${
          !searchSubMenu
            ? 'search-results-options__submenu_hide'
            : 'search-results-options__submenu'
        }`}
      >
        {searchOptions &&
          searchOptions.map((item) => (
            <div className='search-results-options__submenu__item'>
              <h1 className='search-results-options__submenu__item__title'>
                {item.title}
              </h1>
              <ul className='search-results-options__submenu__item__list'>
                {item.parametres.map(({ name, active, searchName }) => (
                  <li
                    className={`search-results-options__submenu__item__list__option ${
                      active ? 'active' : ''
                    }`}
                    onClick={() => getData(item.title, name)}
                    tabIndex='0'
                  >
                    {name}
                    {active && item.title !== 'Order' && (
                      <img
                        className='search-results-options__submenu__item__list__option__img'
                        src={x_sign}
                        alt='choose option'
                      />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};
