const initialState = [];

// actions
export const getMovies = (payload) => ({
  type: 'GET_MOVIES', payload
});
export const resetMovies = (payload) => ({
  type: 'RESET_MOVIES', payload
});

// reducer
const movies = (state = initialState, action) => {
  const getMovies = () => (
    [
      ...action.payload
    ]
  )
  const resetMovies = () => initialState
  const options = {
    GET_MOVIES: getMovies,
    RESET_MOVIES: resetMovies,
    default: () => state
  }
  return (options[action.type] || options.default)()
};

export default movies;