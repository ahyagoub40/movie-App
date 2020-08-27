import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Typography } from '@material-ui/core'
import MoviesList from './moviesList';
import '../App.css';
import Loading from '../Components/loading';
import MoviePoster from '../Components/movie-poster';
import Iframe from '../Components/iframe';
import { TMDBAPI } from '../env-variables';
import { loading, notLoading } from '../Store/Redux/loading-reducer';
import { getMovieDetails } from '../Store/Redux/movie-reducer';

const MovieDetails = ({ match }) => {

  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const imdbID = match.params.id;

  useEffect(() => {
    dispatch(loading());
    axios.get(`http://api.themoviedb.org/3/movie/${imdbID}?api_key=${TMDBAPI}&append_to_response=videos
    `)
      .then(response => {
        console.log('response', response)
        dispatch(getMovieDetails(response.data))
      })
      .then(() => dispatch(notLoading()))
      .catch(error => console.log(error))

  }, [imdbID, dispatch]);


  const movie = state.movie;
  const movies = state.movies;

  console.log('imdbID', imdbID)
  console.log('movies', movies)
  const poster = movies.find(m => m.imdbID === imdbID).Poster;

  if (state.loader) return <Loading />

  return (
    <div style={{ margin: "100px" }}>
      <div className="title-box">
        <div className="title-rating">
          <Typography variant="h6">{movie.original_title}</Typography>
          <Typography variant="h6">{movie.popularity}</Typography>
        </div>
        <div id="date-runtime">
          <Typography style={{ marginRight: "10px" }}>{movie.release_date}</Typography>
          <Typography>{movie.runtime} mins</Typography>
        </div>
      </div>
      <div id="poster-trailer">
        <MoviePoster poster={poster} />
        {
          movie?.videos?.results[0] &&
          <Iframe imdbKey={movie.videos.results[0]['key']} />
        }
      </div>
      <div id="movie-overview">
        <Typography style={{ marginBottom: "20px", marginTop: "20px" }}> {movie.overview}</Typography>
        <Typography >Language: {movie.original_language}</Typography>
        <Typography>Status: {movie.status}</Typography>
      </div>
      <div style={{ marginTop: "100px" }}>
        <Typography variant="h6">similar movies</Typography>
        <MoviesList className="similar-movies" />
      </div>
    </div>
  )
}

export default MovieDetails