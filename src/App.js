import React from 'react';
import './App.css';
import MoviesList from './Containers/moviesList';
import ButtonAppBar from './Components/AppBar';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MovieDetails from './Containers/movieDetails';
import Login from './Containers/login';
import store from './Store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <ButtonAppBar />
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
