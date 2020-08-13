import React from 'react'


const MovieCard = ({ name, poster, year }) => {
  return (
    <div>
      <div width='20px' height='30px' border='solid'>
        <img src={poster} alt="movie poster" />
      </div>
      <div>
        <p>{year}</p>
        <p>{name}</p>
      </div>
    </div>
  )
}

export default MovieCard