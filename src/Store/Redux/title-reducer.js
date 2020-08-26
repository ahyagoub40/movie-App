const initialState = '';

// actions
export const searchMovies = (title) => ({
  type: 'SEARCH_MOVIES', title
});
export const clearTitle = (title) => ({
  type: 'CLEAR_TITLE', title
});

// reducer
const title = (state = initialState, action) => {
  const searchMovies = () => action.title
  const clearTitle = () => initialState
  const options = {
    SEARCH_MOVIES: searchMovies,
    CLEAR_TITLE: clearTitle,
    default: () => state
  }
  return (options[action.type] || options.default)()
};

export default title