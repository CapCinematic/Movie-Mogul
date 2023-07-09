import React from 'react';
import propTypes from 'prop-types'

const MovieContainer = ({ movies, onMovieClick }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="movie-item"
          onClick={() => onMovieClick(movie)}
        >
          <img src={movie.poster_path} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>Average Rating: {movie.average_rating}</p>
          <p>Release Date: {movie.release_date}</p>
        </div>
      ))}
    </div>
  );
};

MovieContainer.propTypes = {
  movies: propTypes.array.isRequired,
  onMovieClick: propTypes.func.isRequired,
}

export default MovieContainer;

