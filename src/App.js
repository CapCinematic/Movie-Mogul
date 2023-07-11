import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import MovieContainer from './MovieContainer';
import './MovieContainer.css';
import SingleMovie from './SingleMovie';
import './SingleMovie.css';
import acquireMovieInfo from './APIcalls';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ErrorComponent from './Error';

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

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

  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              {/* <NavLink to="/">Home</NavLink> */}
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<MovieContainer movies={movies} />}
          />
          <Route
            path="/movies/:id"
            element={<SingleMovie />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;