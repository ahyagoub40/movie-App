import { combineReducers } from 'redux'
import movies from './movies-reducer'
import title from './title-reducer'
import movie from './movie-reducer'

export default combineReducers({ movies, title, movie })