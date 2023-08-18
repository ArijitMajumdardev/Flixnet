import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Card from './Card';
import "../style/search.scss"

export default function Search() {

  const {name}=useParams();

  const [movies,setMovies] = useState([]);


const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/search/movie',
  params: {query:name ,include_adult: 'false', language: 'en-US', page: '1'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODk0OTY4YWQxOTc4MWI5NjM5NzNkMzczOTUyNDkwOSIsInN1YiI6IjY0ZDViMDc4ZDEwMGI2MDBlMjY4YWJmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.46mxS_dNh9FNGA0IaP3zp63wvB6k1q14ZEQFtP2l0oY'
  }
};

axios
  .request(options)
  .then(function (response) {
    setMovies(response.data.results);
    // console.log(response.data);

  })
  .catch(function (error) {
    console.error(error);
  });



//   <div className="search">

  
//   <h1>search results for : {(name).toUpperCase()}</h1>
// <div className="movie_list">
// <div className="list_card"> 

// { movies.map(movie=>(<Card movie={movie} />))}
// </div> 

// {/* {console.log("nnn")} */}

//  </div>
 



// </div>

  

  return (

    <div  className="search">

      {movies.length?
      
       <div>

<h1>search results for : {(name).toUpperCase()}</h1>
      <div className="movie_list">
     <div className="list_card"> 
     
     { movies.map(movie=>(<Card movie={movie} />))}
     </div> 
     
        </div>
        
        
       </div>

    
        :

       <div className='noSearch'>

          <h1>No Result Found</h1>

       </div>

        
    } 

</div>
    
   
  )
}
