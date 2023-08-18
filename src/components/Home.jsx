import React,{useState} from 'react'
import Discover from './Discover'
import { Carousel } from 'react-responsive-carousel'
import axios from 'axios'
import { Link } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { searchContext } from './Context';
import { useContext } from 'react';


import  "../style/home.scss"
import Card from './Card'


export default function Home() {

  const {search,setSearch,show,setShow}=useContext(searchContext);


  const [slide,setSlide] = useState([])
    

  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/popular',
    params: {language: 'en-US', page: '1'},
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODk0OTY4YWQxOTc4MWI5NjM5NzNkMzczOTUyNDkwOSIsInN1YiI6IjY0ZDViMDc4ZDEwMGI2MDBlMjY4YWJmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.46mxS_dNh9FNGA0IaP3zp63wvB6k1q14ZEQFtP2l0oY'
    }
  };
  
  axios
    .request(options)
    .then(function (response) {
      setSlide(response.data.results);
      // console.log(response.data.results)
    })
    .catch(function (error) {
      console.error(error);
    });

  return (

   <div className='home'>
     <div className="poster">
                 <Carousel
                    autoPlay={true}
                    showThumbs={false}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}>
                    
                    {
                        slide.map(movie => (
                            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average :""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel> 
            </div>

            <div className="discover">
            <Discover/>
            </div>
    
    </div>
   
  )
}
