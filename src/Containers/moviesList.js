import React from 'react';
import MovieCard from '../Components/movieCard';
import { useSelector } from 'react-redux';
import '../App.css';

const MoviesList = ({ className }) => {
  const movies = useSelector(state => state.movies);
  return (
    <div>
      <div className={className || "movie-lists"}>
        {
          movies.map((movie, index) => (
            <MovieCard
              key={index}
              name={movie.Title}
              year={movie.Year}
              poster={movie.Poster}
              imdbID={movie.imdbID}
            />
          ))
        }
      </div>
    </div>
  )
}

export default MoviesList