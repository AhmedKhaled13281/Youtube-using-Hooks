import {useState , useEffect} from 'react';
import Youtube from '../apis/youtubeApi';

const useVideos = (defaultSearchterm) =>{
    const [videos , setVideos] = useState([]);

    useEffect(() => {
      fetchVideos(defaultSearchterm)
    },[])

    const fetchVideos =  async (value) =>{
        const response = await  Youtube.get('/search' ,{
           params : {
             q : value
           }
         })

        setVideos(response.data.items)
      }

      return [videos , fetchVideos]
}

export default useVideos
