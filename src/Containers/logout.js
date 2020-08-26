import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Store/Redux/login-reducer';
import { Redirect } from 'react-router-dom';
import Button from '../Components/button';

const Logout = () => {

  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.loggedIn.status);

  const onClick = () => {
    dispatch(logout());
    localStorage.clear();
    return (<Redirect to="/" />);
  }
  if (!loggedIn) {
    return (<Redirect to="/" />)
  }
  return (
    <Button onClick={onClick}>
      Logout
    </Button>
  )
};

export default Logout;