import { combineReducers } from 'redux';
import movies from './movies-reducer';
import title from './title-reducer';
import movie from './movie-reducer';
import loader from './loading-reducer';
import loggedIn from './login-reducer';

const appReducer = combineReducers({ movies, title, movie, loader, loggedIn });

const rootReducer = (state, action) => {
  if (action.type === 'SET_LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;