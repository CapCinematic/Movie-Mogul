import React from 'react';
import './MovieContainer.css';

function MovieContainer({ movies }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-item">
          <img src={movie.poster_path} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>Average Rating: {movie.average_rating}</p>
          <p>Release Date: {movie.release_date}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieContainer;
