import React from 'react';
import { useDispatch } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '../Components/button';
import SearchMovies from '../Containers/searchMovies';
import Logout from '../Containers/logout';
import '../App.css';
import { resetMovies } from '../Store/Redux/movies-reducer';
import { clearTitle } from '../Store/Redux/title-reducer';

export default function ButtonAppBar({ path }) {
  const dispatch = useDispatch();

  return (
    <div className="NavBar">
      <AppBar position="fixed" >
        <Toolbar className="ToolBar">
          <Button onClick={() => {
            dispatch(resetMovies())
            dispatch(clearTitle())
          }}>
            Movie App
        </Button>
          <div >
            <SearchMovies path={path} />
          </div>
          <Logout />
        </Toolbar>
      </AppBar>
    </div>
  );
}
