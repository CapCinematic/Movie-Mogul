import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


function MovieContainer({ movies }) {
  return (
    <div className="movie-container">
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">

           <NavLink to={`/movies/${movie.id}`} key={movie.id}>
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
  movies: PropTypes.arrayOf(
      PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      average_rating: PropTypes.number.isRequired,
      release_date: PropTypes.string.isRequired,
    })
  ).isRequired
}

export default MovieContainer;

