import React from 'react';
import './App.css';
import SearchMovies from '../src/Containers/searchMovies'
import MoviesList from './Components/moviesList'
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from '../src/Store/Redux/index'
const store = createStore(reducer, composeWithDevTools())
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SearchMovies />
        <MoviesList />
      </div>
    </Provider>
  );
}

export default App;
