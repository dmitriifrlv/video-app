import React from 'react';
import './videoCard.css';

const VideoItem = ({video}) => {
    return (
        <div className="videoCard">
            <img className="videoCard__img" src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className="videoCard__text">
                <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} className="videoCard__text__title">{video.snippet.title}</a>
                <a href={`https://www.youtube.com/channel/${video.snippet.channelId}`} className="videoCard__text__channelName">{video.snippet.channelTitle}</a>
            </div>
        </div>
    )
};
export default VideoItem;