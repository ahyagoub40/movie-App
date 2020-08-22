import React from 'react';

const Iframe = ({ imdbKey }) => (

  <iframe title="trailer" width="560" height="315"
    src={`https://www.youtube.com/embed/${imdbKey}`}
    frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
  </iframe>

)

export default Iframe