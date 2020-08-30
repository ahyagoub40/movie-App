import React from 'react'
import { Link } from 'react-router-dom'
import MoviePoster from './movie-poster'
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
const MovieCard = ({ name, poster, year, imdbID }) => {

  return (
    <div>
      <Link to={`/movie-details/${imdbID}`} >
        <GridListTile >
          < MoviePoster poster={poster} />
          <GridListTileBar
            title={name}
            subtitle={year}
          />
        </GridListTile>
      </Link>
    </div>
  )
}

export default MovieCard