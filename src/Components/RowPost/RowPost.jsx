import React ,{useEffect,useState} from 'react'
import "./RowPost.css"
import { API_KEY,imageUrl} from '../../constants/constants'

import axios from '../../axios'
import YouTube from 'react-youtube'


function RowPost(props) {
  const [movies,setMovies]=useState([])
  const [urlId,setUrlId]=useState('')
    useEffect(()=>{

        axios.get(`/discover/movie?with_genres=${props.genre}`, {
            params: {
              language: 'en-US',
              api_key: API_KEY,
            },
          }).then(res=>{
            console.log(res.data)
            setMovies(res.data.results)
        }).catch(err=>{
            console.log(err)
        })

    },[])
    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    function handleClick(id){
      console.log(id)
      axios.get(`/movie/${id}/videos`, {
        params: {
          language: 'en-US',
          api_key: API_KEY,
        },
      }).then(res=>{
        console.log(res.data)
        if(res.data.results.length!==0){
          setUrlId(res.data.results[0])
        }else{
          console.log("trailer is not available")
        }
    }).catch(err=>{
        console.log(err)
    })
    }
  return (
    <div className="row">
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((movie)=>{

            return <img onClick={()=>handleClick(movie.id)} className={props.isSmall ? 'smallPoster' :'poster'} src={`${imageUrl+movie.backdrop_path}`} alt="cards" />

          })}
           
            
            
        </div>
        {urlId && <YouTube videoId={urlId.key} opts={opts}  />}
      
      
    </div>
  )
}

export default RowPost
