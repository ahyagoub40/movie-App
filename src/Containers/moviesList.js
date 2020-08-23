import React from 'react'
import MovieCard from '../Components/movieCard'
import { useSelector, useDispatch } from 'react-redux'
import { movieApiCall } from '../axios'
import { getMovieDetails } from '../Store/actions'
import { loading, notLoading } from '../Store/Redux/loading-reducer';
const MoviesList = ({ className }) => {

  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies);
  const dispatching = (data) => dispatch(getMovieDetails(data));
  const isLoading = () => dispatch(loading());
  const isNotLoading = () => dispatch(notLoading());

  const onClick = (id) => {
    isLoading();
    movieApiCall(dispatching, id, isNotLoading)
  };

  return (
    <div className={className}>
      {
        movies.map((movie, index) => (
          <MovieCard
            key={index}
            name={movie.Title}
            year={movie.Year}
            poster={movie.Poster}
            onClick={() => onClick(movie.imdbID)}
          />
        ))
      }
    </div>
  )
}

export default MoviesList