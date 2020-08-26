import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchMovies from '../Containers/searchMovies';
import Logout from '../Containers/logout';
import '../App.css';
import { Link } from 'react-router-dom';

export default function ButtonAppBar({ path }) {


  return (
    <div className="NavBar">
      <AppBar position="fixed" >
        <Toolbar className="ToolBar">
          <Link to="/movies-lists">
            <Typography variant="h6" >
              Movie App
          </Typography>
          </Link>
          <div >
            <SearchMovies path={path} />
          </div>
          <Logout />
        </Toolbar>
      </AppBar>
    </div>
  );
}
