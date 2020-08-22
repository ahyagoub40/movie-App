import React from 'react';
import './App.css';
import SearchMovies from '../src/Containers/searchMovies'
import MoviesList from './Containers/moviesList'
import Logout from './Containers/logout';


function App() {
  return (
    <div className="App">
      <Logout />
      <SearchMovies />
      <MoviesList />
    </div>
  );
}

export default App;
