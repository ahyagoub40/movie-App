import React from 'react';
import { useSelector } from 'react-redux';
import MoviesList from './moviesList';
import '../App.css';
import Loading from '../Components/loading';
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
        <img src={
          (poster === 'N/A') ? "https://www.labaleine.fr/sites/default/files/image-not-found.jpg" : poster
        }
          alt="movie poster"
          width="300px" heigth="500px" />
      </div>
      <div>Overview: {movie.overview}</div>
      <div>Popularity: {movie.popularity}</div>
      <div>Release Date: {movie.release_date}</div>
      <div>Run Time: {movie.runtime}</div>
      <div>Language: {movie.original_language}</div>
      <div>Status: {movie.status}</div>
      <div>
        <iframe title="trailer" width="560" height="315"
          src={`https://www.youtube.com/embed/${movie?.videos?.results[0]['key']}`}
          frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
        </iframe>
      </div>
      <div >
        <MoviesList className="similar-movies" />
      </div>
    </div>
  )
}

export default MovieDetails