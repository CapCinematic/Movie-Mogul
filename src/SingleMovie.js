import React, { useEffect, useState } from 'react';
import './SingleMovie.css';
import { useParams, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'
import acquireMovieInfo from './APIcalls';
import ErrorComponent from './Error';
import { MovieTypes, SingleMovieTypes, SingleMoviePropTypes } from './PropTypes';

function SingleMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = () => {
    acquireMovieInfo(`movies/${id}`)
      .then((data) => {
        setMovie(data.movie);
      })
      .catch((error) => {
        // navigate('/error')
        setError(error.message || 'Failed to fetch movie');
      });
  };

  if (error) {
    return <ErrorComponent />;

  }

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="single-movie">
      <NavLink to="/">Back to Home</NavLink>
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



export default SingleMovie;