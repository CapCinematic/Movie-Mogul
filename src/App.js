import React, { useState } from 'react';
import './App.css';
import mockData from './mockData';
import MovieContainer from './MovieContainer';
import './MovieContainer.css';
import SingleMovie from './SingleMovie';
import './SingleMovie.css';


function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div>
      {selectedMovie ? (
        <SingleMovie movie={selectedMovie} />
      ) : (
        <MovieContainer movies={mockData.movies} onMovieClick={handleMovieClick} />
      )}
    </div>
  );
}

export default App;