import React from 'react';
import MovieCard from '../Components/movieCard';
import { useSelector } from 'react-redux';
import '../App.css';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    display: 'flex',
    justifyContent: 'center',

  }
}));



const MoviesList = ({ className }) => {
  const movies = useSelector(state => state.movies);
  const classes = useStyles();
  return (
    <div className={className || classes.root}>
      {
        movies.length > 0
          ?
          <GridList cellHeight={180} className={classes.gridList} >
            {movies.map((movie, index) => (
              <MovieCard
                key={index}
                name={movie.Title}
                year={movie.Year}
                poster={movie.Poster}
                imdbID={movie.imdbID}
              />
            ))}
          </GridList>
          : <h1 className="search-movies" >Search for a movies!</h1>
      }
    </div>
  )
}

export default MoviesList