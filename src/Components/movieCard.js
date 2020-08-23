import React from 'react'
import { Link } from 'react-router-dom'
import MoviePoster from './movie-poster'

const MovieCard = ({ name, poster, year, imdbID }) => {

  return (
    <div>
      <div width='20px' height='30px' border='solid'>
        <Link to={`/movie-details/${imdbID}`} >
          < MoviePoster poster={poster} />
        </Link>
      </div>
      <div>
        <p>{year}</p>
        <p>{name}</p>
      </div>
    </div>
  )
}

export default MovieCard