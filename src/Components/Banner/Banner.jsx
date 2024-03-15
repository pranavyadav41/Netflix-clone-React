import React,{useEffect,useState} from 'react'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constants/constants'
import './Banner.css'

function Banner(){
    const [movie,setMovie]=useState({})
    console.log(movie)
    useEffect(()=>{

        axios.get('/movie/top_rated', {
            params: {
              language: 'en-US',
              api_key: API_KEY,
            },
          }).then(res=>{
            console.log(res.data)
            setMovie(res.data.results[1])
        }).catch(err=>{
            console.log(err)
        })

    },[])


    return (
        <div className='banner' style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}>
            <div className='content'>

                   <h1 className='title'>{movie ? movie.title : ""}</h1>
                   <div className='banner-buttons'>
                        <button className='button'>Play</button>
                        <button className='button'>My list </button>
                    </div> 
                    <h1 className="description">{movie ? movie.overview : ""}</h1>

            </div>
            <div className="fade_bottom">

            </div>

        </div>
    )
}

export default Banner