import React from 'react'
import MovieDetails from '../Components/movieDetails'

const MoviesList = ({ movies }) => {
  return (
    <div>
      {movies.map(movie => (
        <MovieDetails />
      ))}
    </div>
  )
}

export default MovieDetails