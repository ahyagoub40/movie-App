import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import reducer from '../src/Store/Redux/index'
import App from './App';
import MovieDetails from './Containers/movieDetails';
import Login from './Containers/login';
const store = createStore(reducer, composeWithDevTools())

function Root() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/movies-lists" exact component={App} />
          <Route path="/movie-details" component={MovieDetails} />
          <Route path="/" exact component={Login} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default Root;