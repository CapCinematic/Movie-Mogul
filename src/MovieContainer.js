import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieContainer = ({ movies, onMovieClick }) => {
  return (
    <div className="movie-container">
      <div className="movie-list">
        {movies.map((movie) => (
          <Link>
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
          </Link>
        ))}
      </div>
    </div>
  );
};

MovieContainer.propTypes = {
  movies: PropTypes.array.isRequired,
  onMovieClick: PropTypes.func.isRequired,
};

export default MovieContainer;
