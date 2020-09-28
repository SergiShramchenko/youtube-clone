import { updateState } from '../reducer.utils';

export const startLoading = (state) => updateState(state, { loading: true });

export const stopLoading = (state) => updateState(state, { loading: false });

export const setError = (state) => updateState(state, { error: true });

export const fetchVideoInfo = (state, action) =>
  updateState(state, { data: action.payload });

export const getSearchTerm = (state, action) =>
  updateState(state, { searchTerm: action.payload });

export const cleanUpData = (state) => updateState(state, { data: [] });

export const fetchTrendsVideoInfoFromCategory = (state, action) =>
  updateState(state, { data: action.payload });
