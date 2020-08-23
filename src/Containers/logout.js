import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Store/actions';
import { Redirect } from 'react-router-dom';
import Button from '../Components/button';

const Logout = () => {

  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.loggedIn.status);

  if (!loggedIn) {
    return (<Redirect to="/" />)
  }
  return (
    <Button onClick={() => dispatch(logout())}>
      Logout
    </Button>
  )
};

export default Logout;