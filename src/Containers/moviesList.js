import React from 'react';
import MovieCard from '../Components/movieCard';
import { useSelector, useDispatch } from 'react-redux';
import '../App.css';

import Button from '../Components/button';
import { resetMovies } from '../Store/Redux/movies-reducer';

const MoviesList = ({ className }) => {
  const movies = useSelector(state => state.movies);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={className || "movie-lists"}>
        {
          movies.length > 0
            ?
            <div>
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
            : <h1>Search for a movies!</h1>
        }
      </div>
    </div>
  )
}

export default MoviesList