import axios from 'axios'
import { useEffect } from 'react'
import { OMDBAPI } from './env-variables'

const useAxios = (callback, text) => {

  return useEffect(() => {
    axios.get(`http://www.omdbapi.com/?apikey=${OMDBAPI}&s=${text}`)
      .then(response => (
        callback(response)
      ))
      .catch(error => console.log(error))
  })
}

export default useAxios