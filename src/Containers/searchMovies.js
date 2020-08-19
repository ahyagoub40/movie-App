import React from 'react'
import Button from '../Components/button'
import { omdbApiCall } from '../axios'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies, searchMovies } from '../Store/actions'

const SearchMovies = () => {
  const title = useSelector(state => state.title)
  const dispatch = useDispatch()

  const callback = (res) => dispatch(getMovies(res))

  const onSubmit = (e) => {
    e.preventDefault();
    omdbApiCall(callback, title)
  }

  return (
    <form onSubmit={onSubmit}>
      <input onChange={(e) => dispatch(searchMovies(e.target.value))} />
      <Button />
    </form>
  )
}

export default SearchMovies