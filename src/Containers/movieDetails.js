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
      <div>
        <iframe title="trailer" width="560" height="315"
          src={`https://www.youtube.com/embed/${movie?.videos?.results[0]['key']}`}
          frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
      </div>
      <div >
        <MoviesList className="similar-movies" />
      </div>
    </div>
  )
}

export default MovieDetails