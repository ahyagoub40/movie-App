import React from 'react';
import MovieCard from '../Components/movieCard';
import Button from '../Components/button';
import { useSelector, useDispatch } from 'react-redux';
import { resetMovies } from '../Store/Redux/movies-reducer';
import '../App.css';

const MoviesList = ({ className }) => {
  const movies = useSelector(state => state.movies);
  const dispatch = useDispatch();

  return (
    <div >
      {
        movies.length > 0
          ?
          <div className={className || "movie-lists"}>
            <Button onClick={() => dispatch(resetMovies())}>
              Clear Search
              </Button>
            {movies.map((movie, index) => (
              <MovieCard
                key={index}
                name={movie.Title}
                year={movie.Year}
                poster={movie.Poster}
                imdbID={movie.imdbID}
              />
            ))}
          </div>
          : <h1 className="search-movies" >Search for a movies!</h1>
      }
    </div>
  )
}

export default MoviesList