import React , {useState , useEffect} from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './searchBar'
import VideoList from './videoList'
import VideoDetails from './videoDetails'
import useVideos from '../Hooks/useVideos'

const App = () => {
  const [selectedVideo , setSelectedVideo] = useState(null);
  const [videos , fetchVideo] = useVideos('news');

  useEffect(() => {
    setSelectedVideo(videos[0])
  },[videos])

  return (
    <div className="ui container">
      <SearchBar submitPage={fetchVideo}/>
      <div className="ui grid">
        <div className="ui row">
        <div className="eleven wide column">
          <VideoDetails video={selectedVideo} />
        </div>
        <div className="five wide column">
          <VideoList onSelectingVideo={setSelectedVideo} videos={videos}/>
        </div>
        </div>
      </div>
    </div>
  )
}


export default App
