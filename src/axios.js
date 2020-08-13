import axios from 'axios'
import { OMDBAPI } from './env-variables'

const axiosCall = (callback, text) => (

  axios.get(`http://www.omdbapi.com/?apikey=${OMDBAPI}&s=${text}`)
    .then(response => (
      callback(response.data.Search)
    ))
    .catch(error => console.log(error))

)

export default axiosCall