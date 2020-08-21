import axios from 'axios'
import { OMDBAPI, TMDBAPI } from './env-variables'


const omdbApiCall = (callback, text) => (

  axios.get(`http://www.omdbapi.com/?apikey=${OMDBAPI}&s=${text}`)
    .then(response => (
      callback(response.data.Search)
    ))
    .catch(error => console.log(error))

)

const movieApiCall = (dispatching, id, changeLoadingState) => (
  axios.get(`http://api.themoviedb.org/3/movie/${id}?api_key=${TMDBAPI}&append_to_response=videos
  `)
    .then(response => (
      dispatching(response.data)
    ))
    .then(() => changeLoadingState())
    .catch(error => console.log(error))
)

export { omdbApiCall, movieApiCall }