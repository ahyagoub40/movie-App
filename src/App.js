import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import store from './Store/store';
import Login from './Containers/login';
import AppBar from './Components/AppBar';
import MoviesList from './Containers/moviesList';
import MovieDetails from './Containers/movieDetails';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <AppBar />
          <Switch>
            <Route path="/movies-lists" component={MoviesList} />
            <Route path="/movie-details/:id" component={MovieDetails} />
            <Route path="/" exact component={Login} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
