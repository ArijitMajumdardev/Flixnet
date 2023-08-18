import React, { useState } from 'react'
import axios from 'axios'
import Card from './Card';
import "../style/discover.scss"
import { useParams } from 'react-router-dom';


export default function Discover() {

    const [discover,setDiscover] = useState([]);

    const {type} = useParams();
    
// import axios from 'axios';

const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${type ? type : "top_rated"}`,
    params: {
      include_adult: 'false',
      include_video: 'false',
      language: 'en-US',
      page: '1',
      sort_by: 'popularity.desc'
    },
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODk0OTY4YWQxOTc4MWI5NjM5NzNkMzczOTUyNDkwOSIsInN1YiI6IjY0ZDViMDc4ZDEwMGI2MDBlMjY4YWJmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.46mxS_dNh9FNGA0IaP3zp63wvB6k1q14ZEQFtP2l0oY'
    }
  };
  
  axios
    .request(options)
    .then(function (response) {
      setDiscover(response.data.results);
    })
    .catch(function (error) {
      console.error(error);
    });


  return (
    <div className='discover'>

        

        <div className="movie_list">

<h1>{(type ? type : "top rated").toUpperCase()}</h1>

        <div className="list_card">
        {
          discover.map(movie => (
             <Card movie={movie} />
         ))
 
        }
        </div>
        </div>

    </div>
  )
}
