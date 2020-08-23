const initialState = {};

// actions
export const getMovieDetails = (payload) => ({
  type: 'GET_MOVIE_DETAILS', payload
});

// reducer
const movie = (state = initialState, action) => {
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
};

export default movie;