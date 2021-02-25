import React from 'react';
import './videoCard.css';

const VideoItem = ({video}) => {
    return (
        <div className="videoCard">
            <img className="videoCard__img" src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className="videoCard__text">
                <p>{video.snippet.title}</p>
                <p>{video.snippet.channelTitle}</p>
            </div>
        </div>
    )
};
export default VideoItem;