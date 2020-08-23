const initialState = '';

// actions
export const searchMovies = (title) => ({
  type: 'SEARCH_MOVIES', title
});

// reducer
const title = (state = initialState, action) => {
  const searchMovies = () => action.title
  const options = {
    SEARCH_MOVIES: searchMovies,
    default: () => state
  }
  return (options[action.type] || options.default)()
};

export default title