import React from 'react'
import { useSelector } from 'react-redux'

const MovieDetails = () => {
  const movie = useSelector(state => state.movie)
  return (
    <div>
      <div>Title: {movie.original_title}</div>
      <div>Overview: {movie.overview}</div>
      <div>Popularity: {movie.popularity}</div>
      <div>Release Date: {movie.release_date}</div>
      <div>Run Time: {movie.runtime}</div>
      <div>Status: {movie.status}</div>
      <div>Language: {movie.original_language}</div>
      <div>Trailer:
        <a href="https://www.youtube.com/watch?v=SUXWAEX2jlg">
          Trailer
        </a>
        {movie.status}</div>
    </div>
  )
}

export default MovieDetails