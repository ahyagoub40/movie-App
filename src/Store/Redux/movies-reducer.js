import { initialState } from "./initialState";

const movies = (state = initialState.movies, action) => {
  const getMovies = () => (
    [
      ...action.payload
    ]
  )
  const options = {
    GET_MOVIES: getMovies,
    default: () => state
  }
  return (options[action.type] || options.default)()
}
export default movies