import React from 'react'
import { Link } from 'react-router-dom'
import MoviePoster from './movie-poster'
import { Typography } from '@material-ui/core'

const MovieCard = ({ name, poster, year, imdbID }) => {

  return (
    <div>
      <div border='solid'>
        <Link to={`/movie-details/${imdbID}`} >
          < MoviePoster poster={poster} />
        </Link>
      </div>
      <div>
        <Typography>{year}</Typography>
        <Typography>{name}</Typography>
      </div>
    </div>
  )
}

export default MovieCard