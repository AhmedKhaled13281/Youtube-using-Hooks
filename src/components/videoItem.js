import React from 'react'
import '../VideoItem.css'
class VideoItem extends React.Component {
  constructor(props){
    super(props)
  }

  sendTheVideo = () =>{
    this.props.onSelectingVideo(this.props.video)
  }
  render() {

    return(
    <div onClick={this.sendTheVideo} className="video-item item">
      <img className="ui image" src={this.props.video.snippet.thumbnails.high.url}/>
      <div className="content">
      <h2 className="header">{this.props.video.snippet.title}</h2>
      </div>
    </div>
  )
  }
}

export default VideoItem
