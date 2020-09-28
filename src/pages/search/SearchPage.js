import React from 'react';

import Header from '../../containers/header';
import Navigation from '../../containers/navigation';
import SearchFilters from '../../containers/search-filters';
import TrendsContent from '../../containers/trends-content';

import useSearchResultsYoutubeVideos from '../../custom-hooks/useSearchResultsYoutubeVideos';

export default () => {
  const {
    video,
    searchValue,
    searchOptions,
    searchSubMenu,
  } = useSearchResultsYoutubeVideos();

  return (
    <>
      <Header />
      <Navigation />
      <SearchFilters
        searchValue={searchValue}
        searchOptions={searchOptions}
        searchSubMenu={searchSubMenu}
      />
      <TrendsContent video={video} />
    </>
  );
};
