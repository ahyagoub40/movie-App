export const getMovies = (payload) => ({
  type: 'GET_MOVIES', payload
});

export const searchMovies = (title) => ({
  type: 'SEARCH_MOVIES', title
});

export const getMovieDetails = (payload) => ({
  type: 'GET_MOVIE_DETAILS', payload
});

export const login = (payload) => ({
  type: 'SET_LOGIN', payload
});

export const logout = () => ({
  type: 'SET_LOGOUT'
});