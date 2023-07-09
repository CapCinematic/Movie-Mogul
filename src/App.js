import React, { useEffect, useState } from 'react';
import './App.css';
import mockData from './mockData';
import MovieContainer from './MovieContainer';
import './MovieContainer.css';
import SingleMovie from './SingleMovie';
import './SingleMovie.css';
import acquireMovieInfo from './APIcalls';


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
      {selectedMovie ? (
        <SingleMovie movie={selectedMovie} ReturnHome={HandleReturnHome} />
      ) : (
        <MovieContainer movies={movies} onMovieClick={HandleMovieClick} />
      )}
    </div>
  );
}

export default App;