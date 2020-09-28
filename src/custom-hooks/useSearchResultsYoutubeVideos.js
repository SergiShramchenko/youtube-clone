import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';

import { getSearchTerm, cleanUpData } from '../redux/video/video.actions';
import { fetchSearchReultsYoutubeVideos } from '../redux/video/video.action.creators';

export default () => {
  const video = useSelector((state) => state.video.data);
  const searchTerm = useSelector((state) => state.video.searchTerm);
  const searchOptions = useSelector((state) => state.video.searchOptions);
  const searchSubMenu = useSelector((state) => state.video.searchSubMenu);

  const dispatch = useDispatch();
  const location = useLocation();
  const searchValue = location.search.slice(7);
  let history = useHistory();

  useEffect(() => {
    if (location.search.length <= 7) {
      history.push('/');
    } else if (location.search && !searchTerm) {
      dispatch(fetchSearchReultsYoutubeVideos(searchValue));
      dispatch(getSearchTerm(searchValue));
    } else {
      dispatch(fetchSearchReultsYoutubeVideos(searchValue));
      dispatch(getSearchTerm(searchValue));
    }
    return () => {
      dispatch(cleanUpData());
    };
  }, [location.pathname, location.search]);

  return {
    video,
    searchValue,
    searchOptions,
    searchSubMenu,
  };
};
