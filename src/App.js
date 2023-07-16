import React, { useEffect, useState } from 'react';
import './App.css';
import MovieContainer from './MovieContainer';
import './MovieContainer.css';
import SingleMovie from './SingleMovie';
import './SingleMovie.css';
import acquireMovieInfo from './APIcalls';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ErrorComponent from './Error';
import blacklogo from './Assets/whitelogoMM.png';
import brandLogo from './Assets/whitebrandMM.png';
import whiteChainImage from '../src/Assets/whitechain.png'

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    acquireMovieInfo('movies')
      .then((data) => {
        setMovies(data.movies);
      })
      .catch((error) => {
        setError(error.message || 'Failed to fetch movies');
      });
  };

  if (error) {
    return <ErrorComponent message={error} />;
  }

  return (
    <div>
      <nav>
        <div className="logo-container">
          <img src={blacklogo} alt="My Movie App" className="logo" /> 
        </div>
        <div className="image-container">
        <img src={whiteChainImage} alt="White Chain" className="white-chain-image" />
      </div>
      </nav>
      <Routes>
        <Route path="/" element={<MovieContainer movies={movies} />} />
        <Route path="/movies/:id" element={<SingleMovie />} />
      </Routes>
      <Link to="/" className="brand-logo-link">
        <img src={brandLogo} alt="Brand Logo" className="brand-logo" />
      </Link>
    </div>
    );
}

export default App;
