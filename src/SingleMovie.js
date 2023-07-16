import React, { useEffect, useState } from 'react';
import './SingleMovie.css';
import { useParams, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'
import acquireMovieInfo from './APIcalls';
import ErrorComponent from './Error';
import { MovieTypes, SingleMovieTypes, SingleMoviePropTypes } from './PropTypes';
import blacklogo from './Assets/whitelogoMM.png';


function SingleMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState('');
  const [error, setError] = useState('');
  const [showLogo, setShowLogo] = useState(true); 

  useEffect(() => {
    fetchMovie();
    setShowLogo(false);
  }, []);

  const fetchMovie = () => {
    acquireMovieInfo(`movies/${id}`)
      .then((data) => {
        setMovie(data.movie);
      })
      .catch((error) => {
        setError(error.message || 'Failed to fetch movie');
      });
  };

  if (error) {
    return <ErrorComponent />;
  }

  if (!movie) {
    return <div className='error-message'>'Failed to fetch movie 500 error'</div>;
  }

  return (
    <div className="single-movie">
    {showLogo && (
      <div className="logo-container">
        <img src={blacklogo} alt="Logo" />
      </div>
    )}
    <div className="single-movie">
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
    </div>
    
  );
}

export default SingleMovie;
