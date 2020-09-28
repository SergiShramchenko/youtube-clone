import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { fetchMostPopularYoutubeVideosFromCategory } from '../../redux/video/video.action.creators';

import filters from '../../assets/svg/filters.svg';

import './trendsMenu.css';

export default () => {
  const dispatch = useDispatch();
  const videoCategories = useSelector((state) => state.video.videoCategory);

  let history = useHistory();

  const fetchVideoFromCategory = (id, name) => {
    dispatch(fetchMostPopularYoutubeVideosFromCategory(id));
    history.push({
      pathname: `${history.location.pathname}/${name.toLowerCase()}`,
      state: { categoryId: id },
    });
  };

  return (
    <div className='trends-menu'>
      <ul className='trends-menu__options'>
        {videoCategories.map(({ name, id, img }) => (
          <li
            className='trends-menu__options__item'
            tabIndex='0'
            onClick={() => fetchVideoFromCategory(id, name)}
            key={id}
          >
            <div className='trends-menu__options__item__circle'>
              <img
                className='trends-menu__options__item__circle__img'
                src={img}
                alt={name}
              />
            </div>
            <span className='trends-menu__options__item__title'>{name}</span>
          </li>
        ))}
      </ul>
      <div className='trends-menu__region'>
        <img
          className='trends-menu__region__img'
          src={filters}
          alt='movies'
          tabIndex='0'
        />
      </div>
    </div>
  );
};
