import React, { useEffect, useState } from 'react';
import './SingleMovie.css';
import { useParams, Link } from 'react-router-dom';
import propTypes from 'prop-types'
import acquireMovieInfo from './APIcalls';
import ErrorComponent from './Error';


function SingleMovie() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovie();
  }, [id]);

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
    return <div>Loading...</div>;
  }

  return (
    <div className="single-movie">
      <Link to="/">Back to Home</Link>
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