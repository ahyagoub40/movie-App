import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MoviesList from './moviesList';
import '../App.css';
import Loading from '../Components/loading';
import MoviePoster from '../Components/movie-poster';
import Iframe from '../Components/iframe';
import axios from 'axios';
import { TMDBAPI } from '../env-variables';
import { loading, notLoading } from '../Store/Redux/loading-reducer';
import { getMovieDetails } from '../Store/Redux/movie-reducer';
import AppBar from '../Components/AppBar';
const MovieDetails = ({ match }) => {

  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const imdbID = match.params.id;

  useEffect(() => {
    dispatch(loading());
    axios.get(`http://api.themoviedb.org/3/movie/${imdbID}?api_key=${TMDBAPI}&append_to_response=videos
    `)
      .then(response => (
        dispatch(getMovieDetails(response.data))
      ))
      .then(() => dispatch(notLoading()))
      .catch(error => console.log(error))

  }, [imdbID, dispatch]);

  const movie = state.movie;
  const movies = state.movies;
  const poster = movies.find(m => m.imdbID === imdbID).Poster;

  if (state.loader) return <Loading />

  return (
    <div>
      <div >
        <AppBar />
      </div>
      <div>Title: {movie.original_title}</div>
      <div>
        <MoviePoster poster={poster} />
      </div>
      <div>Overview: {movie.overview}</div>
      <div>Popularity: {movie.popularity}</div>
      <div>Release Date: {movie.release_date}</div>
      <div>Run Time: {movie.runtime}</div>
      <div>Language: {movie.original_language}</div>
      <div>Status: {movie.status}</div>
      <div>
        <Iframe imdbKey={movie?.videos?.results[0]['key']} />
      </div>
      <div >
        <MoviesList className="similar-movies" />
      </div>
    </div>
  )
}

export default MovieDetails