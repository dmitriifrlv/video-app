import React from 'react';
import VideoCard from './videoCard/VideoCard';
import './videoContainer.css';

const VideoList = ({videos}) => {
    const renderedVideos =  videos.map((video) => {
        // console.log(video.id.videoId);
        return <VideoCard key={video.id.videoId} video={video} url={video.id.videoId} />
       
    });

    return <div className="videoContainer">{renderedVideos}</div>;
};
export default VideoList;