import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import "../style/header.scss";
import {searchContext } from './Context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';



export default function Header() {

  // const [input,setInput] = useState("")
  const {search,setSearch}=useContext(searchContext);

  const navigate = useNavigate();
  

const handleSearch = (event)=>{
  event.preventDefault();
  // setSearch(input);
navigate(`/search/${search}`)
  
  

}

  return (
  <>
  <nav className='head'>
    <div className='div1'>
     <div> <Link to={"/"} style={{textDecoration:"none",color:"white"}} ><h1>FLIXNET</h1></Link></div>


    <div className='links'> 
      <Link to={"movies/popular"} style={{textDecoration:"none",color:"white"}}>popular</Link>
      {/* <Link to={"movies/toprated"} style={{textDecoration:"none",color:"white"}}>Top rated</Link> */}
      <Link to={"movies/upcoming"} style={{textDecoration:"none",color:"white"}}>up comming</Link>
      {/* <p>{input}</p> */}
    </div>
    </div>


    <div className='div2'>
      <form className='form' onSubmit={handleSearch}>
        <input type="search" className='search' placeholder='search here' onChange={(e)=>{setSearch(e.target.value)}}/>
        <input type="submit" value={"search"}  className='btn' />
        
      </form>
    </div>
    
  </nav>
  
  
  </>
  )
}
