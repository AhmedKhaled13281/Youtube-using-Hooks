import React from 'react'
import VideoItem from './videoItem'
const VideoList = (props) => {
  const data = props.videos;
  const videos = data.map(video => {
    return <VideoItem onSelectingVideo={props.onSelectingVideo} key={video.id.videoId} video={video}/>
  })
  return (
    <div className="ui relaxed divided list">{videos}</div>
    )
}

export default VideoList
