import React from 'react';
import './App.css';
import MoviesList from './Containers/moviesList';
import ButtonAppBar from './Components/AppBar';

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <MoviesList />
    </div>
  );
}

export default App;
