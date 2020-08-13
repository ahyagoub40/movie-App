import { combineReducers } from 'redux'
import movies from './movie-reducer'
import title from './title-reducer'

export default combineReducers({ movies, title })