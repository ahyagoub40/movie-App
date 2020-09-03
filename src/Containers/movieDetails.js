import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Typography } from '@material-ui/core'
import MoviesList from './moviesList';
import '../App.css';
import MoviePoster from '../Components/movie-poster';
import Iframe from '../Components/iframe';
import { TMDBAPI } from '../env-variables';
import { loading, notLoading } from '../Store/Redux/loading-reducer';
import { getMovieDetails } from '../Store/Redux/movie-reducer';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1000,
    background: "grey"
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const MovieDetails = ({ match }) => {

  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const imdbID = match.params.id;

  useEffect(() => {
    dispatch(loading());
    axios.get(`https://api.themoviedb.org/3/movie/${imdbID}?api_key=${TMDBAPI}&append_to_response=videos
    `)
      .then(response => {
        dispatch(getMovieDetails(response.data))
      })
      .then(() => dispatch(notLoading()))
      .catch(error => console.log(error))

  }, [imdbID, dispatch]);


  const movie = state.movie;
  const movies = state.movies;

  const poster = movies.find(m => m.imdbID === imdbID).Poster;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {!state.loader && (
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <MoviePoster className={classes.img} poster={poster} />
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography variant="h6">{movie.original_title}</Typography>
                  <Typography style={{ marginBottom: "20px", marginTop: "20px" }}> {movie.overview}</Typography>
                  <Typography >Language: {movie.original_language}</Typography>
                  <Typography>Status: {movie.status}</Typography>

                  <Typography style={{ marginRight: "10px" }}>release_date: {movie.release_date}</Typography>
                  <Typography>runtime: {movie.runtime} mins</Typography>
                </Grid>

              </Grid>
              <Grid item>
                <Typography variant="h6">{movie.popularity}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid container>
            {
              movie?.videos?.results[0] &&
              <Iframe imdbKey={movie.videos.results[0]['key']} />
            }
          </Grid>
          <Grid container wrap='wrap' >
            <MoviesList className="similar-movies" />
          </Grid>
        </Paper>
      )}
    </div>
  );
}

export default MovieDetails