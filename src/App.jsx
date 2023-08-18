import React from "react";
import { useState } from "react"
import { BrowserRouter as Router , Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Search from "./components/Search"
import "../src/style/App.scss"
import Discover from "./components/Discover";
import { searchContext } from "./components/Context";
import MovieDetails from "./components/MovieDetails";
import Error from "./components/Error";
import Footer from "./components/Footer";


function App() {
  const [search, setSearch] = useState("");
  const [show,setShow] = useState(false)

  return (
    <>
  <searchContext.Provider value={{search,setSearch,show,setShow}}>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="movie/:id" element={<MovieDetails/>}></Route>
        <Route path="movies/:type" element={<Discover/>}></Route>
        <Route path="/search/:name" element={<Search/>}></Route>
        <Route path="/*" element={<Error/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    </searchContext.Provider>
    </>
  )
}

export default App
