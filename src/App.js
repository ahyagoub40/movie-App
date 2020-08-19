import React from 'react';
import './App.css';
import SearchMovies from '../src/Containers/searchMovies'
import MoviesList from './Containers/moviesList'


function App() {
  return (
    <div className="App">
      <SearchMovies />
      <MoviesList />
    </div>
  );
}

export default App;
