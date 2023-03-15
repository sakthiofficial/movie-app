import logo from './logo.svg';
import './App.css';
import { useState } from "react"
import * as React from 'react';
import Box from '@mui/material/Box';
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useEffect } from 'react';
import { Movies } from './movie/Movieslist';
import { Addmovie } from './movie/Addmovie';
import { MovieDetails } from './movie/MovieDetails';
import { MovieEdit } from './movie/Editbtn';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});






function App() {

  useEffect(() => {

    fetch("https://63899fdc4eccb986e895a926.mockapi.io/movies").then((data) => data.json()).then((val) => SetmovieList(val))

  }, [])
  const [movieList, SetmovieList] = useState([]);

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/movies">Movie App</Link>
          </li>
          <li>
            <Link to="/Addmovie">Add Movie</Link>
          </li>


        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies movieList={movieList} SetmovieList={SetmovieList} />} />

          <Route path="/Addmovie" element={<Addmovie movieList={movieList} SetmovieList={SetmovieList} />} />
          {/* setting the url extera variables */}
          <Route path="/movies/:key" element={<MovieDetails />} />
          <Route path="/movies/edit/:key" element={<MovieEdit />} />

          {/* <Route path="/home" element={<Home/>}/> */}
        </Routes>

        {/* <Main/> */}
      </div>
    </ThemeProvider>
  )
}
function Home() {
  return (

    <div className='home'>
      {/* <h1>Welcome</h1> */}
      <div className='img1'>
        <img src="https://c4.wallpaperflare.com/wallpaper/862/449/162/jack-reacher-star-wars-interstellar-movie-john-wick-wallpaper-preview.jpg" alt="" />

      </div>


    </div>
  )
}
export default App;
