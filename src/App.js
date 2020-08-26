import React from 'react';
import './App.css';
import MoviesList from './Containers/moviesList';
import ButtonAppBar from './Components/AppBar';

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <h1>Movie App</h1>
      <MoviesList />
    </div>
  );
}

export default App;
