import React from 'react';
import './App.css';
import mockData from './mockData';
import MovieContainer from './MovieContainer';

function App() {
  return ( 
    <div>
      <MovieContainer movies={mockData.movies} />
    </div>
  );
}

export default App;
