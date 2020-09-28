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

export const startLoading = () => ({
  type: START_LOADING,
});

export const stopLoading = () => ({
  type: STOP_LOADING,
});

export const setError = () => ({
  type: SET_ERROR,
});

export const fetchVideoInfo = (data) => ({
  type: FETCH_VIDEO_INFO,
  payload: data,
});

export const getSearchTerm = (searchTerm) => ({
  type: GET_SEARCH_TERM,
  payload: searchTerm,
});

export const cleanUpData = () => ({
  type: CLEAN_UP_DATA,
});

export const fetchTrendsVideoFromCategory = (data) => ({
  type: FETCH_TRENDS_VIDEO_INFO_FROM_CATEGORY,
  payload: data,
});

export const activeSearchSubMenu = () => ({
  type: ACTIVE_SEARCH_SUB_MENU,
});

export const activeSearchSubMenuItem = (title, name) => ({
  type: ACTIVE_SEARCH_SUB_MENU_ITEM,
  payload: { title, name },
});
