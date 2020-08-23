import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App';
import MovieDetails from './Containers/movieDetails';
import Login from './Containers/login';
import store from './Store/store';

function Root() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/movies-lists" component={App} />
          <Route path="/movie-details/:id" component={MovieDetails} />
          <Route path="/" exact component={Login} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default Root;