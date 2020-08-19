import React from 'react'
import { Link } from 'react-router-dom'
const MovieCard = ({ name, poster, year, onClick }) => {
  return (
    <div>
      <div width='20px' height='30px' border='solid'>
        <Link to="/movie-details" onClick={onClick}>
          <img src={
            (poster === 'N/A') ? "https://www.labaleine.fr/sites/default/files/image-not-found.jpg" : poster
          }
            alt="movie poster"
            width="300px" heigth="500px" />
        </Link>
      </div>
      <div>
        <p>{year}</p>
        <p>{name}</p>
      </div>
    </div>
  )
}

export default MovieCard