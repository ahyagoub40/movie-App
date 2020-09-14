import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '../Components/button';
import SearchMovies from '../Containers/searchMovies';
import Logout from '../Containers/logout';
import '../App.css';
import { resetMovies } from '../Store/Redux/movies-reducer';
import { clearTitle } from '../Store/Redux/title-reducer';
import { useHistory } from 'react-router-dom';
export default function ButtonAppBar() {
  const loggedIn = useSelector(state => state.loggedIn.status)
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div>
      {loggedIn && (
        <div className="NavBar">
          <AppBar position="fixed" >
            <Toolbar className="ToolBar">
              <Button onClick={() => {
                dispatch(resetMovies());
                dispatch(clearTitle());
                history.push("/movies-lists");
              }}>
                Movie App
        </Button>
              <div >
                <SearchMovies />
              </div>
              <Logout />
            </Toolbar>
          </AppBar>
        </div>
      )}
    </div>
  );
}
