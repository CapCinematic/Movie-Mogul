import React, { useEffect, useState } from 'react';
import './SingleMovie.css';
import PropTypes from 'prop-types';
import acquireMovieInfo from './APIcalls';

function SingleMovie({ movieId, returnHome }) {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = () => {
    acquireMovieInfo(`movies/${movieId}`)
      .then((data) => {
        setMovie(data.movie);
      })
      .catch((error) => {
        setError(error.message || 'Failed to fetch movie');
      });
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="single-movie">
      <button className="home-button" onClick={returnHome}>
        Home
      </button>
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

SingleMovie.propTypes = {
  movieId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  returnHome: PropTypes.func.isRequired,
};

export default SingleMovie;
