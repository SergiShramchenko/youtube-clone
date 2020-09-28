import React from 'react';

import './trendsContent.css';

export default ({ video, windowWidth }) => {
  return (
    <div className='trends-content'>
      {video.map((item) => (
        <div className='trends-content-item' key={item.etag}>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href={`https://www.youtube.com/watch?v=${
              item.id.videoId || item.id
            }`}
          >
            <div className='trends-content-item__video' tabIndex='0'>
              <img
                className='trends-content-item__video__img'
                src={item.snippet.thumbnails.high.url}
                alt='frontend dev.'
              />
            </div>
          </a>
          <div className='trends-content-item__video__info'>
            <div
              className='trends-content-item__video__info__clip-title'
              tabIndex='0'
            >
              {windowWidth < 600
                ? `${item.snippet.title.slice(0, 25)}...`
                : item.snippet.title}
            </div>
            <div className='trends-content-item__video__info__clip-info'>
              <div
                className='trends-content-item__video__info__clip-info__channel-title'
                tabIndex='0'
              >
                {item.snippet.channelTitle}
              </div>
            </div>
            <div className='trends-content-item__video__info__clip-desc'>
              {item.snippet.description.slice(0, 120) + '...'}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
