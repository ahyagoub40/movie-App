import { initialState } from './initialState'

const title = (state = initialState.title, action) => {
  const searchMovies = () => action.title
  const options = {
    SEARCH_MOVIES: searchMovies,
    default: () => state
  }
  return (options[action.type] || options.default)()
}

export default title