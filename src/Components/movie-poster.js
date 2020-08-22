import React from 'react';

const MoviePoster = ({ poster }) => (

  <img src={
    (poster === 'N/A') ? "https://www.labaleine.fr/sites/default/files/image-not-found.jpg" : poster
  }
    alt="movie poster"
    width="300px" heigth="500px" />

)

export default MoviePoster