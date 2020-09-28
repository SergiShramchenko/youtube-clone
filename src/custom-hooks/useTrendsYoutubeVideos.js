import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { cleanUpData } from '../redux/video/video.actions';

import {
  fetchMostPopularYoutubeVideos,
  fetchMostPopularYoutubeVideosFromCategory,
} from '../redux/video/video.action.creators';

export default () => {
  const video = useSelector((state) => state.video.data);

  const dispatch = useDispatch();
  const location = useLocation();

  const [windowWidth, setWindowWidth] = useState(0);
  let resizeWindow = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    if (location.state && location.pathname !== '/trends') {
      dispatch(
        fetchMostPopularYoutubeVideosFromCategory(location.state.categoryId)
      );
    } else {
      dispatch(fetchMostPopularYoutubeVideos());
    }

    resizeWindow();
    window.addEventListener('resize', resizeWindow);

    return () => {
      dispatch(cleanUpData());
      window.removeEventListener('resize', resizeWindow);
    };
  }, [location.pathname]);

  return {
    video,
    windowWidth,
  };
};
