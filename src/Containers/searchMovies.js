import React from 'react';
import Button from '../Components/button';
import { omdbApiCall } from '../axios';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../Store/Redux/movies-reducer';
import { searchMovies } from '../Store/Redux/title-reducer';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import '../App.css';

const SearchMovies = () => {
  const title = useSelector(state => state.title);
  const dispatch = useDispatch();
  const callback = (res) => dispatch(getMovies(res));

  const onSubmit = (e) => {
    e.preventDefault();
    omdbApiCall(callback, title)
  }

  return (
    <form onSubmit={onSubmit} className="SearchForm">
      <div >
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        onChange={(e) => dispatch(searchMovies(e.target.value))}
        value={title}
      />
      <Button>Search</Button>
    </form>
  )
}

export default SearchMovies