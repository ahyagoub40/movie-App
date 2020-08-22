import { combineReducers } from 'redux';
import movies from './movies-reducer';
import title from './title-reducer';
import movie from './movie-reducer';
import loading from './loading-reducer';
import loggedIn from './login-reducer';

export default combineReducers({ movies, title, movie, loading, loggedIn })