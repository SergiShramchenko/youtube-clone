import React from 'react';

import './videoContent.css';

const VideoContent = ({ video }) => (
  <div className='video-content'>
    {video.map((item) => (
      <div className='video-content__item' key={item.etag}>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={`https://www.youtube.com/watch?v=${item.id.videoId}`}
        >
          <div className='video-content__item__clip'>
            <img
              className='video-content__item__clip__video'
              src={item.snippet.thumbnails.medium.url}
              alt='yotube video'
            />
          </div>
        </a>
        <div className='video-content__item__clip__info'>
          <div className='video-content__item__clip-info__details'>
            <div className='video-content__item__clip-info__details__title'>
              {item.snippet.title}
            </div>
            <div className='video-content__item__clip-info__details__author'>
              {item.snippet.channelTitle}
            </div>

            <div className='video-content__item__clip-info__details__date'>
              {item.snippet.publishedAt}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default VideoContent;
