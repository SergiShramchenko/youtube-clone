import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import youtubeLogo from '../../assets/svg/youtube-logo.svg';
import searchIcon from '../../assets/svg/search-icon.svg';
import optionsIcon from '../../assets/svg/options.svg';
import menuBlockIcon from '../../assets/svg/block-menu.svg';
import bellIcon from '../../assets/svg/bell.svg';

import { fetchSearchReultsYoutubeVideos } from '../../redux/video/video.action.creators';
import { getSearchTerm } from '../../redux/video/video.actions';

import './header.css';

const Header = () => {
  const onInputChange = (e) => {
    dispatch(getSearchTerm(e.target.value));
  };

  const onSubmitSearchTerm = (e) => {
    e.preventDefault();
    if (searchTerm === '') return;
    dispatch(fetchSearchReultsYoutubeVideos(searchTerm));
    history.push({
      pathname: '/search_results',
      search: `?query=${searchTerm}`,
    });
  };

  let history = useHistory();
  const dispatch = useDispatch();

  const searchTerm = useSelector((state) => state.video.searchTerm);

  return (
    <div className='header'>
      <div className='start'>
        <div className='start__burger-menu' tabIndex='0'>
          <div className='start__burger-menu__point'></div>
          <div className='start__burger-menu__point'></div>
          <div className='start__burger-menu__point'></div>
        </div>
        <div className='logo'>
          <Link className='logo__link' to='/' tabIndex='0'>
            <img src={youtubeLogo} alt='YouTube logo' />
            <span className='logo__title'>YouTube</span>
          </Link>
        </div>
      </div>
      <div className='search'>
        <form className='search__form' onSubmit={onSubmitSearchTerm}>
          <input
            className='search__form__input'
            type='text'
            tabIndex='0'
            placeholder='Search'
            onChange={onInputChange}
            value={searchTerm}
          />
          <button className='search__form__btn' tabIndex='0'>
            <img src={searchIcon} alt='search icon' />
          </button>
        </form>
      </div>
      <div className='options'>
        <div className='options__element' tabIndex='0'>
          <img
            className='options__element__img'
            src={menuBlockIcon}
            alt='options'
          />
        </div>
        <div className='options__element' tabIndex='0'>
          <img className='options__element__img' src={bellIcon} alt='options' />
        </div>
        <div className='options__element' tabIndex='0'>
          <img
            className='options__element__img'
            src={optionsIcon}
            alt='options'
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
