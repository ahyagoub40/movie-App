import React from 'react';
import { useSelector } from 'react-redux';
import MoviesList from './moviesList';
import '../App.css';

const MovieDetails = () => {
  const movie = useSelector(state => state.movie)
  console.log("movie:", movie)
  return (
    <div>
      <div>Title: {movie.original_title}</div>
      <div>Overview: {movie.overview}</div>
      <div>Popularity: {movie.popularity}</div>
      <div>Release Date: {movie.release_date}</div>
      <div>Run Time: {movie.runtime}</div>
      <div>Language: {movie.original_language}</div>
      <div>Status: {movie.status}</div>
      <div>Trailer:
        <a href={`https://www.youtube.com/watch?v=${movie?.videos?.results[0]['key']}`}>
          Trailer
        </a>
      </div>
      <div >
        <MoviesList className="similar-movies" />
      </div>
    </div>
  )
}

export default MovieDetails