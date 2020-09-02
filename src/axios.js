import axios from 'axios'
import { OMDBAPI, FIREBASEAPI } from './env-variables'

// ombb Api call for movies
const omdbApiCall = (callback, text) => (

  axios.get(`https://www.omdbapi.com/?apikey=${OMDBAPI}&s=${text}`)
    .then(response => (
      callback(response.data.Search)
    ))
    .catch(error => console.log(error))
);

// firebase call for authentication
const authenticate = ({ successCallback, failureCallback, email, password, isSignUp }) => {
  //sign up new users
  let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASEAPI}`;
  if (!isSignUp) {
    // login excisting users
    url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASEAPI}`;
  }
  axios.post(url, { email, password, returnSecureToken: true })
    .then((response) => (
      successCallback(response.data)
    ))
    .catch((error) => (
      failureCallback(error.response.data.error.message)
    ))
};


export { omdbApiCall, authenticate }