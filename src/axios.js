import axios from 'axios'
import { OMDBAPI } from './env-variables'
// import { useEffect } from 'react'

const omdbApiCall = (callback, text) => (

  axios.get(`http://www.omdbapi.com/?apikey=${OMDBAPI}&s=${text}`)
    .then(response => (
      callback(response.data.Search)
    ))
    .catch(error => console.log(error))

)

// const movieApiCall = () => (
//   useEffect(() => (

//   ))
// )

export { omdbApiCall }