import initialState from './initialState'

const title = (state = initialState.title, action) => {
  const searchMovies = () => (

  )
  const options = {
    SEARCH_MOVIES: searchMovies,
  }
  return (options[action.type] || options.defalut)()
}

export default title