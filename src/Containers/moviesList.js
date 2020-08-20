import React from 'react'
import MovieCard from '../Components/movieCard'
import { useSelector, useDispatch } from 'react-redux'
import { movieApiCall } from '../axios'
import { getMovieDetails } from '../Store/actions'

const MoviesList = ({ className }) => {

  const dispatch = useDispatch()
  const movies = useSelector(state => state.movies)
  const callback = (data) => dispatch(getMovieDetails(data))

  return (
    <div className={className}>
      {
        movies.map((movie, index) => (
          <MovieCard
            key={index}
            name={movie.Title}
            year={movie.Year}
            poster={movie.Poster}
            onClick={() => movieApiCall(callback, movie.imdbID)}
          />
        ))
      }
    </div>
  )
}

export default MoviesList