export const getMovies = (payload) => ({
  type: 'GET_MOVIES', payload
})

export const searchMovies = (title) => ({
  type: 'SEARCH_MOVIES', title
})

export const getMovieDetails = (payload) => ({
  type: 'GET_MOVIE_DETAILS', payload
})

export const loading = () => ({
  type: 'IS_LOADING'
})

export const notLoading = () => ({
  type: 'IS_NOT_LOADING'
})