import {
  START_LOADING,
  STOP_LOADING,
  SET_ERROR,
  FETCH_VIDEO_INFO,
  GET_SEARCH_TERM,
  CLEAN_UP_DATA,
  FETCH_TRENDS_VIDEO_INFO_FROM_CATEGORY,
  ACTIVE_SEARCH_SUB_MENU,
  ACTIVE_SEARCH_SUB_MENU_ITEM,
} from './video.types';

import {
  startLoading,
  stopLoading,
  setError,
  fetchVideoInfo,
  getSearchTerm,
  cleanUpData,
  fetchTrendsVideoInfoFromCategory,
} from './video.reducer.utils';

import music from '../../assets/svg/music.svg';
import games from '../../assets/svg/games.svg';
import news from '../../assets/svg/news.svg';
import movies from '../../assets/svg/movies.svg';

const initialState = {
  data: [],
  loading: false,
  error: false,
  searchTerm: '',
  videoCategory: [
    { name: 'Music', id: 10, img: music },
    { name: 'Games', id: 20, img: games },
    { name: 'News', id: 25, img: news },
    { name: 'Movies', id: 30, img: movies },
  ],
  searchOptions: [
    {
      title: 'Type',
      searchTitle: 'type',
      parametres: [
        {
          name: 'Channel',
          searchName: 'channel',
          active: false,
        },
        {
          name: 'Playlist',
          searchName: 'playList',
          active: false,
        },
        { name: 'Video', searchName: 'video', active: false },
      ],
    },
    {
      title: 'Duration',
      searchTitle: 'videoDuration',
      parametres: [
        { name: 'Long', searchName: 'long', active: false },
        { name: 'Medium', searchName: 'medium', active: false },
        { name: 'Short', searchName: 'short', active: false },
      ],
    },
    {
      title: 'Definition',
      searchTitle: 'videoDefinition',

      parametres: [
        { name: 'High', searchName: 'high', active: false },
        { name: 'Standart', searchName: 'standart', active: false },
      ],
    },
    {
      title: 'Order',
      searchTitle: 'order',
      parametres: [
        { name: 'Relevance', searchName: 'relevance', active: true },
        { name: 'Date', searchName: 'date', active: false },
        { name: 'View count', searchName: 'viewCount', active: false },
        { name: 'Rating', searchName: 'rating', active: false },
      ],
    },
  ],
  searchSubMenu: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return startLoading(state);
    case STOP_LOADING:
      return stopLoading(state);
    case SET_ERROR:
      return setError(state);
    case FETCH_VIDEO_INFO:
      return fetchVideoInfo(state, action);
    case GET_SEARCH_TERM:
      return getSearchTerm(state, action);
    case CLEAN_UP_DATA:
      return cleanUpData(state);
    case FETCH_TRENDS_VIDEO_INFO_FROM_CATEGORY:
      return fetchTrendsVideoInfoFromCategory(state, action);
    case ACTIVE_SEARCH_SUB_MENU:
      return {
        ...state,
        searchSubMenu: !state.searchSubMenu,
      };
    case ACTIVE_SEARCH_SUB_MENU_ITEM:
      return {
        ...state,
        searchOptions: [
          ...state.searchOptions.map((item) => {
            return {
              ...item,
              parametres: [
                ...item.parametres.map((el) => {
                  return {
                    ...el,
                    active: el.active,
                  };
                }),
              ],
            };
          }),
        ],
      };
    default:
      return state;
  }
};
