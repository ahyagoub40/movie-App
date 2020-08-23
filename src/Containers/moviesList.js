import React from 'react'
import MovieCard from '../Components/movieCard'
import { useSelector } from 'react-redux'
const MoviesList = ({ className }) => {

  const movies = useSelector(state => state.movies);


  return (
    <div className={className}>
      {
        movies.map((movie, index) => (
          <MovieCard
            key={index}
            name={movie.Title}
            year={movie.Year}
            poster={movie.Poster}
            imdbID={movie.imdbID}
          />
        ))
      }
    </div>
  )
}

export default MoviesList