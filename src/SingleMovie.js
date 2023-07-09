import React from 'react';
import './SingleMovie.css';
import propTypes from 'prop-types'


function SingleMovie({ movie, returnHome }) {
  return (
    <div className="single-movie">
      <button className='home-button' onClick={
         returnHome
      }>Home</button>
      <div className="poster-container">
        <img src={movie.poster_path} alt={movie.title} />
      </div>
      <div className="info-container">
        <h2>{movie.title}</h2>
        <p>Average Rating: {movie.average_rating}</p>
        <p>Release Date: {movie.release_date}</p>
        <p>Runtime: {movie.runtime} min</p>
        <p>Genres: {movie.genres}</p>
        <p>Overview: {movie.overview}</p>
      </div>
    </div>
  );
}

SingleMovie.prototypes = {
  movie: propTypes.object.isRequired,
  returnHome: propTypes.func.isRequired
}

export default SingleMovie;