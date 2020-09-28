import React from 'react';
import { Link } from 'react-router-dom';

import home from '../../assets/png/winter-home.png';

import './404.css';

export default () => (
  <div className='not-found'>
    <div className='not-found-block'>
      <h1 className='not-found-block-error-message'>
        Page not found{' '}
        <span className='not-found-block-error-message__number'>404</span>
      </h1>
      <div className='not-found-block-back-home'>
        <Link to='/' className='not-found-block-back-home__link'>
          <img
            src={home}
            className='not-found-block-back-home__link__img'
            alt='Home'
          />
          <span className='not-found-block-back-home__link__text'>Home</span>
        </Link>
      </div>
    </div>
  </div>
);
