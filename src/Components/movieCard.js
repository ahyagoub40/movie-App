import React from 'react'


const MovieCard = ({ name, poster, year }) => {
  return (
    <div>
      <div width='20px' height='30px' border='solid'>
        <img src={
          (poster === 'N/A') ? "https://www.labaleine.fr/sites/default/files/image-not-found.jpg" : poster
        }
          alt="movie poster"
          width="300px" heigth="500px" />
      </div>
      <div>
        <p>{year}</p>
        <p>{name}</p>
      </div>
    </div>
  )
}

export default MovieCard