import { initialState } from "./initialState";

const reducer = (state = initialState.movies, action) => {

  const getMovieDtails = (id) => (

  )
  const searchMovies = () => (

  )

  const options = {
    GET_MOVIE_DETAILS: getMovieDtails,
    SEARCH_MOVIES: searchMovies,
  }
  return (options[action.type] || options.default)()
}
export default reducer