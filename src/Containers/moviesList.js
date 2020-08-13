import React from 'react'
import MovieDetails from '../Components/movieDetails'
import useAxios from '../axios'
const MoviesList = () => {
  const callBack = (res) => console.log(res)
  useAxios(callBack, 'terminator')
  return (
    <div>
      <MovieDetails />
    </div>
  )
}

export default MoviesList