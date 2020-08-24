import React from 'react';
import Button from '../Components/button';
import { TextField } from '@material-ui/core';
import { omdbApiCall } from '../axios';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../Store/Redux/movies-reducer';
import { searchMovies } from '../Store/Redux/title-reducer';
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
      <TextField id="outlined-basic" label="Search Movies" variant="outlined"
        onChange={(e) => dispatch(searchMovies(e.target.value))}
      />
      <Button>Search</Button>
    </form>
  )
}

export default SearchMovies