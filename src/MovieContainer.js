import React, { useState } from 'react';

function MovieContainer({ movies }) {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="movie-container">
      <div className="movie-list">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className={`movie-item ${selectedMovie === movie ? 'selected' : ''}`}
            onClick={() => handleMovieClick(movie)}
          >
            <img src={movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>Average Rating: {movie.average_rating}</p>
            <p>Release Date: {movie.release_date}</p>
          </div>
        ))}
      </div>
      {selectedMovie && (
        <div className="selected-movie">
          <h2>Selected Movie: {selectedMovie.title}</h2>
          <p>Average Rating: {selectedMovie.average_rating}</p>
          <p>Release Date: {selectedMovie.release_date}</p>
        </div>
      )}
    </div>
  );
}

export default MovieContainer;

