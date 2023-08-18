import React from 'react'
import axios from 'axios';
import {useEffect, useState} from "react"
import Card from './Card';
import "../style/popular.scss"

export default function Popular() {

    const [popular,setPopular] = useState([])
    

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
        setPopular(response.data.results);
        // console.log(response.data.results)
      })
      .catch(function (error) {
        console.error(error);
      });
      
      

  return (
    <div className='pop'>
        
        <div className="movie__list">
            {/* <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2> */}
            <div className="list__cards">
                {
                    popular.map(movie => (
                        <Card movie={movie} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}
