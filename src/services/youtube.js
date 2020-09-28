import axios from 'axios';

const apiKey = 'AIzaSyAKqL8vRBvW3yIQVKAGxN9aMeSsc613QJU';
const apiKey2 = 'AIzaSyDlAK7f8inIc7qscF_tSXWtKNN_fsZXkd8';
const apiKey3 = 'AIzaSyDBnURjTexCM8WhSPP9lJrMZXaK67HgKBg';

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: apiKey,
  },
});

export const youtubeVideos = async (searchTerm = '', searchName) => {
  const result = await youtube.get('/search', {
    params: {
      part: 'snippet,id',
      type: 'video',
      maxResults: 24,
      q: searchTerm,
    },
  });
  const data = await result.data.items;

  return data;
};

export const youtubePopularVideos = async (videoCategoryId = '') => {
  const result = await youtube.get('/videos', {
    params: {
      part: 'snippet,statistics,contentDetails',
      chart: 'mostPopular',
      regionCode: 'RU',
      maxResults: 24,
      videoCategoryId,
    },
  });
  const data = await result.data.items;

  return data;
};

export const youtubeSearchResultsWithFilters = async (params) => {
  const result = await youtube.get('/search', params);
  const data = await result.data.items;

  return data;
};
