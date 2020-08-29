import { combineReducers } from 'redux';
import movies from './movies-reducer';
import title from './title-reducer';
import movie from './movie-reducer';
import loader from './loading-reducer';
import loggedIn from './login-reducer';

export default combineReducers({ movies, title, movie, loader, loggedIn });
