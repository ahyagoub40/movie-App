import { initialState } from "./initialState";

const movies = (state = initialState.movies, action) => {
  const getMovies = () => (

  )
  const options = {
    GET_MOVIES: getMovies
  }
  return (options[action.type] || options.default)()
}
export default movies