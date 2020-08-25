import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchMovies from '../Containers/searchMovies';
import Logout from '../Containers/logout';
import '../App.css';

export default function ButtonAppBar() {


  return (
    <div className="NavBar">
      <AppBar position="fixed" >
        <Toolbar className="ToolBar">
          <Typography variant="h6" >
            Movie App
          </Typography>
          <div >
            <SearchMovies />
          </div>
          <Logout />
        </Toolbar>
      </AppBar>
    </div>
  );
}
