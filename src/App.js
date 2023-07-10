import React, { useEffect, useState } from 'react';
import './App.css';
import mockData from './mockData';
import MovieContainer from './MovieContainer';
import './MovieContainer.css';
import SingleMovie from './SingleMovie';
import './SingleMovie.css';
import acquireMovieInfo from './APIcalls';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ErrorComponent from './Error';


function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    acquireMovieInfo('movies')
    .then((data) => {
      setMovies(data.movies);
    })
    .catch((error) => {
      setError(error.message || ('Failed to fetch movies'))
    })
  }

  const HandleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };
  
  const HandleReturnHome = () => {
    setSelectedMovie(null)
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<MovieContainer movies={movies} onMovieClick={HandleMovieClick} />} />
        <Route path="/:movieId" element={<SingleMovie returnHome={HandleReturnHome}/>}/>
        <Route path="/error" element={<ErrorComponent message={'Network response error has occured'}/>}/>
      </Routes>
    </div>
  );
}

export default App;