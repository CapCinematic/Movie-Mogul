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
      setError(error.message)
    })
  }

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div>
      {selectedMovie ? (
        <SingleMovie movie={selectedMovie} />
      ) : (
        <MovieContainer movies={movies} onMovieClick={handleMovieClick} />
      )}
    </div>
  );
}

export default App;