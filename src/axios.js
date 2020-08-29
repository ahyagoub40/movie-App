import axios from 'axios'
import { OMDBAPI, FIREBASEAPI } from './env-variables'

// ombb Api call for movies
const omdbApiCall = (callback, text) => (

  axios.get(`http://www.omdbapi.com/?apikey=${OMDBAPI}&s=${text}`)
    .then(response => (
      callback(response.data.Search)
    ))
    .catch(error => console.log(error))
);

// firebase call for authentication
const authenticate = ({ successCallback, failureCallback, email, password, isSignUp }) => {

  let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASEAPI}`;
  if (!isSignUp) {
    url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASEAPI}`;
  }
  axios.post(url, { email, password, returnSecureToken: true })
    .then((response) => {
      console.log(response)
      successCallback(response.data)
    })
    .catch((error) => {
      console.log(error.response.data.error.message)
      failureCallback(error.response.data.error.message)
    }
    )
};


export { omdbApiCall, authenticate }