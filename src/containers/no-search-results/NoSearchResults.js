import React from 'react';

import alien from '../../assets/svg/alien.svg';

import './noSearchResults.css';

export default () => (
  <div className='no-search-results'>
    <div className='no-search-results__content'>
      <img
        className='no-search-results__content__img'
        src={alien}
        alt='Starship'
      />
      <div className='no-search-results__content__message'>
        <h2 className='no-search-results__content__message__title'>
          No results found
        </h2>
        <span className='no-search-results__content__message__desc'>
          Search for other keywords or remove applied filters.
        </span>
      </div>
    </div>
  </div>
);
