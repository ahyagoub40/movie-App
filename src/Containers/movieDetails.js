import React from 'react';
import { useSelector } from 'react-redux';
import MoviesList from './moviesList';
import '../App.css';
import Loading from '../Components/loading';
import MoviePoster from '../Components/movie-poster';
import Iframe from '../Components/iframe';
const MovieDetails = () => {

  const state = useSelector(state => state)
  if (state.loading) return <Loading />

  const movie = state.movie;
  const movies = state.movies;
  const poster = movies.find(m => m.imdbID === movie.imdb_id).Poster
  return (
    <div>
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
        <Iframe imdbKey={movie.videos.results[0]['key']} />
      </div>
      <div >
        <MoviesList className="similar-movies" />
      </div>
    </div>
  )
}

export default MovieDetails