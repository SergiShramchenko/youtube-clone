import React from 'react';

import Header from '../../containers/header';
import Navigation from '../../containers/navigation';
import TrendsMenu from '../../containers/trends-menu';
import TrendsContent from '../../containers/trends-content';

import useTrendsYoutubeVideos from '../../custom-hooks/useTrendsYoutubeVideos';

export default () => {
  const { video, windowWidth } = useTrendsYoutubeVideos();

  return (
    <>
      <Header />
      <Navigation />
      <TrendsMenu />
      <TrendsContent video={video} windowWidth={windowWidth} />
    </>
  );
};
