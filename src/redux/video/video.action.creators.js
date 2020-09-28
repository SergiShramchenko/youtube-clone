import {
  startLoading,
  stopLoading,
  setError,
  fetchVideoInfo,
  cleanUpData,
} from './video.actions';

import {
  youtubeVideos,
  youtubePopularVideos,
  youtubeSearchResultsWithFilters,
} from '../../services/youtube';

export const fetchStartLineYoutubeVideos = () => async (dispatch) => {
  try {
    dispatch(startLoading());
    dispatch(fetchVideoInfo(await youtubeVideos()));
  } catch {
    dispatch(setError());
  } finally {
    dispatch(stopLoading());
  }
};

export const fetchSearchReultsYoutubeVideos = (
  searchTerm,
  searchName
) => async (dispatch) => {
  try {
    dispatch(startLoading());
    dispatch(fetchVideoInfo(await youtubeVideos(searchTerm)));
  } catch {
    dispatch(setError());
  } finally {
    dispatch(stopLoading());
  }
};

export const fetchMostPopularYoutubeVideos = () => async (dispatch) => {
  try {
    dispatch(startLoading());
    dispatch(cleanUpData());
    dispatch(fetchVideoInfo(await youtubePopularVideos()));
  } catch {
    dispatch(setError());
  } finally {
    dispatch(stopLoading());
  }
};

export const fetchMostPopularYoutubeVideosFromCategory = (categoryId) => async (
  dispatch
) => {
  try {
    dispatch(startLoading());
    dispatch(cleanUpData());
    dispatch(fetchVideoInfo(await youtubePopularVideos(categoryId)));
  } catch {
    dispatch(setError());
  } finally {
    dispatch(stopLoading());
  }
};

export const fetchSearchReultsYoutubeVideosWithFilters = (params) => async (
  dispatch
) => {
  try {
    dispatch(startLoading());
    dispatch(cleanUpData());
    dispatch(fetchVideoInfo(await youtubeSearchResultsWithFilters(params)));
  } catch {
    dispatch(setError());
  } finally {
    dispatch(stopLoading());
  }
};
