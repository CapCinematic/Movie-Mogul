import React from 'react';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';

function MovieContainer({ movies }) {
  return (
    <div className="movie-container">
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
           <NavLink to={`/movies/${movie.id}`} key={movie.id} className="movie-item">
            <img src={movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>Average Rating: {movie.average_rating}</p>
            <p>Release Date: {movie.release_date}</p>
          </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
MovieContainer.propTypes = {
  movies: propTypes.array.isRequired,
  onMovieClick: propTypes.func.isRequired,
}

export default MovieContainer;

