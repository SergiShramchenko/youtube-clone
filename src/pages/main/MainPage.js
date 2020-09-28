import React from 'react';

import Header from '../../containers/header';
import Navigation from '../../containers/navigation';
import VideoContent from '../../containers/video-content';

import Error from '../error/Error';

import useYoutubeVideos from '../../custom-hooks/useYoutubeVideos';
import { fetchStartLineYoutubeVideos } from '../../redux/video/video.action.creators';

export default () => {
  const { video, error } = useYoutubeVideos(fetchStartLineYoutubeVideos);

  return error ? (
    <Error />
  ) : (
    <>
      <Header />
      <Navigation />
      <VideoContent video={video} />
    </>
  );
};
