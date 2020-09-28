import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { cleanUpData } from '../redux/video/video.actions';

export default (fetchYoutubeVideos) => {
  const video = useSelector((state) => state.video.data);
  const error = useSelector((state) => state.video.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchYoutubeVideos());

    return () => {
      dispatch(cleanUpData());
    };
  }, []);

  return {
    video,
    error,
  };
};
