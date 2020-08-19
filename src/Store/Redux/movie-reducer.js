import { initialState } from "./initialState";

const movie = (state = initialState.movie, action) => {
  const getMovieDetails = () => (
    {
      ...action.payload
    }
  )
  const options = {
    GET_MOVIE_DETAILS: getMovieDetails,
    default: () => state
  }
  return (options[action.type] || options.default)()
}
export default movie