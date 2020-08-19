import React from 'react'
import MovieCard from '../Components/movieCard'
import { useSelector } from 'react-redux'


const MoviesList = () => {
  const movies = useSelector(state => state.movies)
  return (
    <div>
      {
        movies.map((movie, index) => (
          <MovieCard
            key={index}
            name={movie.Title}
            year={movie.Year}
            poster={movie.Poster}
          />
        ))
      }
    </div>
  )
}

export default MoviesList